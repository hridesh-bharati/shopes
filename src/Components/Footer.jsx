// ================= FOOTER COMPONENT (Footer.jsx) =================
import React from 'react';

const Footer = () => {
  return (
    <footer id="contact" className="bg-dark text-white pt-5 pb-4">
      <div className="container text-start">
        <div className="row g-4">
          {/* Brand Section */}
          <div className="col-lg-4 col-md-6">
            <h5 className="fw-bold mb-3 text-white d-flex align-items-center gap-2">
              <span className="bg-primary text-white px-2 py-1 rounded-2">
                <i className="bi bi-building"></i>
              </span> 
              PropUnlock
            </h5>
            <p className="text-white-50 small">
              Connecting genuine home seekers with trusted builders and real-estate legal specialists under unified workflows.
            </p>
            <div className="d-flex gap-3 mt-3">
              <a href="#" className="text-white-50 text-decoration-none hover-text-primary transition-all">
                <i className="bi bi-facebook fs-5"></i>
              </a>
              <a href="#" className="text-white-50 text-decoration-none hover-text-primary transition-all">
                <i className="bi bi-instagram fs-5"></i>
              </a>
              <a href="#" className="text-white-50 text-decoration-none hover-text-primary transition-all">
                <i className="bi bi-twitter-x fs-5"></i>
              </a>
              <a href="#" className="text-white-50 text-decoration-none hover-text-primary transition-all">
                <i className="bi bi-youtube fs-5"></i>
              </a>
              <a href="#" className="text-white-50 text-decoration-none hover-text-primary transition-all">
                <i className="bi bi-linkedin fs-5"></i>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="col-lg-2 col-md-6">
            <h6 className="fw-bold text-white mb-3">Quick Navigation</h6>
            <ul className="list-unstyled text-white-50 small d-flex flex-column gap-2">
              <li>
                <a href="#home" className="text-white-50 text-decoration-none hover-text-primary transition-all">
                  <i className="bi bi-chevron-right me-1"></i> Home
                </a>
              </li>
              <li>
                <a href="#properties" className="text-white-50 text-decoration-none hover-text-primary transition-all">
                  <i className="bi bi-chevron-right me-1"></i> Listings
                </a>
              </li>
              <li>
                <a href="#features" className="text-white-50 text-decoration-none hover-text-primary transition-all">
                  <i className="bi bi-chevron-right me-1"></i> Features
                </a>
              </li>
              <li>
                <a href="#contact" className="text-white-50 text-decoration-none hover-text-primary transition-all">
                  <i className="bi bi-chevron-right me-1"></i> Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div className="col-lg-2 col-md-6">
            <h6 className="fw-bold text-white mb-3">Support</h6>
            <ul className="list-unstyled text-white-50 small d-flex flex-column gap-2">
              <li>
                <a href="#" className="text-white-50 text-decoration-none hover-text-primary transition-all">
                  <i className="bi bi-question-circle me-1"></i> Help Center
                </a>
              </li>
              <li>
                <a href="#" className="text-white-50 text-decoration-none hover-text-primary transition-all">
                  <i className="bi bi-shield-check me-1"></i> Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-white-50 text-decoration-none hover-text-primary transition-all">
                  <i className="bi bi-file-text me-1"></i> Terms of Service
                </a>
              </li>
              <li>
                <a href="#" className="text-white-50 text-decoration-none hover-text-primary transition-all">
                  <i className="bi bi-credit-card me-1"></i> Refund Policy
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter & Contact */}
          <div className="col-lg-4 col-md-6">
            <h6 className="fw-bold text-white mb-3">Stay Updated</h6>
            <p className="text-white-50 small">Subscribe to get hot deals and property alerts directly in your inbox.</p>
            <div className="input-group mb-3">
              <input 
                type="email" 
                className="form-control bg-transparent border-secondary text-white" 
                placeholder="Your Email Address" 
                style={{ borderRight: 'none' }}
              />
              <button className="btn btn-primary" type="button">
                <i className="bi bi-send me-1"></i> Subscribe
              </button>
            </div>
            <div className="d-flex gap-3 text-white-50 small">
              <span><i className="bi bi-envelope me-1"></i> hridesh027@gmail.com</span>
              <span><i className="bi bi-phone me-1"></i> +91 7267995307 </span>
            </div>
          </div>
        </div>

        <hr className="border-secondary my-4 opacity-25" />

        {/* Bottom Bar */}
        <div className="d-flex flex-column flex-sm-row justify-content-between align-items-center text-white-50 small">
          <p className="mb-0">
            &copy; {new Date().getFullYear()} PropUnlock Inc. All Rights Reserved.
          </p>
          <div className="d-flex gap-4 mt-2 mt-sm-0">
            <a href="#" className="text-white-50 text-decoration-none hover-text-primary transition-all">Privacy</a>
            <a href="#" className="text-white-50 text-decoration-none hover-text-primary transition-all">Terms</a>
            <a href="#" className="text-white-50 text-decoration-none hover-text-primary transition-all">Cookies</a>
            <span className="text-white-50">
              <i className="bi bi-globe me-1"></i> English
            </span>
          </div>
        </div>
      </div>

      <style>{`
        .transition-all { transition: all 0.3s ease-in-out; }
        .hover-text-primary:hover { 
          color: #0d6efd !important; 
          transform: translateX(3px);
        }
        .btn-primary:hover {
          transform: translateY(-2px);
          box-shadow: 0 4px 15px rgba(13, 110, 253, 0.4);
        }
        .form-control:focus {
          background-color: rgba(255,255,255,0.1) !important;
          border-color: #0d6efd !important;
          box-shadow: 0 0 0 0.2rem rgba(13, 110, 253, 0.25);
        }
        .form-control::placeholder {
          color: rgba(255,255,255,0.5);
        }
      `}</style>
    </footer>
  );
};

export default Footer;