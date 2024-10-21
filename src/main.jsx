import React, { useEffect } from 'react';
import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import Login from './views/Login/Login';
import Navbar from './views/components/Navbar';
import Dashboard from './views/Dashboard/Dashboard';
import Header from './views/components/Header';
import Academias from './views/Academias/Academias';
import Colegios from './views/Colegios/Colegios';
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
  const isHiddenRoute = ['/'].includes(location.pathname);
  const applyStyles = location.pathname !== '/';

  return (
    <>
      <div className="flex w-[100vw]">
        {showBreadcrumb && <Navbar /> }
        <div className='flex flex-col w-[100vw]'>
          {showBreadcrumb && <Header/>}
            <div className={applyStyles ? 'flex flex-col p-4 mx-4' : ''}>
              <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/Dashboard" element={<Dashboard />} />
                <Route path="/Academias" element={<Academias />} />
                <Route path="/Colegios" element={<Colegios />} />

              </Routes>
            </div>
        </div>
        
      </div>
    </>
  )
}

createRoot(document.getElementById('root')).render(<App />)
