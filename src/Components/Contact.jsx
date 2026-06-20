import React from 'react';

const Contact = () => {
  return (
    <div className="container py-5 text-start">
      <div className="card border-0 shadow rounded-4 overflow-hidden bg-white">
        <div className="row g-0">
          <div className="col-md-6 bg-dark text-white p-5 d-flex flex-column justify-content-between">
            <div>
              <h3 className="fw-bold text-white mb-3">Get a Free Consultation</h3>
              <p className="text-white-50">Have questions about documentation or property pricing? Send a request now.</p>
            </div>
            <div className="mt-4">
              <p className="mb-2"><i className="bi bi-telephone text-primary me-2"></i> +91 98765 43210</p>
              <p className="mb-0"><i className="bi bi-envelope text-primary me-2"></i> contact@propunlock.com</p>
            </div>
          </div>
          <div className="col-md-6 p-5">
            <form onSubmit={(e) => e.preventDefault()}>
              <div className="mb-3">
                <label className="form-label small fw-bold">Full Name</label>
                <input type="text" className="form-control bg-light border-0 py-2" placeholder="John Doe" />
              </div>
              <div className="mb-3">
                <label className="form-label small fw-bold">Phone Number</label>
                <input type="tel" className="form-control bg-light border-0 py-2" placeholder="+91 " />
              </div>
              <button className="btn btn-primary w-100 py-2 rounded-3 shadow-sm fw-medium">Submit Request</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;