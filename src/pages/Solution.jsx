import React from "react";
import Hero2 from "../components/Hero2";

const Solution = () => {
  return (
    <dev>
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
          Solution Page Unavailable
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
      <div className="w-full bg-[#f9f9f9] flex justify-center px-6 py-20">
        <div className="max-w-4xl bg-white p-10 md:p-14 shadow-xl rounded-2xl">
          <h1 className="text-3xl md:text-5xl font-semibold text-gray-900 leading-tight mb-6 font-[Poppins]">
            Tailored to How You Work — Built for Every Workflow and Every Team.
          </h1>

          <p className="text-gray-700 text-lg leading-relaxed font-[Inter] mb-10">
            Different people work differently — but scattered tools slow
            everyone down. Mavero adapts to the way you operate. Whether you're
            a creator building a brand, a small business scaling operations, or
            a team managing complex projects — Mavero gives you structure,
            clarity, and the flexibility to run everything more efficiently.
          </p>

          <div className="w-20 h-1 bg-black rounded-full mb-10"></div>

          <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-5 font-[Poppins]">
            Solutions We Power
          </h2>

          <ul className="space-y-6 text-gray-700 text-lg font-[Inter] leading-relaxed">
            <li>
              <span className="font-semibold text-gray-900">For Creators:</span>{" "}
              Content organization, brand management, payments, and workflow
              automation — all in one place.
            </li>

            <li>
              <span className="font-semibold text-gray-900">
                For Small Businesses:
              </span>{" "}
              Projects, teams, billing, and client communication — centralized
              and connected.
            </li>

            <li>
              <span className="font-semibold text-gray-900">For Teams:</span>{" "}
              Collaboration, task assignments, real-time progress tracking, and
              alignment — without confusion.
            </li>

            <li>
              <span className="font-semibold text-gray-900">
                For Startups & Agencies:
              </span>{" "}
              Manage clients, automate repeatable processes, scale operations,
              and track revenue without chaos.
            </li>
          </ul>
          <p className="text-xl text-gray-900 font-semibold mt-12 font-[Inter]">
            Your work shouldn’t require a maze of tools — with Mavero, it
            finally doesn’t.
          </p>
        </div>
      </div>
      <Hero2 />
    </dev>
  );
};

export default Solution;
