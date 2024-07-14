import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from '../redux/productsSlice';
import Filter from '../components/Filter';
import ProductItem from '../components/ProductItem'; 
import './ProductPage.css'; 

const ProductsPage = () => {
    const dispatch = useDispatch();
    const products = useSelector(state => state.products);
    const [filters, setFilters] = useState({ category: '', price: '', color: '', size: '' });

    useEffect(() => {
        dispatch(fetchProducts());
    }, [dispatch]);

    const filteredProducts = products.filter((product) => {
        return (
            (filters.category ? product.category === filters.category : true) &&
            (filters.price ? product.price >= filters.price.split('-')[0] && product.price <= filters.price.split('-')[1] : true) &&
            (filters.color ? product.color === filters.color : true) &&
            (filters.size ? product.size === filters.size : true)
        );
    });

    return (
        <div className="products-page">
            <Filter filters={filters} setFilters={setFilters} />
            <div className="products-list">
                {filteredProducts.map(product => (
                    <ProductItem key={product.id} product={product} />
                ))}
            </div>
        </div>
    );
};

export default ProductsPage;
