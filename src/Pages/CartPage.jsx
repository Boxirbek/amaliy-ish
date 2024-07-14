import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart } from '../redux/cartSlice';
import './CartPage.css';
import Footer from '../components/Footer';

const CartPage = () => {
    const cartItems = useSelector(state => state.cart.items);
    const dispatch = useDispatch();

    const handleRemoveFromCart = (id) => {
        dispatch(removeFromCart(id));
    };

    return (
        <>
        <div className="cart-page">
            <h1>Your Cart</h1>
            {cartItems.length === 0 ? (
                <p>Your cart is empty</p>
            ) : (
                <div className="cart-items">
                    {cartItems.map(item => (
                        <div key={item.id} className="cart-item">
                            <img src={item.image_url} alt={item.name} className="cart-item-image" />
                            <div className="cart-item-details">
                                <p>{item.name} - ${item.price}</p>
                                <button className='removeButton' onClick={() => handleRemoveFromCart(item.id)}>Remove</button>
                            </div>
                        </div>
                    ))}
                    <div className="cart-summary">
                        <p>Subtotal: ${cartItems.reduce((total, item) => total + item.price, 0)}</p>
                        <button className="checkout-button">Checkout</button>
                    </div>
                </div>
            )}
        </div>
      
        </>
    );
};

export default CartPage;
