from fastapi import FastAPI, APIRouter, HTTPException
from dotenv import load_dotenv
from starlette.middleware.cors import CORSMiddleware
from motor.motor_asyncio import AsyncIOMotorClient
import os
import logging
import smtplib
import ssl
from email.message import EmailMessage
from pathlib import Path
from pydantic import BaseModel, Field, EmailStr
from typing import List, Optional
import uuid
from datetime import datetime


ROOT_DIR = Path(__file__).parent
load_dotenv(ROOT_DIR / '.env')

# MongoDB connection
mongo_url = os.environ['MONGO_URL']
client = AsyncIOMotorClient(mongo_url)
db = client[os.environ['DB_NAME']]

app = FastAPI()
api_router = APIRouter(prefix="/api")


# ===== Models =====
class StatusCheck(BaseModel):
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    client_name: str
    timestamp: datetime = Field(default_factory=datetime.utcnow)


class StatusCheckCreate(BaseModel):
    client_name: str


class ContactSubmission(BaseModel):
    name: str = Field(min_length=1, max_length=120)
    email: EmailStr
    company: Optional[str] = Field(default=None, max_length=160)
    inquiry_type: Optional[str] = Field(default="business", max_length=40)
    message: str = Field(min_length=5, max_length=5000)


# ===== Email helpers =====
INQUIRY_LABELS = {
    "business": "Business Enquiry",
    "partnership": "Partnership",
    "careers": "Careers",
    "support": "Support",
    "other": "Other",
}

logger = logging.getLogger(__name__)


def build_email(submission: ContactSubmission) -> EmailMessage:
    """Build the email message that will be sent to seema@ingrowlogy.com."""
    inquiry_label = INQUIRY_LABELS.get(submission.inquiry_type, submission.inquiry_type or "—")
    company = submission.company or "—"
    from_name = os.environ.get("CONTACT_FROM_NAME", "Ingrowlogy Website")
    from_email = os.environ.get("SMTP_USER", "")
    to_email = os.environ.get("CONTACT_TO_EMAIL", "seema@ingrowlogy.com")

    msg = EmailMessage()
    msg["Subject"] = f"[Ingrowlogy] {inquiry_label} — {submission.name}"
    msg["From"] = f"{from_name} <{from_email}>" if from_email else from_name
    msg["To"] = to_email
    msg["Reply-To"] = submission.email

    text_body = (
        f"New website enquiry\n"
        f"=====================\n\n"
        f"Name        : {submission.name}\n"
        f"Email       : {submission.email}\n"
        f"Company     : {company}\n"
        f"Enquiry type: {inquiry_label}\n"
        f"\nMessage\n-------\n{submission.message}\n"
    )

    html_body = f"""
    <div style="font-family: 'Helvetica Neue', Arial, sans-serif; background: #eef6f0; padding: 24px; color: #1a2520;">
      <div style="max-width: 600px; margin: 0 auto; background: #ffffff; border: 1px solid #d8eadf; border-radius: 8px; overflow: hidden;">
        <div style="background: linear-gradient(135deg, #22a884, #1c8d6f); padding: 24px 28px;">
          <div style="font-size: 11px; letter-spacing: 0.24em; text-transform: uppercase; color: #cdeee0; font-weight: 600;">
            New Website Enquiry
          </div>
          <div style="font-size: 22px; color: #ffffff; margin-top: 6px; font-weight: 600;">
            {inquiry_label}
          </div>
        </div>
        <div style="padding: 24px 28px;">
          <table style="width:100%; border-collapse: collapse; font-size: 14px;">
            <tr><td style="padding: 8px 0; color:#1a252099; width: 140px;">Name</td>
                <td style="padding: 8px 0; font-weight: 600;">{submission.name}</td></tr>
            <tr><td style="padding: 8px 0; color:#1a252099;">Email</td>
                <td style="padding: 8px 0;"><a href="mailto:{submission.email}" style="color:#22a884; text-decoration:none;">{submission.email}</a></td></tr>
            <tr><td style="padding: 8px 0; color:#1a252099;">Company</td>
                <td style="padding: 8px 0;">{company}</td></tr>
            <tr><td style="padding: 8px 0; color:#1a252099;">Enquiry type</td>
                <td style="padding: 8px 0;">{inquiry_label}</td></tr>
          </table>
          <div style="margin-top: 20px; padding-top: 18px; border-top: 1px solid #e3efe7;">
            <div style="font-size: 11px; letter-spacing: 0.22em; text-transform: uppercase; color: #22a884; font-weight: 600; margin-bottom: 10px;">
              Message
            </div>
            <div style="font-size: 14px; line-height: 1.7; color: #1a2520cc; white-space: pre-wrap;">{submission.message}</div>
          </div>
        </div>
        <div style="background:#f3f9f5; padding: 14px 28px; font-size: 11px; color:#1a252077; border-top: 1px solid #e3efe7;">
          Sent automatically from the Ingrowlogy website contact form.
        </div>
      </div>
    </div>
    """

    msg.set_content(text_body)
    msg.add_alternative(html_body, subtype="html")
    return msg


