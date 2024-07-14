import React from 'react';
import './Filter.css';

const Filter = ({ filters, setFilters }) => {
    const handleFilterChange = (e) => {
        const { name, value } = e.target;
        setFilters((prevFilters) => ({
            ...prevFilters,
            [name]: value,
        }));
    };

    return (
        <div className="filters">
            <div className="filter-category">
                <h3>Product Categories</h3>
                <select name="category" onChange={handleFilterChange}>
                    <option value="">All</option>
                    <option value="electronics">Electronics</option>
                    <option value="clothing">Clothing</option>
                    <option value="accessories">Accessories</option>
                </select>
            </div>
            <div className="filter-price">
                <h3>Filter by Price</h3>
                <select name="price" onChange={handleFilterChange}>
                    <option value="">All</option>
                    <option value="0-50">0 - 50</option>
                    <option value="50-100">50 - 100</option>
                    <option value="100-200">100 - 200</option>
                </select>
            </div>
            <div className="filter-color">
                <h3>Filter by Color</h3>
                <select name="color" onChange={handleFilterChange}>
                    <option value="">All</option>
                    <option value="red">Red</option>
                    <option value="blue">Blue</option>
                    <option value="green">Green</option>
                </select>
            </div>
            <div className="filter-size">
                <h3>Filter by Size</h3>
                <select name="size" onChange={handleFilterChange}>
                    <option value="">All</option>
                    <option value="s">S</option>
                    <option value="m">M</option>
                    <option value="l">L</option>
                    <option value="xl">XL</option>
                </select>
            </div>
        </div>
    );
};

export default Filter;
