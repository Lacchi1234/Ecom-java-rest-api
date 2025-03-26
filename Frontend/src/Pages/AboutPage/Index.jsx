import React from 'react'
import Navbar from '../../Components/Navbar';

export default function About() {
  return (
    <div>
      <Navbar /> {/* Navbar Component */}
      <div className="container mt-5">
        <h1 className="text-center mb-4">About Our Store</h1>
        <p className="text-center lead">
          Welcome to <strong>YourStore</strong>, your go-to destination for high-quality and affordable products. We bring you the latest trends with fast and secure delivery.
        </p>

        {/* Our Mission & Vision */}
        <div className="row mt-5">
          <div className="col-md-6">
            <h3>Our Mission</h3>
            <p>
              Our mission is to provide an outstanding online shopping experience with a wide range of products, competitive prices, and exceptional customer service.
            </p>
          </div>
          <div className="col-md-6">
            <h3>Our Vision</h3>
            <p>
              We aim to become a globally recognized e-commerce platform, making online shopping easier, faster, and more secure for everyone.
            </p>
          </div>
        </div>

        {/* Why Choose Us? */}
        <div className="row mt-5">
          <div className="col-md-4 text-center">
            <h4>💎 High-Quality Products</h4>
            <p>We offer premium products that meet international standards.</p>
          </div>
          <div className="col-md-4 text-center">
            <h4>🚀 Fast & Secure Shipping</h4>
            <p>Get your products delivered safely with our trusted partners.</p>
          </div>
          <div className="col-md-4 text-center">
            <h4>🛍️ Customer Satisfaction</h4>
            <p>We prioritize customer happiness with easy returns & support.</p>
          </div>
        </div>

        {/* Contact Us */}
        <div className="text-center mt-5">
          <h3>Get in Touch</h3>
          <p>
            Have any questions? Reach out to our team for assistance.
          </p>
          <a href="mailto:support@yourstore.com" className="btn btn-primary mb-4">
            Contact Us
          </a>
        </div>
      </div>
    </div>
  );
};
  
