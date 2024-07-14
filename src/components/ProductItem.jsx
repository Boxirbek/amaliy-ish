import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/cartSlice';

const ProductItem = ({ product }) => {
    const dispatch = useDispatch();

    const handleAddToCart = () => {
        dispatch(addToCart(product));
    };

    return (
        <div className="product-item">
            <Link to={`/product/${product.id}`}>
                <img src={product.image_url} alt={product.name} className="product-image" />
                <h2>{product.name}</h2>
            </Link>
            <p>${product.price}</p>
            <button className='AddTBtn' onClick={handleAddToCart}>Add to Cart</button>
        </div>
    );
};

export default ProductItem;

