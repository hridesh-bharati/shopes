import React from 'react';

const Properties = () => {
  const listings = [
    { id: 1, title: 'Skyline Luxury Apartment', price: '₹75 Lakh', loc: 'Sector 62, Noida', beds: 3, tag: 'Verified', img: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=600&q=80' },
    { id: 2, title: 'Greenwood Modern Villa', price: '₹1.2 Cr', loc: 'Gomti Nagar, Lucknow', beds: 4, tag: 'Direct Owner', img: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=600&q=80' },
    { id: 3, title: 'Cozy Studio Near Metro', price: '₹18,000/mo', loc: 'Indiranagar, Bengaluru', beds: 1, tag: 'No Brokerage', img: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=600&q=80' }
  ];

  return (
    <div className="container py-5">
      <div className="text-center mb-5">
        <span className="badge bg-primary-subtle text-primary mb-2">Exclusive Listings</span>
        <h2 className="fw-bold">Explore Premium Properties</h2>
        <p className="text-muted">Find hand-checked properties with authentic legal documentation.</p>
      </div>
      <div className="row g-4">
        {listings.map((item) => (
          <div key={item.id} className="col-md-4">
            <div className="card h-100 border-0 shadow-sm rounded-4 overflow-hidden card-hover">
              <img src={item.img} className="card-img-top object-fit-cover" alt={item.title} style={{ height: '200px' }} />
              <div className="card-body p-4 text-start">
                <span className="badge bg-success mb-2">{item.tag}</span>
                <h4 className="text-primary fw-bold">{item.price}</h4>
                <h5 className="card-title text-dark fw-bold text-truncate">{item.title}</h5>
                <p className="text-muted small"><i className="bi bi-geo-alt-fill text-danger me-1"></i> {item.loc}</p>
                <div className="d-flex justify-content-between text-secondary pt-2 border-top border-light small">
                  <span><i className="bi bi-door-open me-1"></i> {item.beds} BHK</span>
                  <span className="text-primary fw-medium pointer">View Details <i className="bi bi-arrow-right"></i></span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Properties;