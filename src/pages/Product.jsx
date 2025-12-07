import React from "react";
import Hero2 from "../components/Hero2";

const Product = () => {
  return (
    <div>
      <div className="w-full min-h-screen bg-black text-white flex flex-col items-center justify-center px-6 py-10 text-center">
        <div className="mb-6 animate-pulse">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-16 h-16 md:w-20 md:h-20"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="1.5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 9v3m0 4h.01M21 12A9 9 0 1 1 3 12a9 9 0 0 1 18 0Z"
            />
          </svg>
        </div>

        <h1 className="text-2xl md:text-5xl font-light">
          Product Page Unavailable
        </h1>

        <p className="text-sm md:text-lg mt-4 max-w-md text-gray-300">
          We’re currently working on something better. The product section will
          be live soon — thank you for your patience.
        </p>

        <svg
          className="mt-6 w-[220px] md:w-[350px]"
          height="30"
          viewBox="0 0 400 30"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M10 15 C120 50, 280 -20, 390 15"
            stroke="#ff3b3b"
            strokeWidth="4"
            strokeLinecap="round"
          />
        </svg>

        <button
          onClick={() => window.history.back()}
          className="mt-10 border border-white px-6 py-3 rounded-full text-sm md:text-base hover:bg-white hover:text-black transition duration-300"
        >
          Go Back
        </button>
      </div>

      <div className="bg-white w-full py-16 px-6 md:px-20">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-3xl md:text-5xl font-semibold text-gray-900 leading-tight mb-6">
            Everything You Need to Run and Scale Your Business — In One
            Platform.
          </h1>

          <p className="text-gray-600 text-base md:text-lg leading-relaxed mb-10">
            Mavero replaces dozens of disconnected tools with one streamlined
            ecosystem. Build workflows. Manage tasks. Send invoices. Automate
            repetitive work. Track progress. Handle communication. Everything —
            connected, centralized, and synced.
            <br />
            <br />
            No complexity. No steep learning curve. Just powerful tools designed
            to work together.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
            <div className="bg-gray-100 p-6 rounded-xl shadow-sm hover:shadow-md transition">
              <h2 className="text-lg font-semibold text-gray-900 mb-2">
                Unified Workspace
              </h2>
              <p className="text-gray-600">
                Manage projects, communication, and operations from one
                dashboard.
              </p>
            </div>

            <div className="bg-gray-100 p-6 rounded-xl shadow-sm hover:shadow-md transition">
              <h2 className="text-lg font-semibold text-gray-900 mb-2">
                Automation Engine
              </h2>
              <p className="text-gray-600">
                Eliminate repetitive tasks and scale without extra staffing.
              </p>
            </div>

            <div className="bg-gray-100 p-6 rounded-xl shadow-sm hover:shadow-md transition">
              <h2 className="text-lg font-semibold text-gray-900 mb-2">
                Smart Collaboration
              </h2>
              <p className="text-gray-600">
                Chat, share files, and assign work — all in context.
              </p>
            </div>

            <div className="bg-gray-100 p-6 rounded-xl shadow-sm hover:shadow-md transition">
              <h2 className="text-lg font-semibold text-gray-900 mb-2">
                Payments & Invoicing
              </h2>
              <p className="text-gray-600">
                Send invoices, receive payments, and track revenue seamlessly.
              </p>
            </div>

            <div className="bg-gray-100 p-6 rounded-xl shadow-sm hover:shadow-md transition md:col-span-2">
              <h2 className="text-lg font-semibold text-gray-900 mb-2">
                Analytics
              </h2>
              <p className="text-gray-600">
                Every action tracked. Every decision informed. Mavero doesn’t
                just organize your work — it accelerates it.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Hero2 />
    </div>
  );
};

export default Product;
