/*import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LoginPage from "./components/LoginPage"; 
import DonorSignUpPage from "./components/DonorSignUp"; 
import OrganizationSignUpPage from "./components/OrganizationSignUp"; // Replace with actual path if different

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/donor-signup" element={<DonorSignUpPage />} />
        <Route path="/organization-signup" element={<OrganizationSignUpPage />} />
      </Routes>
    </Router>
  );
}

export default App;*/
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import LoginPage from './components/LoginPage';
import DonorSignUpPage from './components/DonorSignUp';
import OrganizationSignUpPage from './components/OrganizationSignUp';
import ContactUs from './components/Contact';
import Search from './components/Search';
import FAQ from './components/FAQ';
import Gallery from './components/Gallery'; // Import Gallery component

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/donor-signup" element={<DonorSignUpPage />} />
        <Route path="/organization-signup" element={<OrganizationSignUpPage />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/search" element={<Search />} />
        <Route path="/FAQ" element={<FAQ />} />
        <Route path="/Gallery" element={<Gallery />} /> {/* Gallery route */}
      </Routes>
    </Router>
  );
};

export default App;
