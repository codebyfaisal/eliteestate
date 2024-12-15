import React from "react";
import { assets } from "../assets/assets";

const Footer = () => {
  const handleScrollTo = (id) => {
    const targetElement = document.getElementById(id);
    if (id == "home") {
      scrollTo(0, 0);
    } else if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <footer className="bg-gray-800 text-white/90 font-light px-2 md:px-10 lg:px-20 space-y-8">
      {/* Logo and Social Media */}
      <div className="flex justify-between items-center gap-x-4 font-normal border-b border-gray-700 pt-6 pb-2 flex-wrap sm:flex-nowrap">
        <a href="./">
          <img
            src={assets.logo_w}
            alt="EliteEstate Logo"
            loading="lazy"
            className="w-28"
          />
        </a>
        <div className="flex items-center gap-3 mt-1 text-gray-300">
          <p className="hidden sm:block">Follow us:</p>
          <a
            href="https://www.youtube.com"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white/10 p-2 rounded-full size-10 inline-flex justify-center items-center hover:bg-indigo-500 transition-all duration-300"
          >
            <i className="fa-brands fa-youtube"></i>
          </a>
          <a
            href="https://www.facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white/10 p-2 rounded-full size-10 inline-flex justify-center items-center hover:bg-indigo-500 transition-all duration-300"
          >
            <i className="fa-brands fa-facebook"></i>
          </a>
          <a
            href="https://www.twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white/10 p-2 rounded-full size-10 inline-flex justify-center items-center hover:bg-indigo-500 transition-all duration-300"
          >
            <i className="fa-brands fa-twitter"></i>
          </a>
          <a
            href="https://www.instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white/10 p-2 rounded-full size-10 inline-flex justify-center items-center hover:bg-indigo-500 transition-all duration-300"
          >
            <i className="fa-brands fa-instagram"></i>
          </a>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-gray-300">
        {/* Contacts  */}
        <div>
          <h2 className="text-xl font-semibold mb-4 text-gray-100">Contacts</h2>
          <ul className="flex flex-col gap-2">
            <li className="max-w-sm">
              Experts in delivering premium real estate solutions tailored to
              your needs. Contact Us Today.
            </li>
            <li className="flex gap-2 items-center">
              <i className="fa-solid fa-location-dot"></i>East Chicago, US
            </li>
            <li className="flex gap-2 items-center">
              <i className="fa-solid fa-phone"></i> +92 32 9396952
            </li>
            <li className="flex gap-2 items-center">
              <i className="fa-solid fa-envelope"></i> elieestate@gmail.com
            </li>
          </ul>
        </div>

        <div className="grid grid-cols-2 gap-4">
          {/* Navigation Links */}
          <div>
            <h2 className="text-xl font-semibold mb-4 text-gray-100">
              Company
            </h2>
            <ul className="flex flex-col gap-2">
              <li>
                <button
                  onClick={() => handleScrollTo("home")}
                  className="hover:text-blue-500"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleScrollTo("about")}
                  className="hover:text-blue-500"
                >
                  About
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleScrollTo("projects")}
                  className="hover:text-blue-500"
                >
                  Projects
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleScrollTo("testimonials")}
                  className="hover:text-blue-500"
                >
                  Testimonials
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleScrollTo("contact")}
                  className="hover:text-blue-500"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>

          {/* Navigation Links */}
          <div>
            <h2 className="text-xl font-semibold mb-4 text-gray-100">
              Company
            </h2>
            <ul className="flex flex-col gap-2">
              <li>
                <button
                  onClick={() => handleScrollTo("home")}
                  className="hover:text-blue-500"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleScrollTo("about")}
                  className="hover:text-blue-500"
                >
                  About
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleScrollTo("projects")}
                  className="hover:text-blue-500"
                >
                  Projects
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleScrollTo("testimonials")}
                  className="hover:text-blue-500"
                >
                  Testimonials
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleScrollTo("contact")}
                  className="hover:text-blue-500"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="max-w-sm">
          <h2 className="text-xl font-semibold mb-4 text-gray-2">Newsletter</h2>
          <p className="mb-4">
            Subscribe to our weekly newsletter and receive updates via email.
          </p>
          <form
            className="flex rounded-full overflow-hidden group bg-white pl-5 pr-1 focus:ring-2 ring-indigo-600"
            onSubmit={(e) => e.preventDefault()}
          >
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-grow py-3 text-gray-700 rounded-sm outline-none transition duration-300 w-full"
              required={true}
            />
            <button
              type="submit"
              className="p-2 text-indigo-500 text-xl transition-all duration-100 min-w-12"
            >
              <i className="fa-solid fa-paper-plane"></i>
            </button>
          </form>
        </div>
      </div>

      {/* Footer Bottom Section */}
      <div className="border-t border-gray-700 pt-4 mt-8 flex flex-col md:flex-row items-center justify-between text-center md:text-left pb-4 text-gray-300">
        <p>Copyright 2024 © EliteEstate. All Rights Reserved.</p>
        <div className="space-x-4 mt-2 md:mt-0">
          <a href="#about" className="hover:text-indigo-400">
            Terms & Conditions
          </a>
          <a href="#about" className="hover:text-indigo-400">
            Privacy & Policy
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
