import React from "react";
import Slider from "react-slick";
import { projectsData } from "../assets/assets";
import { motion } from "motion/react";

const Hero = () => {
  const sliderSettings = {
    dots: true,
    fade: true,
    infinite: true,
    speed: 100,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 4000,
    adaptiveHeight: true,
  };

  return (
    <section
      className="w-full sm:h-[90vh] px-2 md:px-10 lg:px-20 relative hero mt-8 md:mt-0"
      id="home"
    >
      <div className="canvas absolute top-0 left-0 size-full z-[-1000]">
        {/* Dots */}
        <span
          className="dot"
          style={{ top: "59%", left: "57%", animationDelay: " 0s" }}
        />
        <span
          className="dot"
          style={{ top: "48%", left: "49%", animationDelay: " 2s" }}
        />
        <span
          className="dot"
          style={{ top: "91%", left: "67%", animationDelay: " 4s" }}
        />
        <span
          className="dot"
          style={{ top: "44%", left: "41%", animationDelay: " 6s" }}
        />
        <span
          className="dot"
          style={{ top: "20%", left: "53%", animationDelay: " 8s" }}
        />
        <span
          className="dot"
          style={{ top: "98%", left: "27%", animationDelay: " 10s" }}
        />
        <span
          className="dot"
          style={{ top: "64%", left: "54%", animationDelay: " 12s" }}
        />
        <span
          className="dot"
          style={{ top: "19%", left: "37%", animationDelay: " 14s" }}
        />

        {/* Lines */}
        <span
          className="line"
          style={{ top: "90%", left: "41%", animationDelay: " 1s" }}
        />
        <span
          className="line"
          style={{ top: "14%", left: "44%", animationDelay: " 3s" }}
        />
        <span
          className="line"
          style={{ top: "18%", left: "43%", animationDelay: " 5s" }}
        />
        <span
          className="line"
          style={{ top: "92%", left: "59%", animationDelay: " 7s" }}
        />

        {/* Triangles */}
        <span
          className="triangle"
          style={{ top: "64%", left: "38%", animationDelay: " 2s" }}
        />
        <span
          className="triangle"
          style={{ top: "25%", left: "72%", animationDelay: " 4s" }}
        />
        <span
          className="triangle"
          style={{ top: "17%", left: "96%", animationDelay: " 6s" }}
        />
        <span
          className="triangle"
          style={{ top: "75%", left: "56%", animationDelay: " 8s" }}
        />

        {/* Squares */}
        <span
          className="square"
          style={{ top: "35%", left: "59%", animationDelay: " 1s" }}
        />
        <span
          className="square"
          style={{ top: "60%", left: "20%", animationDelay: " 3s" }}
        />
        <span
          className="square"
          style={{ top: "70%", left: "30%", animationDelay: " 5s" }}
        />
        <span
          className="square"
          style={{ top: "58%", left: "76%", animationDelay: " 7s" }}
        />
      </div>

      <div className="sm:grid sm:grid-cols-1 md:grid-cols-2 sm:gap-8 h-full z-[1000] items-center space-y-4 sm:space-y-0">
        {/* Text Section */}
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 1.5 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="space-y-4"
        >
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-extrabold leading-tight tracking-tight text-gray-700 capitalize">
            Find your dream home effortlessly.
          </h1>
          <p className="text-lg md:text-xl text-gray-700 opacity-90">
            Discover properties that suit your style and location, all in one
            place.
          </p>

          <a
            href="#projects"
            className="rounded-full px-8 py-3 bg-indigo-500 text-white hover:bg-indigo-600 col-span-2 sm:col-span-1 block w-max"
          >
            Explore Projects
          </a>
        </motion.div>

        {/* Slider Section */}
        <motion.div
          className="relative bg-white"
          initial={{ opacity: 0, x: 100 }}
          transition={{ duration: 1.5 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <Slider {...sliderSettings}>
            {projectsData.slice(0, 2).map((project, index) => (
              <div key={index} className="group">
                <div className="relative overflow-hidden rounded-lg">
                  <img
                    src={project.image}
                    alt={`Featured property in ${project.location}`}
                    className="w-full h-[25rem] md:h-[30rem] object-cover group-hover:scale-[1.03] transition-transform duration-500 ease-in-out"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-75 group-hover:opacity-90 transition-opacity duration-500"></div>
                  <div className="absolute bottom-4 left-4 text-white space-y-2">
                    <p className="text-xl font-bold">{project.location}</p>
                    <p className="text-sm text-gray-300">
                      {project.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        <div id="about"></div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
