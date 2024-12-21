import { useState } from "react";
import { assets } from "../assets/assets.js";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleScrollTo = (id) => {
    const targetElement = document.getElementById(id);
    if (id == "home") {
      scrollTo(0, 0);
    } else if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header
      className="flex gap-4 items-center justify-between pt-2 bg-white px-2 md:px-10 lg:px-20 sticky top-0 left-0 w-full z-[9998] shadow-md"
    >
      <button onClick={() => handleScrollTo("home")}>
        <img src={assets.logo} alt="Logo" className="w-28" />
      </button>

      <nav
        className={`fixed w-full top-0 left-0 h-screen ${
          menuOpen ? "-translate-x-0 z-10" : "-translate-x-full"
        } bg-white md:bg-transparent md:static md:size-auto md:-translate-x-0`}
      >
        <ul className="flex flex-col items-center text-black gap-5 text-lg md:font-light md:flex-row translate-y-[50%] md:translate-y-0">
          {["home", "about", "projects", "testimonials", "contact"].map(
            (navlink, index) => (
              <li key={index}>
                <button
                  onClick={() => {
                    handleScrollTo(navlink);
                  }}
                  className={`font-normal capitalize ${
                    navlink === "home" ? "text-indigo-600" : ""
                  }`}
                >
                  {navlink}
                </button>
              </li>
            )
          )}
        </ul>
      </nav>

      <div className={`flex items-center gap-4 ${menuOpen ? "z-[20]" : ""}`}>
        <button
          type="button"
          className={`bg-indigo-500 hover:bg-indigo-600 px-4 py-2 text-white rounded-full ${
            menuOpen ? "hidden md:block" : ""
          }`}
        >
          Sign up
        </button>

        <img
          src={menuOpen ? assets.cross_icon : assets.menu_icon}
          className={`w-6 cursor-pointer md:hidden`}
          onClick={() => setMenuOpen(!menuOpen)}
        />
      </div>
    </header>
  );
};

export default Header;
