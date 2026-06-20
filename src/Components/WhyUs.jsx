import React from 'react';

const WhyUs = () => {
  return (
    <div className="container py-5">
      <div className="text-center mb-5">
        <h2 className="fw-bold">Why Trust PropUnlock?</h2>
        <p className="text-muted">We build absolute security and direct loops between builders and buyers.</p>
      </div>
      <div className="row g-4 text-start">
        <div className="col-md-4">
          <div className="p-4 bg-white rounded-4 shadow-sm border border-light">
            <div className="bg-primary text-white p-3 rounded-3 d-inline-block mb-3"><i className="bi bi-shield-check fs-4"></i></div>
            <h5 className="fw-bold">100% Verified</h5>
            <p className="text-muted small">Strict guidelines ensure zero fake listings or fraudulent accounts on our platform.</p>
          </div>
        </div>
        <div className="col-md-4">
          <div className="p-4 bg-white rounded-4 shadow-sm border border-light">
            <div className="bg-success text-white p-3 rounded-3 d-inline-block mb-3"><i className="bi bi-wallet2 fs-4"></i></div>
            <h5 className="fw-bold">Zero Hidden Charges</h5>
            <p className="text-muted small">Complete transparency. Pay directly to ownership without heavy, surprise bills.</p>
          </div>
        </div>
        <div className="col-md-4">
          <div className="p-4 bg-white rounded-4 shadow-sm border border-light">
            <div className="bg-warning text-dark p-3 rounded-3 d-inline-block mb-3"><i className="bi bi-people fs-4"></i></div>
            <h5 className="fw-bold">Direct Communication</h5>
            <p className="text-muted small">Instantly sync calls and chat sequences directly with owners and trusted field managers.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyUs;