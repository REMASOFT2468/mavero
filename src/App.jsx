import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Solution from "./pages/Solution.jsx";
import Product from "./pages/Product.jsx";
import Footer from "./components/Footer.jsx";
import Navbar from "./components/Navbar.jsx";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/solution" element={<Solution />} />
        <Route path="/product" element={<Product />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