def send_via_smtp(msg: EmailMessage) -> None:
    """Send email via SMTP. Raises Exception on failure."""
    host = os.environ.get("SMTP_HOST", "smtp.gmail.com")
    port = int(os.environ.get("SMTP_PORT", "587"))
    user = os.environ.get("SMTP_USER", "")
    password = os.environ.get("SMTP_PASS", "")

    if not user or not password:
        raise RuntimeError("SMTP credentials are not configured (SMTP_USER / SMTP_PASS).")

    context = ssl.create_default_context()
    with smtplib.SMTP(host, port, timeout=20) as server:
        server.ehlo()
        server.starttls(context=context)
        server.ehlo()
        server.login(user, password)
        server.send_message(msg)


# ===== Routes =====
@api_router.get("/")
async def root():
    return {"message": "Hello World"}


@api_router.post("/status", response_model=StatusCheck)
async def create_status_check(input: StatusCheckCreate):
    status_obj = StatusCheck(**input.dict())
    await db.status_checks.insert_one(status_obj.dict())
    return status_obj


@api_router.get("/status", response_model=List[StatusCheck])
async def get_status_checks():
    status_checks = await db.status_checks.find().to_list(1000)
    return [StatusCheck(**sc) for sc in status_checks]


@api_router.post("/contact")
async def submit_contact(payload: ContactSubmission):
    """Receive a contact submission, persist it, and email it to seema@ingrowlogy.com."""
    record = {
        "id": str(uuid.uuid4()),
        "name": payload.name.strip(),
        "email": payload.email,
        "company": (payload.company or "").strip(),
        "inquiry_type": payload.inquiry_type or "business",
        "message": payload.message.strip(),
        "created_at": datetime.utcnow(),
        "email_sent": False,
        "email_error": None,
    }

    # Try to send email
    try:
        msg = build_email(payload)
        send_via_smtp(msg)
        record["email_sent"] = True
    except Exception as e:
        record["email_error"] = str(e)[:500]
        logger.exception("Failed to send contact email: %s", e)

    try:
        await db.contact_submissions.insert_one(record)
    except Exception as e:
        logger.exception("Failed to persist contact submission: %s", e)

    if not record["email_sent"]:
        # Don't reveal SMTP details — but tell the user we couldn't deliver
        raise HTTPException(
            status_code=503,
            detail="We received your details but couldn't deliver the email right now. Our team will still see your message — or please email info@ingrowlogy.com directly.",
        )

    return {"ok": True, "id": record["id"]}


@api_router.get("/contact/submissions")
async def list_contact_submissions(limit: int = 20):
    """Internal helper — list recent contact submissions (mock-only, no auth)."""
    items = await db.contact_submissions.find({}, {"_id": 0}).sort("created_at", -1).to_list(limit)
    return {"count": len(items), "items": items}


# Include the router in the main app
app.include_router(api_router)

# Configure CORS
cors_origins = os.environ.get("CORS_ORIGINS", "*")
allow_origins = [o.strip() for o in cors_origins.split(",")] if cors_origins != "*" else ["*"]

app.add_middleware(
    CORSMiddleware,
    allow_credentials=True,
    allow_origins=allow_origins,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Logging
logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s - %(name)s - %(levelname)s - %(message)s',
)


@app.on_event("shutdown")
async def shutdown_db_client():
    client.close()
