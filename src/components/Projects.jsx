import React from "react";
import { Heading } from "./components.js";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { projectsData } from "../assets/assets.js";
import { motion } from "motion/react";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block" }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "bock" }}
      onClick={onClick}
    />
  );
}

const Projects = () => {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    lazyLoad: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    // arrows:false,
    responsive: [
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 2.5,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1.5,
        },
      },
      {
        breakpoint: 400,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  return (
    <motion.section
      initial={{ opacity: 0}}
      transition={{ duration: 2 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
    >
      <Heading
        text1={"projects"}
        text2={"that completed"}
        para={"Explore our portfolio, shaping spaces and legacies"}
      />

      <div className="slider-container mt-4">
        <Slider {...settings}>
          {projectsData.map((project, index) => (
            <div className="p-1" key={index}>
              <div className="shadow-md shadow-black/5 group">
                {/* Image Container */}
                <div className="overflow-hidden relative h-80 rounded-lg">
                  <img
                    src={project.image}
                    alt="Project Image"
                    className="group-hover:scale-105 transition-all duration-300 h-full w-full object-cover"
                  />
                  {/* Gradient and Location Text */}
                  <p className="w-full absolute bottom-0 left-0 bg-gradient-to-t from-gray-950 to-transparent text-white flex items-center gap-2 p-2 font-light">
                    <i className="fa-solid fa-location-dot"></i>
                    {project.location}
                  </p>
                </div>

                {/* Title and Price */}
                <div className="p-2 text-gray-700">
                  <h2 className="text-xl font-normal">{project.title}</h2>
                  <h1 className="text-indigo-500 font-normal text-xl">
                    $ {project.price}
                  </h1>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>      
    </motion.section>
  );
};

export default Projects;
