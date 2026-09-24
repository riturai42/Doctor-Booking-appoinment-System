import React from "react";
import { Link } from "react-router-dom";
import { assets } from "../assets/assets";

const Home = () => {
  return (
    <div className="min-h-screen bg-white">

      {/* Hero Section */}
      <section className="bg-blue-50">
        <div className="max-w-7xl mx-auto px-4 py-16">

          <div className="grid md:grid-cols-2 items-center gap-10">

            {/* Left Side */}
            <div>
              <p className="text-blue-600 font-semibold mb-3">
                YOUR HEALTH, OUR PRIORITY
              </p>

              <h1 className="text-4xl md:text-5xl font-bold text-gray-800 leading-tight">
                Book Your Doctor
                <br />
                Appointment{" "}
                <span className="text-blue-600">Easily</span>
              </h1>

              <p className="text-gray-600 mt-5 text-lg">
                Get the best medical care from top doctors, all in one place.
                Book appointments easily and take care of your health.
              </p>

              <div className="mt-8 flex gap-4">
                <Link
                  to="/doctors"
                  className="bg-blue-600 text-white px-7 py-3 rounded-full hover:bg-blue-700"
                >
                  Find Doctor
                </Link>

                <Link
                  to="/about"
                  className="border border-blue-600 text-blue-600 px-7 py-3 rounded-full hover:bg-blue-50"
                >
                  Learn More
                </Link>
              </div>
            </div>

            {/* Right Side Image */}
            <div className="flex justify-center">
              <img
                src={assets.homePage}
                alt="Doctor Appointment"
                className="w-full max-w-xl rounded-2xl shadow-lg"
              />
            </div>

          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">

          <h2 className="text-3xl font-bold text-center text-gray-800">
            Why Choose Wise Doctor?
          </h2>

          <div className="grid md:grid-cols-4 gap-6 mt-10">

            <div className="p-6 bg-white rounded-xl shadow-md text-center">
              <h3 className="font-bold text-xl text-blue-600">
                Trusted Doctors
              </h3>
              <p className="text-gray-600 mt-2">
                Consult with experienced doctors.
              </p>
            </div>

            <div className="p-6 bg-white rounded-xl shadow-md text-center">
              <h3 className="font-bold text-xl text-blue-600">
                Easy Booking
              </h3>
              <p className="text-gray-600 mt-2">
                Book your appointment in a few clicks.
              </p>
            </div>

            <div className="p-6 bg-white rounded-xl shadow-md text-center">
              <h3 className="font-bold text-xl text-blue-600">
                Online Consultation
              </h3>
              <p className="text-gray-600 mt-2">
                Get medical advice from your home.
              </p>
            </div>

            <div className="p-6 bg-white rounded-xl shadow-md text-center">
              <h3 className="font-bold text-xl text-blue-600">
                Better Healthcare
              </h3>
              <p className="text-gray-600 mt-2">
                Your health is our top priority.
              </p>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
};

export default Home;


