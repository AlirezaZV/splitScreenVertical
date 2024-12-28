import React from "react";
import HeroSection from "./components/HeroSection";
import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PageFirst from "./pages/Page1";
import PageSecond from "./pages/page2";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={      <HeroSection
        leftScreen="/page1.png"
        rightScreen="/page2.png"
      />} />
        <Route path="/page1" element={<PageFirst />} />
        <Route path="/page2" element={<PageSecond />} />
      </Routes>
    </Router>
  );
}

export default App;
