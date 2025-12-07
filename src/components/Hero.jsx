import React, { useEffect } from "react";
import image1 from "../assets/image/image1.jpeg";
import AOS from "aos";
import "aos/dist/aos.css";

const Hero = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <section
      className="relative h-[70vh] md:h-[90vh] w-full bg-cover bg-center bg-no-repeat flex items-center"
      style={{ backgroundImage: `url(${image1})` }}
    >
      <div className="absolute inset-0 bg-black/60"></div>

      <div className="relative z-10 px-6 md:px-16 max-w-3xl" data-aos="fade-up">
        <h1
          className="text-white text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight drop-shadow-lg"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          Fix It Fast,
          <br />
          Hire Trusted Helpers,
          <br />
          And Take Back Your Time
        </h1>

        <p
          className="text-white text-lg sm:text-xl md:text-2xl mt-4 opacity-90 leading-relaxed"
          data-aos="fade-up"
          data-aos-delay="400"
        >
          Connect instantly with skilled professionals for every home repair —
          big or small. Fast, simple, reliable.
        </p>

        <button
          className="mt-8 bg-[#00C2FF] hover:bg-[#00A6D8] transition-all duration-300 px-8 py-3 rounded-xl text-white text-lg font-semibold shadow-md"
          data-aos="zoom-in"
          data-aos-delay="600"
        >
          Get Started
        </button>
      </div>
    </section>
  );
};

export default Hero;
