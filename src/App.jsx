import React from 'react';
import { Routes, Route } from 'react-router-dom'; 
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import Properties from './Components/Properties';
import WhyUs from './Components/WhyUs';
import Contact from './Components/Contact';
import Footer from './Components/Footer';

function App() {
  return (
    <div className="d-flex flex-column min-vh-screen bg-light">
      <Navbar />
      
      <main className="flex-grow-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/properties" element={<Properties />} />
          <Route path="/why-us" element={<WhyUs />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </main>
      
      <Footer />
    </div>
  );
}

export default App;