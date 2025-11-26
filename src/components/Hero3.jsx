import React from "react";
import image3 from "../assets/image/image3.jpeg";

const Hero3 = () => {
  return (
    <section className="w-full px-6 py-16 flex flex-col md:flex-row items-center md:items-start gap-12">
      <div className="flex-1">
        <h2 className="text-3xl font-bold leading-tight mb-4">
          Why Choose <span className="text-blue-500">Mr. Appliance</span> to
          Repair
        </h2>

        <p className="text-gray-600 mb-10 max-w-lg">
          Reliable appliance repair with skilled technicians ensuring
          satisfaction every single time.
        </p>

        <div className="space-y-4">
          <div className="bg-white shadow-md rounded-xl p-5 flex items-start gap-4">
            <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
              📅
            </div>
            <div className="flex-1">
              <h3 className="font-semibold text-lg">
                Flexible Scheduling and Quick Repairs
              </h3>
              <p className="text-gray-500 text-sm mt-1">
                We promptly assess your appliance, explain needed repairs, and
                provide a clear upfront quote.
              </p>
            </div>
            <button className="text-black text-xl">→</button>
          </div>

          <div className="bg-white shadow-sm rounded-xl p-5  items-center justify-between">
            <span className="text-blue-500 font-medium">
              Verified Professionals
            </span>
            <p>
              Every helper on the platform goes through strict verification,
              skill checks, and identity confirmation. You’re not dealing with
              random people only certified, experienced technicians who know
              exactly what they’re doing.
            </p>
            <button className="text-black text-xl">→</button>
          </div>

          <div className="bg-white shadow-sm rounded-xl p-5  items-center justify-between">
            <span className="text-blue-500 font-medium">
              Secure In-App Payments
            </span>
            <p>
              Forget cash or risky transfers. Pay safely through the app only
              after the job is completed to your satisfaction. Your money stays
              protected from start to finish.
            </p>
            <button className="text-black text-xl">→</button>
          </div>

          <div className="bg-white shadow-sm rounded-xl p-5  items-center justify-between">
            <span className="text-blue-500 font-medium">
              Real-Time Tracking
            </span>
            <p>
              Know exactly when your helper accepts your job, leaves for your
              location, starts working, and completes the repair. Full
              transparency — no guessing, no excuses.
            </p>
            <button className="text-black text-xl">→</button>
          </div>

          <div className="bg-white shadow-sm rounded-xl p-5  items-center justify-between">
            <span className="text-blue-500 font-medium">
              Fast & Reliable Service
            </span>
            <p>
              No waiting days for someone to show up. The moment you post a job,
              qualified helpers in your area get notified instantly. Most users
              get a response within minutes not hours.
            </p>
            <button className="text-black text-xl">→</button>
          </div>
        </div>
      </div>

      <div className="flex-1 flex justify-center md:justify-end md:mt-70">
        <img
          src={image3}
          alt="Repair"
          className="w-full max-w-md rounded-3xl object-cover shadow-lg "
        />
      </div>
    </section>
  );
};

export default Hero3;
