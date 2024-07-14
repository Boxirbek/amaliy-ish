import React from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

const ProductDetail = () => {
    const { id } = useParams();
    const product = useSelector((state) => state.products.find((prod) => prod.id === parseInt(id)));

    if (!product) {
        return <div>Product not found</div>;
    }

    return (
        <div className="product-detail">
            <img src={product.image_url} alt={product.name} />
            <h1>{product.name}</h1>
            <p>${product.price}</p>
        </div>
    );
};

export default ProductDetail;
