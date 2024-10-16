import React, { useEffect } from 'react';
import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import Login from './views/Login/Login';
import Navbar from './views/components/Navbar';
import Dashboard from './views/Dashboard/Dashboard';

const App = () => {
  return (
    <React.StrictMode>
      <Router>
        <AppContent />
      </Router>
    </React.StrictMode>
  );
}

const AppContent = () => {
  const showNavbarRoutes = ['/'];
  const isLoginPage = showNavbarRoutes.includes(location.pathname);
  const showBreadcrumb = !isLoginPage


  return (
    <>
      <div className="flex">
        {showBreadcrumb && <Navbar />}
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/Dashboard" element={<Dashboard />} />
          </Routes>
      </div>
    </>
  )
}

createRoot(document.getElementById('root')).render(<App />)
