import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { addToCart } from '../redux/cartSlice';
import './singleProduct.css';
import Footer from '../components/Footer';

const SingleProductPage = () => {
    const { id } = useParams();
    const product = useSelector(state =>
        state.products.find(prod => prod.id === parseInt(id))
    );
    const dispatch = useDispatch();

    if (!product) {
        return <div>Product not found</div>;
    }

    const handleAddToCart = () => {
        dispatch(addToCart(product));
    };

    return (
        <div className="single-product-page">
            <img src={product.image_url} alt={product.name} className="product-image" />
            <div className="product-details">
                <h1>{product.name}</h1>
                <p>${product.price}</p>
                <button onClick={handleAddToCart}>Add to Cart</button>
            </div>
            <Footer/>
        </div>
    );
};

export default SingleProductPage;
