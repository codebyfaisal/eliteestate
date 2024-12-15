import React from "react";

const Heading = ({ text1 = "", text2 = "", para = "" }) => {
  return (
    <div className="grid place-items-center gap-2 p-4 capitalize">
      <h1 className="text-3xl text-center md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-blue-500">
        {text1}{" "}
        <span className="font-light underline underline-offset-8 decoration-2 decoration-blue-400">
          {text2}
        </span>
      </h1>
      <p className="opacity-90 max-w-sm text-center text-gray-700 text-lg text-wrap">
        {para}
      </p>
    </div>
  );
};

export default Heading;
