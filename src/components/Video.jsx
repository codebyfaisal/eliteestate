import { assets } from "../assets/assets";
import Heading from "./Heading";
import { motion } from "motion/react";

const Video = () => {
  return (
    <section>
      <motion.div
        initial={{ opacity: 0, x: -200 }}
        transition={{ duration: 1.5 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
      >
        <div className="max-w-xl mx-auto">
          <Heading text1="Let's find the perfect home for you." />
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 text-gray-700 mt-6">
          <div className="bg-gray-100 shadow-sm p-4 rounded-md overflow-hidden space-y-6 hover:bg-indigo-50 group transition-all duration-200">
            <div className="bg-indigo-500 w-max rounded-full p-3">
              <img
                src={assets.home_1_icon}
                alt="Home Svg"
                className="group-hover:scale-x-[-1] transition-all duration-200"
              />
            </div>
            <div className="space-y-2">
              <h1 className="font-medium text-2xl opacity-95 max-w-72">
                Start your home search here.
              </h1>
              <p>
                Our expert team is ready to help you find the ideal property,
                perfectly suited to your lifestyle and preferences.
              </p>
            </div>
          </div>

          <div className="bg-gray-100 shadow-sm p-4 rounded-md overflow-hidden space-y-6 hover:bg-indigo-50 group transition-all duration-200">
            <div className="bg-indigo-500 w-max rounded-full p-3">
              <img
                src={assets.home_2_icon}
                alt="Home Svg"
                className="group-hover:scale-x-[-1] transition-all duration-200"
              />
            </div>
            <div className="space-y-2">
              <h1 className="font-medium text-2xl opacity-95 max-w-72">
                Explore diverse properties.
              </h1>
              <p>
                From cozy apartments to luxurious estates, we offer a variety of
                options to suit every budget and lifestyle.
              </p>
            </div>
          </div>

          <div className="bg-gray-100 shadow-sm p-4 rounded-md overflow-hidden space-y-6 hover:bg-indigo-50 group transition-all duration-200">
            <div className="bg-indigo-500 w-max rounded-full p-3">
              <img
                src={assets.home_3_icon}
                alt="Home Svg"
                className="group-hover:scale-x-[-1] transition-all duration-200"
              />
            </div>
            <div className="space-y-2">
              <h1 className="font-medium text-2xl opacity-95 max-w-72">
                Begin your home ownership journey.
              </h1>
              <p>
                We make the process easy, with expert guidance every step of the
                way. Let us help you navigate the path to your new home.
              </p>
            </div>
          </div>
        </div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, x: 200 }}
        transition={{ duration: 1.5 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className="w-full h-[60vh] overflow-hidden shadow-md rounded-lg relative mt-16"
      >
        <img
          src={assets.header_img}
          alt="Video img"
          className="object-cover size-full"
        />

        <div className="absolute inset-0 size-full flex justify-center items-center">
          <div
            className="bg-indigo-500 w-12 h-12 sm:w-16 sm:h-16 rounded-full relative flex justify-center items-center cursor-pointer animate-pulseSlow"
            onClick={() =>
              window.open(
                "https://www.youtube.com/watch?v=y9j-BL5ocW8",
                "_blank"
              )
            }
          >
            <div
              className="pl-1 size-full flex justify-center items-center relative
              before:content-[''] before:size-full before:absolute before:top-0 before:left-0 
              before:border-4 before:border-indigo-500 before:rounded-full before:scale-125 
              before:animate-pingSlow              
              after:content-[''] after:size-full after:absolute after:top-0 after:left-0 
              after:border-2 after:border-indigo-500 after:rounded-full after:scale-155 
              after:animate-spinSlow"
            >
              <svg
                fill="#ffffff"
                version="1.1"
                id="Capa_1"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                width="22px"
                height="22px"
                viewBox="0 0 163.861 163.861"
                xmlSpace="preserve"
              >
                <g>
                  <path d="M34.857,3.613C20.084-4.861,8.107,2.081,8.107,19.106v125.637c0,17.042,11.977,23.975,26.75,15.509L144.67,97.275 c14.778-8.477,14.778-22.211,0-30.686L34.857,3.613z" />
                </g>
              </svg>
            </div>
          </div>
        </div>
      </motion.div>
      <div id="testimonials"></div>
    </section>
  );
};

export default Video;
