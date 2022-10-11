import React, { useEffect } from "react";
import "./App.css";
import NavBar from "./components/NavBar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HeroSection from "./components/HeroSection";
import Footer from "./components/Footer";
import ReactGa from "react-ga";

function App() {
  useEffect(() => {
    ReactGa.initialize("UA-215603260-1");

    ReactGa.pageview(window.location.pathname + window.location.search);
  }, []);
  return (
    <Router>
      <NavBar></NavBar>
      <HeroSection />
      <Footer />
      <Routes>
        <Route path="/" exact />
      </Routes>
    </Router>
  );
}

export default App;
