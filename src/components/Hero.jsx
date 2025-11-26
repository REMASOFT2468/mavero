import React from "react";
import image1 from "../assets/image/image1.jpeg";

const Hero = () => {
  return (
    <section
      className="relative h-[75vh] md:h-[90vh] w-full bg-cover bg-center bg-no-repeat flex items-center"
      style={{ backgroundImage: `url(${image1})` }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Content */}
      <div className="relative z-10 px-6 md:px-16 max-w-3xl">
        <h1 className="text-white text-3xl md:text-4xl font-extrabold leading-tight drop-shadow-lg">
          Fix It Fast,
          <br />
          Hire Trusted Helpers,
          <br />
          And Take Back Your Time
        </h1>

        <p className="text-white text-lg md:text-xl mt-4 opacity-90 leading-relaxed">
          Connect instantly with skilled professionals for every home repair big
          or small. Fast, simple, reliable.
        </p>

        <button className="mt-8 bg-[#00C2FF] hover:bg-[#00A6D8] transition-all duration-300 px-8 py-3 rounded-xl text-white text-lg font-semibold shadow-md">
          Get Started
        </button>
      </div>
    </section>
  );
};

export default Hero;
