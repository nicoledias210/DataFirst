import 'bootstrap/dist/css/bootstrap.min.css'; // If you installed Bootstrap via npm
import React, { useState, useEffect } from 'react';
import "./App.css";
import { BrowserRouter as Router, Route, Link, Routes, useNavigate } from "react-router-dom";
import Register from "./Register";
import Login from "./Login";
import Profile from './Profile';
import Admin from './Admin';
import Database from './Database';
import Datastories from './Datastories';
import Contact from './Contact';

function RootRedirect() {
  const navigate = useNavigate();

  useEffect(() => {
    if (window.location.pathname === "/") {
      navigate("/Datastories");
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
      <div className="contain">
        <header className="header">
          <h1>Federal Public Sector Labor Market</h1>
          <nav className="navLink">
            {register ? (
              <>
                <Link to="/Datastories">Data Stories</Link>
                <Link to="/Database">Database</Link>
                <Link to="/Contact">Contact</Link>
                <Link to="/Profile">Profile</Link>
                {isUserAdmin && <Link to="/Admin">Admin</Link>}
              </>
            ) : (
              <>
                <Link to="/Datastories">Data Stories</Link>
                <Link to="/Contact">Contact</Link>
                <Link to="/Login">Log In</Link>
                <Link to="/Register">Sign Up</Link>
              </>
            )}
          </nav>
        </header>
        <h3 className="subtitle-usc ml-4">University of Southern California</h3>
        <div className="main-content">
          <Routes>
            <Route path="/Login" element={<Login register={register} setRegister={setRegister} setCurrentUser={setCurrentUser} setIsUserAdmin={setIsUserAdmin} />} />
            <Route path="/Register" element={<Register register={register} setRegister={setRegister} setCurrentUser={setCurrentUser} />} />
            <Route path="/Profile" element={<Profile setRegister={setRegister} currentUser={currentUser} />} />
            <Route path="/Datastories" element={<Datastories />} />
            <Route path="/Database" element={<Database />} />
            <Route path="/Contact" element={<Contact/>} />
            {isUserAdmin && <Route path="/Admin" element={<Admin/>} />}
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;

