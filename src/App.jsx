// import React from "react";
// import "bootstrap/dist/css/bootstrap.min.css";
// import "bootstrap/dist/js/bootstrap.bundle.min.js";
import Navbar from "./Components/Navbar/Navbar";
import Container from "./Components/Container/Container";
import WhyUs from "./Components/WhyUS/WhyUS";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import FeaturedProperties from "./Components/FeaturedProperties/FeaturedProperties";
import AllProperties from "./Components/FeaturedProperties/AllProperties";

export default function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Container></Container>
      <Router>
        <Routes>
          <Route path="/" element={<FeaturedProperties />} />
          <Route path="/all-properties" element={<AllProperties />} />
        </Routes>
      </Router>
      <WhyUs></WhyUs>
    </div>
  );
}
