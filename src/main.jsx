import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import App from './App';
import './index.css';

import Home from './pages/Home';
import Product from './pages/Product';
import Order from './pages/Order';
import News from './pages/News';
import Contact from './pages/Contact';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Home />} />
          <Route path="product" element={<Product />} />
          <Route path="order" element={<Order />} />
          <Route path="news" element={<News />} />
          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>
    </Router>
  </React.StrictMode>
);
