import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import HomePage from './components/HomePage';
import AboutPage from './pages/AboutPage';
import ServicesListPage from './pages/ServicesListPage';
import ServiceDetailPage from './pages/ServiceDetailPage';
import PartnersListPage from './pages/PartnersListPage';
import PartnerDetailPage from './pages/PartnerDetailPage';
import PolicyPage from './pages/PolicyPage';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/services" element={<ServicesListPage />} />
            <Route path="/services/:id" element={<ServiceDetailPage />} />
            <Route path="/partners" element={<PartnersListPage />} />
            <Route path="/partners/:id" element={<PartnerDetailPage />} />
            <Route path="/privacy" element={<PolicyPage slug="privacy" />} />
            <Route path="/terms" element={<PolicyPage slug="terms" />} />
            <Route path="/security" element={<PolicyPage slug="security" />} />
            <Route path="/cookies" element={<PolicyPage slug="cookies" />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </div>
  );
}

export default App;
