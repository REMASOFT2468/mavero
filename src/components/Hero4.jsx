import React from "react";
import image1 from "../assets/image/image1.jpeg";

const Hero4 = () => {
  return (
    <section className="w-full py-20 px-6 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <h2 className="text-3xl font-bold">What Our Customers Are Saying</h2>
          <p className="text-gray-600 mt-2 max-w-xl mx-auto">
            Real stories from people who trust our service for fast, reliable
            appliance repairs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition">
            <p className="text-gray-700 leading-relaxed">
              “The technician arrived on time, explained everything clearly, and
              fixed my washing machine the same day. Amazing service!”
            </p>

            <div className="flex items-center gap-4 mt-6">
              <div className="w-12 h-12 rounded-full bg-blue-200">
                <img
                  src={image1}
                  alt="image"
                  className="w-12 h-12 rounded-full bg-blue-200"
                />
              </div>
              <div>
                <h4 className="font-semibold">Sarah M.</h4>
                <p className="text-sm text-gray-500">Lagos</p>
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition">
            <p className="text-gray-700 leading-relaxed">
              “Transparent pricing, fast repair, and zero stress. I’ll
              definitely use this service again when I have appliance issues.”
            </p>

            <div className="flex items-center gap-4 mt-6">
              <div className="w-12 h-12 rounded-full bg-blue-200">
                <img
                  src={image1}
                  alt="image"
                  className="w-12 h-12 rounded-full bg-blue-200"
                />
              </div>
              <div>
                <h4 className="font-semibold">John D.</h4>
                <p className="text-sm text-gray-500">Abuja</p>
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition">
            <p className="text-gray-700 leading-relaxed">
              “I loved how professional and friendly the technician was. He
              fixed my fridge in under an hour. Highly recommended!”
            </p>

            <div className="flex items-center gap-4 mt-6">
              <div className="w-12 h-12 rounded-full bg-blue-200">
                <img
                  src={image1}
                  alt="image"
                  className="w-12 h-12 rounded-full bg-blue-200"
                />
              </div>
              <div>
                <h4 className="font-semibold">Chinwe O.</h4>
                <p className="text-sm text-gray-500">Port Harcourt</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero4;
