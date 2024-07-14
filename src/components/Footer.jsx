import React from 'react';
import { FaFacebookF, FaInstagram, FaTwitter, FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-section">
                    <h2 className="footer-logo">Krist</h2>
                    <p><FaPhone /> (704) 555-0127</p>
                    <p><FaEnvelope /> krist@example.com</p>
                    <p><FaMapMarkerAlt /> 3891 Ranchview Dr. Richardson, California 62639</p>
                </div>
                <div className="footer-section">
                    <h3>Information</h3>
                    <ul>
                        <li>My Account</li>
                        <li>Login</li>
                        <li>My Cart</li>
                        <li>My Wishlist</li>
                        <li>Checkout</li>
                    </ul>
                </div>
                <div className="footer-section">
                    <h3>Service</h3>
                    <ul>
                        <li>About Us</li>
                        <li>Careers</li>
                        <li>Delivery Information</li>
                        <li>Privacy Policy</li>
                        <li>Terms & Conditions</li>
                    </ul>
                </div>
                <div className="footer-section">
                    <h3>Subscribe</h3>
                    <p>Enter your email below to be the first to know about new collections and product launches.</p>
                    <div className="subscribe-form">
                        <input type="email" placeholder="Your Email" />
                        <button type="submit">→</button>
                    </div>
                </div>
            </div>
            <div className="footer-bottom">
                <div className="payment-icons">
                    <div className="payment-placeholder">Visa</div>
                    <div className="payment-placeholder">MCard</div>
                    <div className="payment-placeholder"> Pay</div>
                    <div className="payment-placeholder">Amex</div>
                    <div className="payment-placeholder">PayPal</div>
                </div>
                <p>©2023 Krist All Rights are reserved</p>
                <div className="social-icons">
                    <FaFacebookF />
                    <FaInstagram />
                    <FaTwitter />
                </div>
            </div>
        </footer>
    );
};

export default Footer;
