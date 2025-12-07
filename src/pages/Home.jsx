import { useState } from "react";
import "../App.css";
import Navbar from "../components/Navbar.jsx";
import Hero from "../components/Hero.jsx";
import Hero1 from "../components/Hero1.jsx";
import Hero3 from "../components/Hero3.jsx";
import Hero2 from "../components/Hero2.jsx";
import Hero4 from "../components/Hero4.jsx";
import Footer from "../components/Footer.jsx";

function Home() {
  return (
    <>
      <Hero />
      <Hero1 />
      <Hero3 />
      <Hero2 />
      <Hero4 />
    </>
  );
}

export default Home;
