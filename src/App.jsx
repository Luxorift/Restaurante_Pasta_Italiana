import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Landing from './pages/Landing';
import Menu from './pages/Menu';
import Users from './pages/Users';
import Delivery from './pages/Delivery';
import Orders from './pages/Orders';

function App() {
  return (
    <Router>
      <div className="app-container">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/menu" element={<Menu />} />
            <Route path="/admin/users" element={<Users />} />
            <Route path="/admin/delivery" element={<Delivery />} />
            <Route path="/admin/orders" element={<Orders />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
