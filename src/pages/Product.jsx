import React from 'react';

const Product = () => {
  return (
    <div className="product-page text-black bg-white">
      <section 
        className="hero flexCenter h-screen text-black text-center relative"
        style={{ 
          backgroundColor: '#f5f5f7', // Цвет фона, похожий на Apple Vision Pro Specs
          padding: '20px'
        }}
      >
        <div className="max-container">
          <h1 className="h1 text-black">Innovatech VR Pro</h1>
          <img 
            src="https://www.apple.com/v/apple-vision-pro/c/images/specs/hero__cvgr5aj1ttsi_large.jpg" 
            alt="Innovatech VR Pro" 
            className="mx-auto"
            style={{
              maxWidth: '100%',
              height: 'auto',
              marginTop: '20px'
            }}
          />
        </div>
      </section>
      <section className="specs-section py-20">
        <div className="max-container px-6 lg:px-20">
          <h2 className="h2 text-center mb-12">Specifications</h2>
          <div className="specs-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="spec-item">
              <h3 className="h3">Display</h3>
              <p className="regular-15">High-resolution display for an immersive experience.</p>
            </div>
            <div className="spec-item">
              <h3 className="h3">Processor</h3>
              <p className="regular-15">Latest generation processor for smooth performance.</p>
            </div>
            <div className="spec-item">
              <h3 className="h3">Battery Life</h3>
              <p className="regular-15">Up to 8 hours of continuous usage.</p>
            </div>
            <div className="spec-item">
              <h3 className="h3">Weight</h3>
              <p className="regular-15">Lightweight design for comfortable wear.</p>
            </div>
            <div className="spec-item">
              <h3 className="h3">Compatibility</h3>
              <p className="regular-15">Compatible with a wide range of devices.</p>
            </div>
            <div className="spec-item">
              <h3 className="h3">Connectivity</h3>
              <p className="regular-15">Supports Wi-Fi, Bluetooth, and USB-C connections.</p>
            </div>
          </div>
        </div>
      </section>
      <section className="features-section py-20 bg-gray-100">
        <div className="max-container px-6 lg:px-20">
          <h2 className="h2 text-black text-center mb-12">Key Features</h2>
          <div className="features-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="feature-item">
              <h3 className="h3">Immersive VR Experience</h3>
              <p className="regular-15">Experience the next level of virtual reality with our immersive technology.</p>
            </div>
            <div className="feature-item">
              <h3 className="h3">Advanced Tracking</h3>
              <p className="regular-15">Accurate and responsive tracking for seamless interactions.</p>
            </div>
            <div className="feature-item">
              <h3 className="h3">Ergonomic Design</h3>
              <p className="regular-15">Comfortable and ergonomic design for extended usage.</p>
            </div>
            <div className="feature-item">
              <h3 className="h3">Customizable Settings</h3>
              <p className="regular-15">Adjust settings to suit your preferences and enhance your experience.</p>
            </div>
            <div className="feature-item">
              <h3 className="h3">High-Fidelity Audio</h3>
              <p className="regular-15">Crystal clear audio for an immersive sound experience.</p>
            </div>
            <div className="feature-item">
              <h3 className="h3">Seamless Integration</h3>
              <p className="regular-15">Easily integrate with your existing devices and platforms.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Product;
