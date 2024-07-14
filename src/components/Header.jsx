import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import './Header.css';
import KristLogo from '../assets/krist.png'
import { BsCart4 } from "react-icons/bs";
import { FaRegHeart } from "react-icons/fa";

const Header = () => {
    const cartItems = useSelector((state) => state.cart.items);

    return (
        <header className="header">
            <div className="header-container">
                <Link to="/" className="logo">
                    <img src={KristLogo}alt="Krist" />
                </Link>
                <nav className="nav">
                    <Link to="/" className="nav-item">Home</Link>
                    <Link to="/shop" className="nav-item">Shop</Link>
                    <Link to="/our-story" className="nav-item">Our Story</Link>
                    <Link to="/blog" className="nav-item">Blog</Link>
                    <Link to="/contact-us" className="nav-item">Contact Us</Link>
                </nav>
                <div className="header-right">
                    <Link to="/cart">
                        <FaRegHeart />
                    </Link>
                    <Link to="/cart" className="cart-icon">
                        <BsCart4 />
                        <i className="fa fa-shopping-cart"></i>
                        {cartItems.length > 0 && <span className="cart-count">{cartItems.length}</span>}
                    </Link>
                    
                    <Link to="/login" className="login-button">Login</Link>
                </div>
            </div>
        </header>
    );
};

export default Header;
