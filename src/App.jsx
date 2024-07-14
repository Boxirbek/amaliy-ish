import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store';
import Header from './components/Header';
import ProductsPage from './Pages/ProductsPage';
import SingleProductPage from './Pages/SingleProductPage';
import CartPage from './Pages/CartPage';
import Footer from './components/Footer';
import './index.css';

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <div>
          <Header />
          <Routes>
            <Route path="/" element={<ProductsPage />} />
            <Route path="/product/:id" element={<SingleProductPage />} />
            <Route path="/cart" element={<CartPage />} />
          </Routes>
          <Footer />
        </div>
      </Router>
    </Provider>
  );
};

export default App;
