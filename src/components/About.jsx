import React from "react";
import { Heading } from "./components.js";
import { assets } from "../assets/assets.js";
import { motion } from "motion/react";

const About = () => {
  return (
    <motion.section
      initial={{ opacity: 0, x: -200 }}
      transition={{ duration: 1.5 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      className="grid place-items-center"      
    >
      <Heading
        text1={"about"}
        text2={"our brand"}
        para={"Passionate About Properties, Dedicated to Your Vision"}
      />

      <div className="flex flex-col items-center justify-center gap-8 mt-4 md:flex-row w-full">
        <div className="md:w-4/6 sm:min-w-96 sm:max-w-xl">
          <img
            src={assets.about_img}
            alt="About Our Brand"
            style={{ borderRadius: "34% 66% 37% 63% / 70% 48% 52% 30%" }}
            className="object-cover w-full"
          />
        </div>

        <div className="space-y-8 md:w-2/6">
          <div className="grid grid-cols-2 gap-6 sm:gap-8 text-gray-700">
            <div>
              <h1 className="text-4xl lg:text-5xl font-bold">10+</h1>
              <p className="opacity-90 max-w-40">
                Expansive Presence Across Cities
              </p>
            </div>
            <div>
              <h1 className="text-4xl lg:text-5xl font-bold">15+</h1>
              <p className="opacity-90 max-w-36">
                Years of Industry Experiance
              </p>
            </div>

            <div>
              <h1 className="text-4xl lg:text-5xl font-bold">50+</h1>
              <p className="opacity-90 max-w-36">
                Successfully Delivered Projects
              </p>
            </div>

            <div>
              <h1 className="text-4xl lg:text-5xl font-bold">30+</h1>
              <p className="opacity-90 max-w-36">Million Square Feet Built</p>
            </div>
          </div>

          <div>
            <a
              href="#projects"
              className="rounded-full px-8 py-3 bg-indigo-500 text-white hover:bg-indigo-600 text-center block"
            >
              Explore Our Projects
            </a>
          </div>
        </div>
      </div>

      <div id="projects"></div>
    </motion.section>
  );
};

export default About;
