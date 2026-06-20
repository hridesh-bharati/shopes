// ================= HOME COMPONENT (Home.jsx) =================
// GREEN LEMON THEME · FULL SHOPPING WEBSITE EXPERIENCE · REACT + BOOTSTRAP CORE

import React, { useState } from 'react';

const Home = () => {
  const [activeTab, setActiveTab] = useState('buy');
  const [hoveredCard, setHoveredCard] = useState(null);

  // Sample property data
  const sampleProperties = [
    { id: 1, title: 'Skyline Luxury Apartment', type: 'buy', price: '₹75 Lakh', loc: 'Sector 62, Noida', beds: 3, baths: 2, tag: 'Verified', img: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=600&q=80' },
    { id: 2, title: 'Greenwood Modern Villa', type: 'buy', price: '1.2 Cr', loc: 'Gomti Nagar, Lucknow', beds: 4, baths: 4, tag: 'Direct Owner', img: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=600&q=80' },
    { id: 3, title: 'Cozy Studio Near Metro', type: 'rent', price: '₹18,000/mo', loc: 'Indiranagar, Bengaluru', beds: 1, baths: 1, tag: 'No Brokerage', img: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=600&q=80' },
    { id: 4, title: 'Premium Commercial Hub', type: 'sell', price: '₹2.5 Cr', loc: 'Corporate Park, Mumbai', beds: 0, baths: 2, tag: 'Top Builder', img: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=600&q=80' },
    { id: 5, title: 'Sunset View Penthouse', type: 'sell', price: '₹3.8 Cr', loc: 'Bandra West, Mumbai', beds: 4, baths: 3, tag: 'Luxury', img: 'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=600&q=80' },
    { id: 6, title: 'Garden Villa with Pool', type: 'rent', price: '₹45,000/mo', loc: 'Whitefield, Bengaluru', beds: 3, baths: 3, tag: 'Premium', img: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=600&q=80' },
  ];

  // Shopping categories
  const categories = [
    { icon: 'bi-building', label: 'Luxury Villas', count: '124', color: '#e8f5e9' },
    { icon: 'bi-houses', label: 'Apartments', count: '356', color: '#dcedc8' },
    { icon: 'bi-shop', label: 'Commercial', count: '89', color: '#c5e1a5' },
    { icon: 'bi-tree', label: 'Green Spaces', count: '67', color: '#aed581' },
    { icon: 'bi-water', label: 'Waterfront', count: '45', color: '#b3e5fc' },
    { icon: 'bi-house-heart', label: 'Premium', count: '78', color: '#f8bbd0' },
  ];

  // Trending cities
  const trendingCities = [
    { name: 'Mumbai', properties: '1.2K', trend: '+12%' },
    { name: 'Delhi', properties: '980', trend: '+8%' },
    { name: 'Bengaluru', properties: '850', trend: '+15%' },
    { name: 'Chennai', properties: '670', trend: '+6%' },
    { name: 'Hyderabad', properties: '540', trend: '+10%' },
    { name: 'Pune', properties: '480', trend: '+9%' },
  ];

  // Testimonials
  const testimonials = [
    { name: 'Priya Sharma', location: 'Bought Villa in Pune', text: 'PropUnlock made finding our dream home as easy as online shopping. Verified listings and zero hassle!', rating: 5 },
    { name: 'Rahul Verma', location: 'Rented Apartment in Mumbai', text: 'The Green Lemon experience is amazing! Transparent process and quick support throughout.', rating: 5 },
    { name: 'Ananya Reddy', location: 'Sold Property in Bangalore', text: 'Got the best deal for my property within a week. Highly recommended for sellers too!', rating: 5 },
  ];

  // Stats
  const stats = [
    { value: '10K+', label: 'Happy Clients', icon: 'bi-emoji-smile' },
    { value: '500+', label: '5-Star Reviews', icon: 'bi-star' },
    { value: '98%', label: 'Satisfaction Rate', icon: 'bi-graph-up' },
    { value: '4.9★', label: 'Average Rating', icon: 'bi-heart' },
  ];

  return (
    <div id="home" style={{ fontFamily: "'Inter', sans-serif", background: '#f8fbf6' }}>
 {/* ================= HERO SECTION (HIGH CONVERSION - SHOPPING STYLE) ================= */}
<section className="position-relative overflow-hidden py-5 d-flex align-items-center" style={{ 
  minHeight: '95vh', 
  background: 'linear-gradient(145deg, #f8f9fa 0%, #e9ecef 50%, #dee2e6 100%)',
}}>
  {/* Background Pattern */}
  <div className="position-absolute top-0 start-0 w-100 h-100 pointer-events-none" style={{ 
    background: 'url("data:image/svg+xml,%3Csvg width="80" height="80" viewBox="0 0 80 80" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="%23adb5bd" fill-opacity="0.06"%3E%3Cpath d="M40 0L50 20L70 20L55 35L60 55L40 45L20 55L25 35L10 20L30 20L40 0Z"/%3E%3C/g%3E%3C/svg%3E") repeat', 
    zIndex: 1 
  }}></div>
  
  {/* Shopping / Real Estate Decor */}
  <div className="position-absolute bottom-0 end-0 opacity-5 pointer-events-none" style={{ zIndex: 1, fontSize: '18rem' }}>🏠</div>
  <div className="position-absolute top-10 start-10 opacity-3 pointer-events-none" style={{ zIndex: 1, fontSize: '8rem', transform: 'rotate(-20deg)' }}>🛒</div>

  <div className="container position-relative" style={{ zIndex: 2 }}>
    <div className="row align-items-center g-5">
      {/* Left Content */}
      <div className="col-lg-6 text-center text-lg-start">
        {/* Trust Badges */}
        <div className="d-flex flex-wrap gap-2 mb-4 justify-content-center justify-content-lg-start">
          <span className="badge rounded-pill px-3 py-2" style={{ background: '#e8f5e9', color: '#2e7d32' }}>
            <i className="bi bi-check-circle-fill me-1"></i> 100% Verified Properties
          </span>
          <span className="badge rounded-pill px-3 py-2" style={{ background: '#e3f2fd', color: '#0d47a1' }}>
            🔥 Fresh Deals
          </span>
          <span className="badge rounded-pill px-3 py-2" style={{ background: '#fff3e0', color: '#e65100' }}>
            ⭐ 4.9
          </span>
        </div>

        {/* Headline */}
        <h1 className="display-3 fw-bold mb-2 lh-sm" style={{ color: '#1a1a2e' }}>
          Unlock Your <span style={{ 
            background: 'linear-gradient(135deg, #0d47a1, #1976d2, #42a5f5)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text'
          }}>Dream Property</span>
        </h1>
        <h1 className="display-3 fw-bold mb-4 lh-sm" style={{ color: '#1a1a2e' }}>
          In Just a Few Clicks
        </h1>
        
        {/* Subheadline */}
        <p className="lead fw-normal mb-2 fs-5" style={{ color: '#424242' }}>
          Buy, Sell & Rent Verified Properties in Your City with Complete Transparency and Zero Hassle.
        </p>
        
        {/* Supporting Line */}
        <p className="mb-4 fs-6" style={{ color: '#616161' }}>
          <i className="bi bi-check-circle-fill me-1" style={{ color: '#1976d2' }}></i> 
          We connect genuine buyers with trusted property owners & builders to make real estate simple, fast, and reliable.
        </p>

       {/* Search / Filter Card - Absolute Inline (No Mobile Wrap) */}
<div className="card  border-0 shadow-lg p-3 mb-4 bg-white rounded-4 text-center m-auto w-100" style={{ boxShadow: '0 12px 40px rgba(0,0,0,0.06)' }}>
  
  {/* Tab Switches */}
  <div className="nav nav-pills mb-3 gap-1 p-1 bg-light rounded-pill d-inline-flex" role="tablist" style={{ width: 'fit-content' }}>
    {['buy', 'sell', 'rent'].map((tab) => (
      <button
        key={tab}
        className={`nav-link rounded-pill px-3 py-1.5 text-capitalize fw-semibold border-0 small transition-all ${activeTab === tab ? 'active shadow-sm' : 'text-muted bg-transparent'}`}
        style={activeTab === tab ? { background: 'linear-gradient(135deg, #0d47a1, #1976d2)', color: 'white', fontSize: '0.85rem' } : { fontSize: '0.85rem' }}
        onClick={() => setActiveTab(tab)}
      >
        {tab === 'buy' && <i className="bi bi-house-door me-1"></i>}
        {tab === 'sell' && <i className="bi bi-tag me-1"></i>}
        {tab === 'rent' && <i className="bi bi-key me-1"></i>}
        {tab}
      </button>
    ))}
  </div>

  {/* Strict Non-Wrapping Row Container */}
  <div className="row g-2 align-items-center flex-nowrap">
    
    {/* Input Box: Takes up 75% width on all screens */}
    <div className="col-9">
      <div className="input-group flex-nowrap bg-light rounded-3 overflow-hidden">
        <span className="input-group-text bg-transparent border-0 text-muted ps-2 pe-1 ps-sm-3 pe-sm-2">
          <i className="bi bi-geo-alt-fill text-primary" style={{ fontSize: '0.9rem' }}></i>
        </span>
        <input 
          type="text" 
          className="form-control bg-transparent border-0 py-2.5 text-dark w-100 shadow-none" 
          placeholder="Search locality, city..." 
          style={{ 
            fontSize: 'calc(13px + 0.2vw)', 
            outline: 'none',
            minWidth: '0' /* Form input overflow blocker */
          }}
        />
      </div>
    </div>
    
    {/* Button Box: Takes up remaining 25% width without wrapping */}
    <div className="col-3">
      <button 
        className="btn w-100 py-2.5 rounded-3 fw-bold shadow-sm text-white d-flex align-items-center justify-content-center gap-1" 
        style={{ 
          background: 'linear-gradient(135deg, #0d47a1, #1976d2)', 
          border: 'none',
          whiteSpace: 'nowrap'
        }}
      >
        <i className="bi bi-search"></i>
        {/* 'd-none d-sm-inline' guarantees text vanishes on ultra-small screens to preserve design */}
        <span className="d-none d-sm-inline">Search</span>
      </button>
    </div>

  </div>
</div>

    {/* CTA Buttons */}
<div className="d-flex flex-row gap-2 justify-content-center justify-content-lg-start">
  {/* Primary Blue Button */}
  <a href="#properties" className="btn btn-sm btn-md-lg px-3 px-sm-5 py-2 py-sm-3 rounded-3 fw-semibold shadow text-white" style={{ 
    background: 'linear-gradient(135deg, #0d47a1, #1976d2)',
    border: 'none',
    boxShadow: '0 8px 25px rgba(25, 118, 210, 0.35)',
    fontSize: 'calc(12px + 0.3vw)' /* मोबाइल पर छोटा टेक्स्ट, बड़ी स्क्रीन पर सामान्य */
  }}>
    🏠 Explore Properties
  </a>
  
  {/* Colored (Secondary) Button */}
  <a href="#contact" className="btn btn-sm btn-md-lg px-3 px-sm-5 py-2 py-sm-3 rounded-3 fw-semibold text-white" style={{ 
    background: '#1976d2',
    border: 'none',
    boxShadow: '0 8px 25px rgba(25, 118, 210, 0.2)',
    fontSize: 'calc(12px + 0.3vw)'
  }}>
    <i className="bi bi-telephone-outbound me-2"></i> Get Free Consultation
  </a>
</div>

        {/* Trust Line */}
        <div className="mt-4 pt-3 border-top" style={{ borderColor: '#e0e0e0' }}>
          <div className="d-flex flex-wrap justify-content-center justify-content-lg-start gap-4 small fw-medium" style={{ color: '#424242' }}>
            <span><i className="bi bi-check-circle-fill me-1" style={{ color: '#1976d2' }}></i> Verified Listings</span>
            <span><i className="bi bi-check-circle-fill me-1" style={{ color: '#1976d2' }}></i> Direct Owner Deals</span>
            <span><i className="bi bi-check-circle-fill me-1" style={{ color: '#1976d2' }}></i> No Hidden Charges</span>
            <span><i className="bi bi-shield-check me-1" style={{ color: '#1976d2' }}></i> 100% Secure</span>
          </div>
        </div>
      </div>

      {/* Right Image + Floating Widgets - Shopping Style */}
      <div className="col-lg-6 d-none d-lg-block text-center position-relative">
        <div className="position-relative mx-auto" style={{ maxWidth: '520px' }}>
          {/* Main Image */}
          <div className="ratio ratio-4x3 rounded-4 overflow-hidden shadow-lg border border-4 border-white">
            <img src="https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=800&q=80" alt="Dream Property" className="object-fit-cover" style={{ objectFit: 'cover' }} />
          </div>
          
          {/* Floating Widget 1 - Best Deals (Shopping Tag) */}
          <div className="position-absolute top-0 start-0 bg-white p-3 rounded-4 shadow-lg d-flex align-items-center gap-3 m-3" style={{ 
            border: '2px solid #ff9800',
            animation: 'floatWidget 3.5s ease-in-out infinite'
          }}>
            <div className="p-2 rounded-3" style={{ background: '#fff3e0' }}><i className="bi bi-tag fs-4" style={{ color: '#e65100' }}></i></div>
            <div className="text-start">
              <h6 className="mb-0 fw-bold" style={{ color: '#1a1a2e' }}>Best Deals</h6>
              <small className="text-muted">Up to 30% off</small>
            </div>
          </div>

          {/* Floating Widget 2 - Trust Score */}
          <div className="position-absolute bottom-0 end-0 bg-white p-3 rounded-4 shadow-lg d-flex align-items-center gap-3 m-3" style={{ 
            border: '2px solid #1976d2',
            animation: 'floatWidget 3.5s ease-in-out 1.8s infinite'
          }}>
            <div className="p-2 rounded-3" style={{ background: '#e3f2fd' }}><i className="bi bi-star-fill fs-4" style={{ color: '#ff9800' }}></i></div>
            <div className="text-start">
              <h6 className="mb-0 fw-bold" style={{ color: '#1a1a2e' }}>4.9 ★ Trust Score</h6>
              <small className="text-muted">Excellent rating</small>
            </div>
          </div>

          {/* Floating Widget 3 - Live Inventory */}
          <div className="position-absolute top-50 end-0 bg-white p-2 px-3 rounded-pill shadow-lg d-flex align-items-center gap-2 m-3" style={{ 
            transform: 'translateY(-50%)',
            border: '2px solid #4caf50',
            animation: 'pulseWidget 2s ease-in-out infinite'
          }}>
            <span className="badge rounded-pill p-1" style={{ background: '#4caf50', animation: 'pingWidget 1.5s ease-in-out infinite' }}>●</span>
            <small className="fw-medium" style={{ color: '#1a1a2e' }}>Live Inventory</small>
          </div>

          {/* Floating Widget 4 - Shopping Cart */}
          <div className="position-absolute bottom-0 start-0 bg-white p-2 px-3 rounded-4 shadow-lg d-flex align-items-center gap-2 m-3" style={{ 
            border: '2px solid #1976d2',
            background: 'rgba(255,255,255,0.95)',
            animation: 'floatWidget 3.5s ease-in-out 0.9s infinite'
          }}>
            <span className="badge rounded-pill px-2" style={{ background: '#1976d2', color: 'white' }}>🛒</span>
            <small className="fw-medium" style={{ color: '#1a1a2e' }}>500+ Listings</small>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

      {/* ================= SHOPPING CATEGORIES SECTION ================= */}
      <section className="py-5" style={{ background: '#f9fbe7' }}>
        <div className="container">
          <div className="text-center mb-5">
            <span className="fw-bold text-uppercase small tracking-wider px-3 py-1 rounded-pill" style={{ background: '#dcedc8', color: '#33691e', letterSpacing: '0.08em' }}>
              🛒 Shop by Category
            </span>
            <h2 className="fw-bold mt-2" style={{ color: '#1b3a0b' }}>Find Your Perfect Match</h2>
            <p style={{ color: '#558b2f' }}>Browse properties by type — just like shopping for your dream lifestyle</p>
          </div>

          <div className="row g-4">
            {categories.map((cat, idx) => (
              <div key={idx} className="col-md-4 col-lg-2">
                <div className="card border-0 rounded-4 text-center p-4 h-100 shadow-sm" style={{ 
                  background: 'white',
                  border: '2px solid #c5e1a5',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease'
                }}
                onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-8px)'; e.currentTarget.style.boxShadow = '0 12px 30px rgba(139, 195, 74, 0.2)'; }}
                onMouseLeave={(e) => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = 'none'; }}>
                  <div className="mx-auto mb-3 p-3 rounded-3" style={{ background: cat.color, width: '70px', height: '70px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <i className={`bi ${cat.icon} fs-1`} style={{ color: '#33691e' }}></i>
                  </div>
                  <h6 className="fw-bold" style={{ color: '#1b3a0b' }}>{cat.label}</h6>
                  <small style={{ color: '#689f38' }}>{cat.count} properties</small>
                  <div className="mt-2">
                    <span className="badge rounded-pill px-3 py-2" style={{ background: '#dcedc8', color: '#33691e' }}>
                      Shop Now <i className="bi bi-arrow-right ms-1"></i>
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= FEATURED PROPERTIES GRID (SHOPPING VIBE) ================= */}
      <section id="properties" className="py-5 bg-white">
        <div className="container py-4">
          <div className="d-flex justify-content-between align-items-center mb-4 flex-wrap">
            <div>
              <span className="fw-bold text-uppercase small tracking-wider px-3 py-1 rounded-pill" style={{ background: '#dcedc8', color: '#33691e', letterSpacing: '0.08em' }}>
                🍋 Featured Listings
              </span>
              <h2 className="fw-bold mt-1" style={{ color: '#1b3a0b' }}>Fresh Picks for You</h2>
            </div>
            <div className="d-flex gap-2">
              <select className="form-select rounded-pill border-0 shadow-sm" style={{ background: '#f1f8e9', color: '#33691e', border: '2px solid #c5e1a5', width: 'auto' }}>
                <option>Recommended</option>
                <option>Price: Low to High</option>
                <option>Price: High to Low</option>
                <option>Newest First</option>
              </select>
              <button className="btn rounded-pill px-3" style={{ background: '#f1f8e9', border: '2px solid #c5e1a5', color: '#33691e' }}>
                <i className="bi bi-grid-3x3-gap-fill"></i>
              </button>
            </div>
          </div>

          <div className="row g-4">
            {sampleProperties.map((item) => (
              <div key={item.id} className="col-md-6 col-lg-4">
                <div className="card h-100 border-0 shadow-sm rounded-4 overflow-hidden" style={{ 
                  border: '2px solid #e8f5e9',
                  transition: 'all 0.3s ease',
                  background: 'white'
                }}
                onMouseEnter={() => setHoveredCard(item.id)}
                onMouseLeave={() => setHoveredCard(null)}>
                  <div className="position-relative">
                    <img src={item.img} className="card-img-top" alt={item.title} style={{ height: '220px', objectFit: 'cover' }} />
                    <span className="position-absolute top-0 start-0 m-3 badge px-3 py-2 rounded-2 shadow-sm" style={{ background: '#e8f5e9', color: '#33691e', fontWeight: 600 }}>{item.tag}</span>
                    <span className="position-absolute bottom-0 end-0 m-3 badge text-capitalize px-3 py-2 rounded-pill shadow-sm text-white" style={{ background: 'linear-gradient(135deg, #7cb342 0%, #558b2f 100%)' }}>{item.type}</span>
                    
                    {/* Wishlist Button */}
                    <button className="position-absolute top-0 end-0 m-3 btn btn-sm rounded-circle p-2 shadow-sm" style={{ 
                      background: hoveredCard === item.id ? '#7cb342' : 'white', 
                      border: '2px solid #c5e1a5', 
                      width: '40px', 
                      height: '40px',
                      transition: 'all 0.3s ease'
                    }}>
                      <i className="bi bi-heart" style={{ color: hoveredCard === item.id ? 'white' : '#7cb342' }}></i>
                    </button>
                    
                    {/* Quick View Overlay */}
                    {hoveredCard === item.id && (
                      <div className="position-absolute bottom-0 start-0 w-100 p-3" style={{ background: 'linear-gradient(transparent, rgba(0,0,0,0.5))' }}>
                        <button className="btn w-100 rounded-3 text-white" style={{ background: 'rgba(139, 195, 74, 0.9)', border: 'none' }}>
                          <i className="bi bi-eye me-1"></i> Quick View
                        </button>
                      </div>
                    )}
                  </div>
                  <div className="card-body p-3 text-start">
                    <div className="mb-1 px-3 py-1 d-inline-block rounded-pill" style={{ background: '#f1f8e9', fontWeight: 700, color: '#33691e', fontSize: '1.1rem' }}>
                      {item.price}
                    </div>
                    <h6 className="card-title fw-bold text-truncate mt-1" style={{ color: '#1b3a0b', fontSize: '1rem' }}>{item.title}</h6>
                    <p className="text-muted small mb-2"><i className="bi bi-geo-alt-fill me-1" style={{ color: '#7cb342' }}></i> {item.loc}</p>
                    
                    <div className="d-flex justify-content-between align-items-center mb-3">
                      <div className="d-flex gap-3 text-secondary small">
                        <span><i className="bi bi-door-open me-1"></i> {item.beds} BHK</span>
                        <span><i className="bi bi-water me-1"></i> {item.baths} Bath</span>
                      </div>
                      <span style={{ color: '#7cb342', fontWeight: 600, cursor: 'pointer' }}>
                        View <i className="bi bi-arrow-right"></i>
                      </span>
                    </div>
                    
                    <button className="btn w-100 rounded-3 fw-medium text-white" style={{ 
                      background: 'linear-gradient(135deg, #7cb342 0%, #558b2f 100%)', 
                      border: 'none', 
                      fontSize: '0.9rem',
                      padding: '10px'
                    }}>
                      <i className="bi bi-cart-plus me-1"></i> Add to Shortlist
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= STATS SECTION ================= */}
      <section className="py-5" style={{ background: 'linear-gradient(145deg, #f1f8e9 0%, #dcedc8 100%)' }}>
        <div className="container">
          <div className="row g-4">
            {stats.map((stat, idx) => (
              <div key={idx} className="col-6 col-md-3">
                <div className="text-center p-4 rounded-4" style={{ background: 'rgba(255,255,255,0.8)', border: '2px solid #c5e1a5' }}>
                  <div className="display-4 mb-2" style={{ color: '#558b2f' }}>
                    <i className={`bi ${stat.icon}`}></i>
                  </div>
                  <h3 className="fw-bold" style={{ color: '#1b3a0b' }}>{stat.value}</h3>
                  <small style={{ color: '#558b2f' }}>{stat.label}</small>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= TRENDING CITIES ================= */}
      <section className="py-5 bg-white">
        <div className="container">
          <div className="text-center mb-5">
            <span className="fw-bold text-uppercase small tracking-wider px-3 py-1 rounded-pill" style={{ background: '#dcedc8', color: '#33691e', letterSpacing: '0.08em' }}>
              📍 Trending Locations
            </span>
            <h2 className="fw-bold mt-2" style={{ color: '#1b3a0b' }}>Popular Cities for Property Shopping</h2>
            <p style={{ color: '#558b2f' }}>Discover the most searched cities in your area</p>
          </div>

          <div className="row g-3 justify-content-center">
            {trendingCities.map((city, idx) => (
              <div key={idx} className="col-md-4 col-lg-2">
                <div className="card border-0 rounded-4 p-3 text-center shadow-sm" style={{ 
                  background: 'white',
                  border: '2px solid #c5e1a5',
                  transition: 'all 0.3s ease',
                  cursor: 'pointer'
                }}
                onMouseEnter={(e) => { e.currentTarget.style.transform = 'scale(1.05)'; e.currentTarget.style.boxShadow = '0 12px 30px rgba(139, 195, 74, 0.2)'; }}
                onMouseLeave={(e) => { e.currentTarget.style.transform = 'scale(1)'; e.currentTarget.style.boxShadow = 'none'; }}>
                  <div className="mx-auto mb-2 p-2 rounded-3" style={{ background: '#e8f5e9', width: '50px', height: '50px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <i className="bi bi-geo-alt fs-3" style={{ color: '#558b2f' }}></i>
                  </div>
                  <h6 className="fw-bold mb-0" style={{ color: '#1b3a0b' }}>{city.name}</h6>
                  <small style={{ color: '#689f38' }}>{city.properties} properties</small>
                  <div className="mt-2">
                    <span className="badge rounded-pill px-2" style={{ background: '#e8f5e9', color: '#33691e' }}>
                      <i className="bi bi-arrow-up me-1" style={{ color: '#7cb342' }}></i> {city.trend}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* ================= TESTIMONIALS / CUSTOMER REVIEWS ================= */}
      <section className="py-5 bg-white">
        <div className="container">
          <div className="text-center mb-5">
            <span className="fw-bold text-uppercase small tracking-wider px-3 py-1 rounded-pill" style={{ background: '#dcedc8', color: '#33691e', letterSpacing: '0.08em' }}>
              ⭐ Customer Love
            </span>
            <h2 className="fw-bold mt-2" style={{ color: '#1b3a0b' }}>What Our Customers Say</h2>
            <p style={{ color: '#558b2f' }}>Real stories from real people who found their dream homes with us</p>
          </div>

          <div className="row g-4">
            {testimonials.map((testimonial, idx) => (
              <div key={idx} className="col-md-4">
                <div className="card border-0 rounded-4 p-4 h-100 shadow-sm" style={{ 
                  border: '2px solid #e8f5e9',
                  background: 'white',
                  transition: 'all 0.3s ease'
                }}
                onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-5px)'; e.currentTarget.style.boxShadow = '0 12px 30px rgba(139, 195, 74, 0.15)'; }}
                onMouseLeave={(e) => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = 'none'; }}>
                  <div className="d-flex gap-1 mb-3">
                    {[...Array(5)].map((_, i) => (
                      <i key={i} className="bi bi-star-fill" style={{ color: i < testimonial.rating ? '#f9a825' : '#e0e0e0' }}></i>
                    ))}
                  </div>
                  <p className="mb-3" style={{ color: '#33691e', fontStyle: 'italic' }}>"{testimonial.text}"</p>
                  <div className="d-flex align-items-center gap-3 mt-auto">
                    <div className="rounded-circle d-flex align-items-center justify-content-center text-white" style={{ 
                      width: '48px', 
                      height: '48px', 
                      background: 'linear-gradient(135deg, #7cb342 0%, #558b2f 100%)',
                      fontSize: '18px',
                      fontWeight: 'bold'
                    }}>
                      {testimonial.name.split(' ').map(n => n[0]).join('')}
                    </div>
                    <div>
                      <h6 className="mb-0 fw-bold" style={{ color: '#1b3a0b' }}>{testimonial.name}</h6>
                      <small style={{ color: '#689f38' }}>{testimonial.location}</small>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-4">
            <button className="btn px-4 py-2 rounded-pill" style={{ 
              background: 'transparent',
              border: '2px solid #7cb342',
              color: '#33691e'
            }}>
              Read All Reviews <i className="bi bi-arrow-right ms-1"></i>
            </button>
          </div>
        </div>
      </section>

      {/* ================= PARTNERS / TRUSTED BRANDS ================= */}
      <section className="py-4" style={{ background: '#f9fbe7' }}>
        <div className="container">
          <div className="text-center mb-4">
            <span className="fw-bold text-uppercase small tracking-wider px-3 py-1 rounded-pill" style={{ background: '#dcedc8', color: '#33691e', letterSpacing: '0.08em' }}>
              🤝 Trusted Partners
            </span>
          </div>
          <div className="d-flex flex-wrap justify-content-center align-items-center gap-5">
            {['🏢', '🏗️', '🏠', '📐', '🔨', '📊'].map((icon, idx) => (
              <div key={idx} className="text-center" style={{ opacity: 0.6, transition: 'all 0.3s ease' }}
                onMouseEnter={(e) => { e.currentTarget.style.opacity = '1'; e.currentTarget.style.transform = 'scale(1.1)'; }}
                onMouseLeave={(e) => { e.currentTarget.style.opacity = '0.6'; e.currentTarget.style.transform = 'scale(1)'; }}>
                <div className="display-4">{icon}</div>
                <small style={{ color: '#558b2f' }}>Partner {idx + 1}</small>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= PROPERTY BLOG / INSIGHTS ================= */}
      <section className="py-5 bg-white">
        <div className="container">
          <div className="text-center mb-5">
            <span className="fw-bold text-uppercase small tracking-wider px-3 py-1 rounded-pill" style={{ background: '#dcedc8', color: '#33691e', letterSpacing: '0.08em' }}>
              📚 Insights & Tips
            </span>
            <h2 className="fw-bold mt-2" style={{ color: '#1b3a0b' }}>Property Buying Guide</h2>
            <p style={{ color: '#558b2f' }}>Expert tips to help you make the right decision</p>
          </div>

          <div className="row g-4">
            <div className="col-md-4">
              <div className="card border-0 rounded-4 overflow-hidden shadow-sm" style={{ border: '2px solid #e8f5e9' }}>
                <img src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=600&q=80" className="card-img-top" alt="Blog" style={{ height: '200px', objectFit: 'cover' }} />
                <div className="card-body p-4">
                  <span className="badge rounded-pill px-3 py-2 mb-2" style={{ background: '#dcedc8', color: '#33691e' }}>Tips</span>
                  <h6 className="fw-bold" style={{ color: '#1b3a0b' }}>10 Tips for First-Time Home Buyers</h6>
                  <p className="text-muted small">Learn the essential steps to buy your dream home without stress.</p>
                  <a href="#" style={{ color: '#7cb342', textDecoration: 'none', fontWeight: 600 }}>
                    Read More <i className="bi bi-arrow-right"></i>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card border-0 rounded-4 overflow-hidden shadow-sm" style={{ border: '2px solid #e8f5e9' }}>
                <img src="https://images.unsplash.com/photo-1582407947304-fd86f028f716?auto=format&fit=crop&w=600&q=80" className="card-img-top" alt="Blog" style={{ height: '200px', objectFit: 'cover' }} />
                <div className="card-body p-4">
                  <span className="badge rounded-pill px-3 py-2 mb-2" style={{ background: '#dcedc8', color: '#33691e' }}>Investment</span>
                  <h6 className="fw-bold" style={{ color: '#1b3a0b' }}>Real Estate Investment Guide 2025</h6>
                  <p className="text-muted small">Discover the best cities and property types for maximum ROI.</p>
                  <a href="#" style={{ color: '#7cb342', textDecoration: 'none', fontWeight: 600 }}>
                    Read More <i className="bi bi-arrow-right"></i>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card border-0 rounded-4 overflow-hidden shadow-sm" style={{ border: '2px solid #e8f5e9' }}>
                <img src="https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=600&q=80" className="card-img-top" alt="Blog" style={{ height: '200px', objectFit: 'cover' }} />
                <div className="card-body p-4">
                  <span className="badge rounded-pill px-3 py-2 mb-2" style={{ background: '#dcedc8', color: '#33691e' }}>Legal</span>
                  <h6 className="fw-bold" style={{ color: '#1b3a0b' }}>Property Legal Checklist</h6>
                  <p className="text-muted small">Essential documents and legal checks before buying any property.</p>
                  <a href="#" style={{ color: '#7cb342', textDecoration: 'none', fontWeight: 600 }}>
                    Read More <i className="bi bi-arrow-right"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= CTA BANNER (SHOPPING CART STYLE) ================= */}
      <section className="py-5" style={{ background: 'linear-gradient(135deg, #f1f8e9 0%, #dcedc8 50%, #c5e1a5 100%)' }}>
        <div className="container">
          <div className="row align-items-center g-4 p-5 rounded-5" style={{ background: 'rgba(255,255,255,0.6)', backdropFilter: 'blur(10px)', border: '2px solid #8bc34a' }}>
            <div className="col-lg-8">
              <h2 className="fw-bold" style={{ color: '#1b3a0b' }}>
                🛒 Ready to Find Your Dream Home?
              </h2>
              <p style={{ color: '#33691e' }}>Get exclusive deals, virtual tours, and instant support — just like your favorite online store.</p>
              <div className="d-flex gap-3 flex-wrap">
                <span className="badge rounded-pill px-3 py-2" style={{ background: '#e8f5e9', color: '#33691e' }}>
                  <i className="bi bi-check-circle-fill me-1" style={{ color: '#7cb342' }}></i> 100% Verified
                </span>
                <span className="badge rounded-pill px-3 py-2" style={{ background: '#e8f5e9', color: '#33691e' }}>
                  <i className="bi bi-check-circle-fill me-1" style={{ color: '#7cb342' }}></i> Free Consultation
                </span>
                <span className="badge rounded-pill px-3 py-2" style={{ background: '#e8f5e9', color: '#33691e' }}>
                  <i className="bi bi-check-circle-fill me-1" style={{ color: '#7cb342' }}></i> No Brokerage
                </span>
              </div>
            </div>
            <div className="col-lg-4 text-lg-end">
              <button className="btn btn-lg rounded-pill px-5 py-3 fw-bold text-white" style={{ 
                background: 'linear-gradient(135deg, #7cb342 0%, #558b2f 100%)',
                border: 'none',
                boxShadow: '0 8px 25px rgba(139, 195, 74, 0.4)',
                transition: 'all 0.3s ease'
              }}
              onMouseEnter={(e) => { e.target.style.transform = 'scale(1.05)'; e.target.style.boxShadow = '0 12px 35px rgba(139, 195, 74, 0.5)'; }}
              onMouseLeave={(e) => { e.target.style.transform = 'scale(1)'; e.target.style.boxShadow = '0 8px 25px rgba(139, 195, 74, 0.4)'; }}>
                Start Shopping <i className="bi bi-arrow-right ms-2"></i>
              </button>
            </div>
          </div>
        </div>
      </section>


      {/* ================= COMPLETE STYLES ================= */}
      <style>{`
        /* Green Lemon Theme - Complete */
        .tracking-wider { letter-spacing: 0.08em; }
        .object-fit-cover { object-fit: cover; }
        
        /* Animations */
        @keyframes floatGreen {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-12px) rotate(2deg); }
        }
        @keyframes pulseGreen {
          0% { opacity: 0.6; transform: scale(0.95); }
          50% { opacity: 1; transform: scale(1.05); }
          100% { opacity: 0.6; transform: scale(0.95); }
        }
        @keyframes pingGreen {
          0% { transform: scale(0.8); opacity: 1; }
          100% { transform: scale(1.6); opacity: 0; }
        }
        
        /* Bootstrap Overrides - Green Lemon */
        .nav-pills .nav-link.active {
          background: linear-gradient(135deg, #7cb342 0%, #558b2f 100%) !important;
          color: white !important;
          font-weight: 600;
        }
        .nav-pills .nav-link {
          color: #33691e;
          transition: all 0.3s ease;
        }
        .nav-pills .nav-link:hover:not(.active) {
          background: #e8f5e9;
          color: #1b3a0b;
        }
        
        .btn-outline-success {
          border-color: #7cb342 !important;
          color: #33691e !important;
        }
        .btn-outline-success:hover {
          background: #7cb342 !important;
          border-color: #7cb342 !important;
          color: white !important;
          transform: translateY(-2px);
          box-shadow: 0 8px 20px rgba(139, 195, 74, 0.3);
        }
        
        /* Card Hover Effects */
        .card-hover-green:hover {
          transform: translateY(-8px);
          box-shadow: 0 20px 40px rgba(139, 195, 74, 0.15);
          border-color: #7cb342 !important;
        }
        
        /* Custom Scrollbar */
        ::-webkit-scrollbar { width: 10px; }
        ::-webkit-scrollbar-track { background: #f1f8e9; }
        ::-webkit-scrollbar-thumb { 
          background: linear-gradient(135deg, #8bc34a, #689f38);
          border-radius: 10px;
        }
        ::-webkit-scrollbar-thumb:hover { background: #7cb342; }
        
        /* Smooth Transitions */
        .transition-all { transition: all 0.3s ease-in-out; }
        .hover-up:hover { transform: translateY(-3px); }
        
        /* Gradient Text */
        .text-gradient-green {
          background: linear-gradient(135deg, #33691e, #8bc34a);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        
        /* Green Lemon Background Classes */
        .bg-green-lemon-light { background-color: #f1f8e9; }
        .bg-green-lemon-medium { background-color: #dcedc8; }
        .bg-green-lemon-dark { background-color: #c5e1a5; }
        
        /* Border Classes */
        .border-green-lemon { border-color: #8bc34a !important; }
        .border-green-lemon-light { border-color: #c5e1a5 !important; }
        
        /* Button Pulse Animation for CTAs */
        @keyframes btnPulse {
          0% { box-shadow: 0 0 0 0 rgba(139, 195, 74, 0.4); }
          70% { box-shadow: 0 0 0 10px rgba(139, 195, 74, 0); }
          100% { box-shadow: 0 0 0 0 rgba(139, 195, 74, 0); }
        }
        .btn-pulse {
          animation: btnPulse 2s ease-in-out infinite;
        }
        
        /* Card Shadow on Hover */
        .shadow-hover-green:hover {
          box-shadow: 0 20px 40px rgba(139, 195, 74, 0.2) !important;
        }
        
        /* Responsive Typography */
        @media (max-width: 768px) {
          .display-3 { font-size: 2.5rem; }
          .display-4 { font-size: 2rem; }
        }
        
        /* Loading Shimmer Effect (for future use) */
        @keyframes shimmer {
          0% { background-position: -1000px 0; }
          100% { background-position: 1000px 0; }
        }
        .shimmer {
          background: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%);
          background-size: 1000px 100%;
          animation: shimmer 2s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default Home;