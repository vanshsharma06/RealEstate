import Navbar from "./Components/Navbar/Navbar";
import Container from "./Components/Container/Container";
import WhyUs from "./Components/WhyUS/WhyUS";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import FeaturedProperties from "./Components/FeaturedProperties/FeaturedProperties";
import AllProperties from "./Components/FeaturedProperties/AllProperties";
import FeaturedProperties2 from "./Components/FeaturedProperties2/FeaturedProperties2";

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
      <FeaturedProperties2></FeaturedProperties2>
    </div>
  );
}
