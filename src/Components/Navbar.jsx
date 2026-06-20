import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm sticky-top py-3">
      <div className="container">
        {/* Brand Logo - Navigates to Home "/" */}
        <span 
          className="navbar-brand fw-bold text-dark d-flex align-items-center gap-2" 
          style={{ cursor: 'pointer' }}
          onClick={() => navigate('/')}
        >
          <span className="bg-primary text-white px-2.5 py-1.5 rounded-3 lh-1 fs-5">
            <i className="bi bi-building"></i>
          </span>
          <span className="fs-4">Prop<span className="text-primary">Unlock</span></span>
        </span>
        
        <button className="navbar-toggler border-0 shadow-none" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
          <span className="navbar-toggler-icon"></span>
        </button>
        
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav mx-auto mb-2 mb-lg-0 gap-1 gap-lg-4 fw-semibold">
            <li className="nav-item">
              <NavLink className="nav-link px-3 rounded-pill" to="/">Home</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link px-3 rounded-pill" to="/properties">Properties</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link px-3 rounded-pill" to="/why-us">Why Us</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link px-3 rounded-pill" to="/contact">Contact</NavLink>
            </li>
          </ul>
          
          <div className="d-flex">
            <a href="tel:+" className="btn btn-primary rounded-pill px-4 fw-medium shadow-sm d-flex align-items-center gap-2">
              <i className="bi bi-telephone"></i> Call Now
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;