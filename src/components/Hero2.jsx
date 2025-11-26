import React from "react";
import image1 from "../assets/image/image.jpeg";

const Hero2 = () => {
  return (
    <div className="w-full h-180 flex items-center justify-center py-10 px-4">
      <div className="relative w-full max-w-6xl h-120 rounded-3xl overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center blur-sm brightness-100"
          style={{ backgroundImage: `url(${image1})` }}
        ></div>

        <div className="absolute inset-0 bg-black/40"></div>

        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6">
          <h1 className="text-white text-3xl md:text-4xl font-semibold">
            Find a Mr. Appliance <br /> Near Me Today
          </h1>

          <p className="text-gray-200 mt-3 max-w-md">
            Discover a nearby Mr. Appliance today for expert, reliable, and
            friendly service.
          </p>

          <div className="mt-5 flex items-center bg-white/20 backdrop-blur-md rounded-full p-1 w-full max-w-md">
            <input
              type="text"
              placeholder="Enter ZIP Code"
              className="flex-1 bg-transparent placeholder-gray-300 text-white px-4 py-2 outline-none"
            />
            <button className="bg-white text-gray-800 font-medium rounded-full px-5 py-2 hover:bg-gray-200 transition">
              Find Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero2;
