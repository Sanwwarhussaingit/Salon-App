/* eslint-disable no-unused-vars */
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import Header from "./components/Shared/Header";
import { useState } from "react";
import "./app.css";
import UserLogin from "./pages/User/UserLogin";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userType, setUserType] = useState("user"); // or 'admin'

  const handleLogout = () => {
    // Add logout logic
    setIsAuthenticated(false);
  };
  return (
    <Router>
      <Header
        isAuthenticated={isAuthenticated}
        userType={userType}
        onLogout={handleLogout}
      />

      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<LandingPage />} />
        <Route path="/user/login" element={<UserLogin setIsAuthenticated={setIsAuthenticated} />} />
         {/* <Route path="/user/register" element={<UserRegister />} />
        <Route path="/admin/login" element={<AdminLogin />} />
        <Route path="/admin/register" element={<AdminRegister />} /> */}

        {/* User Routes */}
        {/* <Route path="/user/home" element={<UserHome />} /> */}

        {/* Admin Routes */}
        {/* <Route path="/admin/home" element={<AdminHome />} /> */}

        {/* 404 Route */}
        {/* <Route path="*" element={<NotFound />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
