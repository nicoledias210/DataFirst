import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Link, Routes, useNavigate } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css'; // If you installed Bootstrap via npm
import "./App.css";
import Register from "./Register.js";
import Login from "./Login.js";
import Profile from './Profile.js';
import Admin from './Admin.js';
import Database from './Database.js';
import Dashboard from './Dashboard.js';
import Contact from './Contact.js';
import Datastories from './Datastories.js';
import Home from './Home.js';

function RootRedirect() {
  const navigate = useNavigate();

  useEffect(() => {
    if (window.location.pathname === "/") {
      navigate("/Home");
    }
  }, [navigate]);

  return null;
}

function App() {
  const [register, setRegister] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);
  const [isUserAdmin, setIsUserAdmin] = useState(false);

  return (
    <Router>
      <RootRedirect />
      <div className="container">
        <header className="header">
          <nav className="navLeft">
            {/* Links to be shown before login */}
            <Link to="/Home">Home</Link>
            <Link to="/Dashboard">Dashboard</Link>
            <Link to="/Datastories">Data Stories</Link>
          </nav>
          
          <div className="titleContainer">
            <h1>United States Public Sector Labor Market</h1>
            <h3 className="subtitle-usc">USC Civic Leadership Education and Research (CLEAR) Initiative</h3>
          </div>
          
          <nav className="navRight">
            {/* Links to be shown after login */}
            {register ? (
              <>
                <Link to="/Contact">Contact</Link>
                <Link to="/Database" className='ml-2'>Database</Link>
                <Link to="/Profile">Profile</Link>
              </>
            ) : (
              <>
                <Link to="/Contact">Contact</Link>
                <Link to="/Login">Log In</Link>
                <Link to="/Register">Sign Up</Link>
              </>
            )}
          </nav>
        </header>
        <div className="main-content">
          <Routes>
            <Route path="/Login" element={<Login register={register} setRegister={setRegister} setCurrentUser={setCurrentUser} setIsUserAdmin={setIsUserAdmin} />} />
            <Route path="/Register" element={<Register register={register} setRegister={setRegister} setCurrentUser={setCurrentUser} />} />
            <Route path="/Profile" element={<Profile setRegister={setRegister} currentUser={currentUser} />} />
            <Route path="/Dashboard" element={<Dashboard />} />
            <Route path="/Datastories" element={<Datastories />} />
            <Route path="/Database" element={<Database />} />
            <Route path="/Contact" element={<Contact />} />
            <Route path="/Home" element={<Home />} />
            {isUserAdmin && <Route path="/Admin" element={<Admin />} />}
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
