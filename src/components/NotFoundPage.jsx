import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="w-full min-h-[75vh] flex flex-col items-center justify-center px-4 py-10 text-center font-sans">
      <h1 className="text-3xl sm:text-5xl font-extrabold text-gray-900 tracking-tight mb-3">
        This page does not exist
      </h1>

      <p className="text-sm sm:text-base text-gray-500 max-w-lg mb-8 leading-relaxed">
        Sorry, the page you are looking for does not exist or has been removed.
        Continue exploring the site through the links.
      </p>

      <div className="relative w-full max-w-[450px] sm:max-w-[600px] my-4 flex items-center justify-center">
        <img
          src="https://www.evoca.am/img/robot-animation.gif" 
          alt="404 Error"
          className="w-full h-auto object-contain"
        />
      </div>

      <Link
        to="/"
        className="mt-6 inline-flex items-center justify-center px-8 py-3 rounded-full border border-[#5D00E0] text-[#5D00E0] hover:bg-[#5D00E0] hover:text-white transition-all duration-200 text-base font-medium"
      >
        Go home
      </Link>
    </div>
  );
};

export default NotFound;
