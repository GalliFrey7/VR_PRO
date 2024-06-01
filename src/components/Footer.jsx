import React from 'react';

const Footer = () => {
  return (
    <footer className="footer bg-black text-white py-10">
      <div className="max-container">
        <div className="contact-info text-center">
          <div className="contact-item mb-4">
            <h2 className="h2">Address</h2>
            <p className="regular-15">123 Innovatech St, Tech City, TC 12345</p>
          </div>
          <div className="contact-item mb-4">
            <h2 className="h2">Phone</h2>
            <p className="regular-15">+1 (234) 567-890</p>
          </div>
          <div className="contact-item mb-4">
            <h2 className="h2">Email</h2>
            <p className="regular-15">contact@innovatech.com</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
