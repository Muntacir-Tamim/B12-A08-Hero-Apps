import React from "react";
import Error from "../assets/error-404.png";
import { Link } from "react-router";

const ErrorPage = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gray-100 px-6 text-center">
      {/* Image section */}
      <img
        src={Error}
        alt="404 Error"
        className="w-full max-w-md md:max-w-lg lg:max-w-xl object-contain"
      />

      {/* Button */}
      <Link
        to="/"
        className="btn btn-primary mt-6 w-full sm:w-auto text-sm sm:text-base"
      >
        Go Back Home
      </Link>
    </div>
  );
};

export default ErrorPage;
