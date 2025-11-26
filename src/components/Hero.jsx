import React from "react";
import image1 from "../assets/image/image1.jpeg";

const Hero = () => {
  return (
    <section
      className="relative h-[70vh] w-full bg-cover bg-center bg-no-repeat bg-size[auto-100px] flex md:h-[90vh]"
      style={{ backgroundImage: "url('/src/assets/image/image1.jpeg')" }}
    >
      <div className="absolute inset-0 bd-black/"></div>
      <div className="mt-[90px] md:-mt-[10px]">
        <h4 className="text-white text-xl font-bold p-10 md:p-15 md:text-5xl md:w-[200vh]">
          Fix It Fast,
          <br />
          Hire Trusted Helpers,and <br />
          Take Back Your Time <br />
          All From one App
        </h4>
        <p className="text-white text-1xl ml-10 md:ml-15 text-2xl">
          Connect instantly with skilled <br />
          professionals for every home repair,
          <br /> big or small. Simple, fast, reliable.
        </p>
        <div className="p-10  flex gap-[20px] md:-ml-5">
          <button className="bg-[#00C2FF] h-10 w-30 rounded-xl text-white md:ml-10">
            {" "}
            Get Started
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
