import React, { useState, useEffect } from 'react';
import { Routes, Route, useNavigate, Navigate } from 'react-router-dom';

import Home from './pages/Home';
import SignUpform from './pages/SignUpform';
import SignInform from './pages/SignInform';
import ButtonGradient from "./assets/svg/ButtonGradient";
import Cart from "./pages/Cart";
import OrederdFood from './pages/OrederdFood';

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(null); // Use null initially to avoid flicker
  const navigate = useNavigate();

  useEffect(() => {
    // Check if the token exists in localStorage
    const userEmail = localStorage.getItem('loggedInUser');
    if (userEmail) {
      setIsLoggedIn(true);  // User is authenticated
    } else {
      setIsLoggedIn(false); // No token means user is not logged in
      // Redirect to login page if not logged in
      const currentPath = window.location.pathname;
      if (currentPath !== '/signup') {
        navigate('/login');
      }
    }
  }, [navigate]);

  const handleLogout = () => {
    // Clear the token and update the logged-in state
    localStorage.removeItem('authToken');
    localStorage.removeItem('loggedInUser');
    setIsLoggedIn(false);
    navigate('/login');
  };

  if (isLoggedIn === null) {
    // Show a loading state or null while checking login status to avoid flicker
    return <div>Loading...</div>;
  }

  return (
    <div>
      <Routes>
        <Route path="/signup" element={<SignUpform />} />
        <Route path="/login" element={<SignInform />} />

        {/* Conditionally render based on authentication status */}
        {isLoggedIn ? (
          <>
            <Route path="/home" element={<Home loggedInUser={isLoggedIn} onLogout={handleLogout} />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/orederedfood" element={<OrederdFood />} />
          </>
        ) : (
          <Route path="*" element={<Navigate to="/login" />} />
        )}
      </Routes>

      <ButtonGradient />
    </div>
  );
};

export default App;
