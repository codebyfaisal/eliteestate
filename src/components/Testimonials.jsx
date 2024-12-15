import { assets, testimonialsData } from "../assets/assets.js";
import { Heading } from "./components.js";
import { motion } from "motion/react";

const Testimonials = () => {
  return (
    <motion.section
      initial={{ opacity: 0, x: -200 }}
      transition={{ duration: 1.5 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
    >
      <Heading
        text1={"Customer"}
        text2={"Testimonials"}
        para={"True stories of people who found a home with us"}
      />

      <div className="flex flex-wrap justify-center gap-5">
        {testimonialsData.map((testimonial, index) => (
          <div
            className="max-w-80 p-8 ring-1 ring-black/5 shadow-xl"
            key={index}
          >
            <div className="text-gray-700 opacity-[0.97]">
              <img
                src={assets.comma}
                className="w-5 opacity-80 float-left mr-2"
                alt="Comma Icon"
              />
              <p>{testimonial.text}</p>
            </div>

            <div className="clear-both flex items-center gap-4 mt-4">
              <img src={testimonial.image} alt="" className="w-16" />
              <div className="">
                <h1 className="font-medium text-lg opacity-95">
                  {testimonial.name}
                </h1>
                <h1 className="font-light opacity-85">
                  {testimonial.profession}
                </h1>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div id="contact"></div>
    </motion.section>
  );
};

export default Testimonials;
