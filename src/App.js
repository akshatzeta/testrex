import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/navbar';
import Sidebar from './components/sidebar';
import Home from './pages/Home';
import PlanManagement from './pages/PlanManagement';
import BenefitManagement from './pages/BenefitManagement';
import CustomerManagement from './pages/CustomerManagment';
import Submenu1 from './pages/Submenu1';
import Submenu2 from './pages/Submenu2';
import Submenu3 from './pages/Submenu3';
import SKUManagement from './pages/SKUManagement';
import ProviderManagement from './pages/ProviderManagement';
import BookingManagement from './pages/BookingManagement';
import TimeSlot from './pages/TimeSlot'

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content flex flex-grow">
          <Sidebar />
          <div className="main-content flex-grow p-5">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/PlanManagement" element={<PlanManagement />} />
              <Route path="/BenefitManagement" element={<BenefitManagement />} />
              <Route path="/CustomerManagement" element={<CustomerManagement />} />
              <Route path="/submenu1" element={<Submenu1 />} />
              <Route path="/submenu2" element={<Submenu2 />} />
              <Route path="/submenu3" element={<Submenu3 />} />
              <Route path="/sku-management/*" element={<SKUManagement />} />
              <Route path="/provider-management/*" element={<ProviderManagement />} />
              <Route path="/booking-management" element={<BookingManagement />} />
              <Route path="/TimeSlot" element={<TimeSlot/>} />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
