import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { BrowserRouter as Router } from 'react-router-dom';

import Dashboard from './Dashboard';
import Products from './Products';
import Orders from './Orders';


const App = () => {
  return (
    <Router>
      <div>
        <Routes>
          <Route exact path="/" element={<Dashboard />} />
          <Route path="/products" element={<Products />} />
          <Route path="/orders" element={<Orders />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
