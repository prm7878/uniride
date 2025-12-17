import React from "react";
import { Routes, Route } from "react-router-dom";

import AmbientBackground from "./components/AmbientBackground";
import Header from "./components/Header";
import SearchCard from "./components/SearchCard";
import Footer from "./components/Footer";
import Register from "./components/Register"
import Login from "./components/Login";

import "./styles/uniride.css";

const App = () => {
  return (
    <div className="app-wrapper">
      <AmbientBackground />
      <Header />

      <div className="main-container">
        <div className="main-content">
          <Routes>
            
            <Route path="/" element={<SearchCard />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </Routes>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default App;
