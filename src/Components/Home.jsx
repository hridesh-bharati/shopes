// ================= UPDATED HOME COMPONENT (Home.jsx) =================
import React, { useState } from 'react';
import Footer from './Footer'; // Import the separated Footer component

const Home = () => {
  const [activeTab, setActiveTab] = useState('buy');

  // Client Static Data for Interactive Grid
  const sampleProperties = [
    { id: 1, title: 'Skyline Luxury Apartment', type: 'buy', price: '₹75 Lakh', loc: 'Sector 62, Noida', beds: 3, baths: 2, tag: 'Verified', img: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=600&q=80' },
    { id: 2, title: 'Greenwood Modern Villa', type: 'buy', price: '1.2 Cr', loc: 'Gomti Nagar, Lucknow', beds: 4, baths: 4, tag: 'Direct Owner', img: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=600&q=80' },
    { id: 3, title: 'Cozy Studio Near Metro', type: 'rent', price: '₹18,000/mo', loc: 'Indiranagar, Bengaluru', beds: 1, baths: 1, tag: 'No Brokerage', img: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=600&q=80' },
    { id: 4, title: 'Premium Commercial Hub', type: 'sell', price: '₹2.5 Cr', loc: 'Corporate Park, Mumbai', beds: 0, baths: 2, tag: 'Top Builder', img: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=600&q=80' },
  ];

  return (
    <div id="home">
      {/* ================= HERO SECTION (HIGH CONVERSION) ================= */}
      <section className="position-relative overflow-hidden bg-gradient-hero py-5 d-flex align-items-center" style={{ minHeight: '90vh' }}>
        {/* Animated Background Elements */}
        <div className="position-absolute top-0 start-50 translate-middle-x w-100 h-100 opacity-25 pointer-events-none" 
             style={{ backgroundImage: 'radial-gradient(circle at 80% 20%, #0d6efd 0%, transparent 40%), radial-gradient(circle at 10% 80%, #198754 0%, transparent 40%)', zIndex: 1 }}>
        </div>
        <div className="position-absolute top-0 end-0 w-50 h-100 opacity-10 pointer-events-none" style={{ background: 'url("data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%230d6efd" fill-opacity="0.4"%3E%3Cpath d="M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E") repeat' }}></div>

        <div className="container position-relative" style={{ zIndex: 2 }}>
          <div className="row align-items-center g-5">
            {/* Left Content */}
            <div className="col-lg-6 text-center text-lg-start">
              <div className="d-inline-flex align-items-center gap-2 bg-primary-subtle text-primary rounded-pill px-4 py-2 mb-4 fw-semibold animate__animated animate__fadeInDown">
                <span className="badge bg-primary rounded-pill px-2 py-1">🔥</span>
                100% Verified Real Estate Platform
                <span className="badge bg-primary rounded-pill px-2 py-1 ms-1">New</span>
              </div>

              <h1 className="display-3 fw-bold text-dark mb-3 lh-sm">
                🔑 Unlock Your <span className="text-gradient-primary">Dream Property</span> In Just a Few Clicks
              </h1>
              
              <p className="lead text-secondary fw-normal mb-2 fs-5">
                Buy, Sell & Rent Verified Properties in Your City with Complete Transparency and Zero Hassle.
              </p>
              <p className="text-muted mb-4 fs-6">
                <i className="bi bi-check-circle-fill text-success me-1"></i> 
                We connect genuine buyers with trusted property owners & builders to make real estate simple, fast, and reliable.
              </p>

              {/* Interactive Search/Filter */}
              <div className="card border-0 shadow-lg p-3 mb-4 bg-white rounded-4 text-start" style={{ backdropFilter: 'blur(10px)', background: 'rgba(255,255,255,0.95)' }}>
                <div className="nav nav-pills mb-3 gap-2" role="tablist">
                  {['buy', 'sell', 'rent'].map((tab) => (
                    <button 
                      key={tab}
                      className={`nav-link rounded-pill px-4 text-capitalize fw-medium transition-all ${activeTab === tab ? 'active bg-primary text-white shadow-sm' : 'bg-light text-dark hover-bg-light'}`}
                      onClick={() => setActiveTab(tab)}
                      style={{ transition: 'all 0.3s ease' }}
                    >
                      {tab === 'buy' && <i className="bi bi-house-door me-1"></i>}
                      {tab === 'sell' && <i className="bi bi-tag me-1"></i>}
                      {tab === 'rent' && <i className="bi bi-key me-1"></i>}
                      {tab}
                    </button>
                  ))}
                </div>
                <div className="row g-2">
                  <div className="col-sm-7">
                    <div className="input-group">
                      <span className="input-group-text bg-light border-0 text-muted"><i className="bi bi-geo-alt"></i></span>
                      <input type="text" className="form-control bg-light border-0 py-2" placeholder="Search locality, city..." />
                    </div>
                  </div>
                  <div className="col-sm-5">
                    <button className="btn btn-primary w-100 py-2 rounded-3 fw-medium h-100 shadow-sm hover-up">
                      <i className="bi bi-search me-1"></i> Search
                    </button>
                  </div>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="d-flex flex-column flex-sm-row gap-3 justify-content-center justify-content-lg-start">
                <a href="#properties" className="btn btn-dark btn-lg px-5 py-3 rounded-3 fw-semibold shadow-lg hover-up transition-all" style={{ background: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 100%)' }}>
                  🏠 Explore Properties
                </a>
                <a href="#contact" className="btn btn-outline-primary btn-lg px-5 py-3 rounded-3 fw-semibold hover-up transition-all" style={{ borderWidth: '2px' }}>
                  <i className="bi bi-telephone-outbound me-2"></i> Get Free Consultation
                </a>
              </div>

              {/* Trust Line */}
              <div className="mt-4 pt-3 border-top border-light">
                <div className="d-flex flex-wrap justify-content-center justify-content-lg-start gap-4 text-muted small fw-medium">
                  <span><i className="bi bi-check-circle-fill text-success me-1"></i> Verified Listings</span>
                  <span><i className="bi bi-check-circle-fill text-success me-1"></i> Direct Owner Deals</span>
                  <span><i className="bi bi-check-circle-fill text-success me-1"></i> No Hidden Charges</span>
                </div>
              </div>
            </div>

            {/* Right Media Element */}
            <div className="col-lg-6 d-none d-lg-block text-center position-relative">
              <div className="position-relative mx-auto" style={{ maxWidth: '520px' }}>
                {/* Main Image */}
                <div className="ratio ratio-4x3 rounded-4 overflow-hidden shadow-lg border border-4 border-white bg-secondary-subtle">
                  <img src="https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=800&q=80" alt="Villa" className="object-fit-cover" />
                </div>
                
                {/* Floating Widget 1 - Stats */}
                <div className="position-absolute top-0 start-0 bg-white p-3 rounded-4 shadow-lg border-0 d-flex align-items-center gap-3 m-3 animate-float">
                  <div className="bg-success-subtle p-2 rounded-3 text-success"><i className="bi bi-emoji-smile fs-4"></i></div>
                  <div className="text-start">
                    <h6 className="mb-0 fw-bold">10K+</h6>
                    <small className="text-muted">Happy Clients</small>
                  </div>
                </div>

                {/* Floating Widget 2 - Rating */}
                <div className="position-absolute bottom-0 end-0 bg-white p-3 rounded-4 shadow-lg border-0 d-flex align-items-center gap-3 m-3 animate-float-delayed">
                  <div className="bg-warning-subtle p-2 rounded-3 text-warning"><i className="bi bi-star-fill fs-4"></i></div>
                  <div className="text-start">
                    <h6 className="mb-0 fw-bold">4.9 ★</h6>
                    <small className="text-muted">Trust Score</small>
                  </div>
                </div>

                {/* Floating Widget 3 - Live Counter */}
                <div className="position-absolute top-50 end-0 bg-white p-2 px-3 rounded-pill shadow-lg border-0 d-flex align-items-center gap-2 m-3 animate-pulse" style={{ transform: 'translateY(-50%)' }}>
                  <span className="badge bg-danger rounded-pill p-1 animate-ping">●</span>
                  <small className="text-muted fw-medium">12 viewing now</small>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= INTERACTIVE PROPERTIES GRID ================= */}
      <section id="properties" className="py-5 bg-white">
        <div className="container py-4">
          <div className="text-center mb-5">
            <span className="text-primary fw-bold text-uppercase small tracking-wider">Handpicked Selection</span>
            <h2 className="fw-bold text-dark mt-1">Featured Listings</h2>
            <p className="text-muted">Explore popular properties available right now based on your filter.</p>
          </div>

          <div className="row g-4">
            {sampleProperties.map((item) => (
              <div key={item.id} className="col-md-6 col-lg-4">
                <div className="card h-100 border-0 shadow-sm rounded-4 overflow-hidden card-hover transition-all">
                  <div className="position-relative">
                    <img src={item.img} className="card-img-top object-fit-cover" alt={item.title} style={{ height: '220px' }} />
                    <span className="position-absolute top-0 start-0 m-3 badge bg-primary px-2.5 py-1.5 rounded-2 shadow-sm">{item.tag}</span>
                    <span className="position-absolute bottom-0 end-0 m-3 badge bg-dark text-capitalize px-3 py-1.5 rounded-pill shadow-sm">{item.type}</span>
                  </div>
                  <div className="card-body p-4 text-start">
                    <h5 className="text-primary fw-bold mb-2">{item.price}</h5>
                    <h6 className="card-title text-dark fw-bold text-truncate mb-2">{item.title}</h6>
                    <p className="text-muted small mb-3"><i className="bi bi-geo-alt-fill text-danger me-1"></i> {item.loc}</p>
                    <hr className="text-muted my-3 opacity-25" />
                    <div className="d-flex justify-content-between text-secondary small">
                      <span><i className="bi bi-door-open me-1"></i> {item.beds} BHK</span>
                      <span><i className="bi bi-water me-1"></i> {item.baths} Bath</span>
                      <span className="text-primary fw-medium">View Details <i className="bi bi-arrow-right"></i></span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= WHY CHOOSE US ================= */}
      <section id="features" className="py-5 bg-light">
        <div className="container py-4">
          <div className="text-center mb-5">
            <h2 className="fw-bold text-dark">Why Choose PropUnlock?</h2>
            <p className="text-muted">We redefine the property exploration experience with user-centric standards.</p>
          </div>
          <div className="row g-4 text-start">
            <div className="col-md-4">
              <div className="p-4 bg-white rounded-4 shadow-sm h-100 border border-light-subtle">
                <div className="bg-primary text-white p-3 rounded-3 d-inline-block mb-3"><i className="bi bi-shield-check fs-4"></i></div>
                <h5 className="fw-bold">100% Verified Profiles</h5>
                <p className="text-secondary small mb-0">Every dealer, owner, and property post is checked under strict guidelines to prevent fraud.</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="p-4 bg-white rounded-4 shadow-sm h-100 border border-light-subtle">
                <div className="bg-success text-white p-3 rounded-3 d-inline-block mb-3"><i className="bi bi-currency-dollar fs-4"></i></div>
                <h5 className="fw-bold">Zero Hidden Brokerage</h5>
                <p className="text-secondary small mb-0">What you see is what you pay. Transparent cost-modals built directly for buyers and tenants.</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="p-4 bg-white rounded-4 shadow-sm h-100 border border-light-subtle">
                <div className="bg-warning text-dark p-3 rounded-3 d-inline-block mb-3"><i className="bi bi-lightning-charge fs-4"></i></div>
                <h5 className="fw-bold">Fast Legal Guidance</h5>
                <p className="text-secondary small mb-0">Get direct, swift online support regarding documentation, lease agreements, and registry guidelines.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= FOOTER (Imported from separate file) ================= */}
      <Footer />

      {/* Custom Scannable Styling Hooks */}
      <style>{`
        .transition-all { transition: all 0.3s ease-in-out; }
        .hover-up:hover { transform: translateY(-3px); }
        .card-hover:hover { transform: translateY(-5px); box-shadow: 0 .5rem 1.5rem rgba(0,0,0,.12)!important; }
        .object-fit-cover { object-fit: cover; }
        .pointer { cursor: pointer; }
        
        /* Hero Gradient */
        .bg-gradient-hero {
          background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
        }
        
        /* Text Gradient */
        .text-gradient-primary {
          background: linear-gradient(135deg, #0d6efd, #0dcaf0);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        
        /* Floating Animations */
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
        .animate-float-delayed {
          animation: float 3s ease-in-out 1.5s infinite;
        }
        
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.5; }
        }
        .animate-pulse {
          animation: pulse 2s ease-in-out infinite;
        }
        
        @keyframes ping {
          0% { transform: scale(0.8); opacity: 1; }
          100% { transform: scale(1.2); opacity: 0; }
        }
        .animate-ping {
          animation: ping 1.5s ease-in-out infinite;
        }
        
        /* Hover Effects */
        .hover-bg-light:hover {
          background-color: #e9ecef !important;
        }
        
        .btn-outline-primary {
          border-width: 2px;
        }
        .btn-outline-primary:hover {
          background: #0d6efd;
          color: white;
          transform: translateY(-2px);
          box-shadow: 0 8px 25px rgba(13, 110, 253, 0.3);
        }
        
        .btn-dark:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 25px rgba(0, 0, 0, 0.3);
        }
      `}</style>
    </div>
  );
};

export default Home;