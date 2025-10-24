import React from "react";
import Hero from "../assets/hero.png";
import play from "../assets/Playsore.png";
import Appstore from "../assets/App_Store.png";

const Banner = () => {
  return (
    <div className="bg-gray-50">
      <div className="w-11/12 mx-auto">
        {/* Heading */}
        <h1 className="text-center font-bold text-3xl sm:text-4xl mt-8 sm:mt-10 leading-tight">
          We Build <br />
          <span className="bg-gradient-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent">
            Productive
          </span>{" "}
          Apps
        </h1>

        {/* Paragraph */}
        <p className="text-[#627382] mt-3 sm:mt-4 text-sm sm:text-[14px] mb-6 text-center px-2 sm:px-0">
          At HERO.IO, we craft innovative apps designed to make everyday life
          simpler, smarter, and more exciting.{" "}
          <br className="hidden sm:block" />
          Our goal is to turn your ideas into digital experiences that truly
          make an impact.
        </p>

        {/* Store buttons */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-3 sm:gap-4 mb-6">
          <a
            href="https://play.google.com/store/games?hl=en"
            target="_blank"
            rel="noreferrer"
            className="btn bg-base-100 flex items-center gap-2 w-[200px] sm:w-auto"
          >
            <img className="w-6 sm:w-8" src={play} alt="Google Play" />
            Google Play
          </a>
          <a
            href=" https://www.apple.com/app-store/"
            target="_blank"
            rel="noreferrer"
            className="btn bg-base-100 flex items-center gap-2 w-[200px] sm:w-auto px-6"
          >
            <img className="w-4 sm:w-5" src={Appstore} alt="App Store" />
            App Store
          </a>
        </div>

        {/* Hero image */}
        <div className="flex justify-center">
          <img
            src={Hero}
            alt="Hero"
            className="w-full max-w-[500px] sm:max-w-[650px]"
          />
        </div>
      </div>

      {/* Gradient Stats Section */}
      <div className="bg-gradient-to-r from-[#632EE3] to-[#9F62F2] mt-8 sm:mt-12">
        <div className="px-4 sm:px-8 text-center py-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-white">
            Trusted By Millions, Built For You
          </h2>

          {/* Stats container */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-8 sm:gap-20 mt-8">
            {/* Stat 1 */}
            <div className="flex flex-col items-center">
              <p className="text-[13px] font-normal text-white mb-1">
                Total Downloads
              </p>
              <p className="text-4xl sm:text-5xl font-bold text-white mb-1">
                29.6M
              </p>
              <p className="text-[13px] text-white">21% More Than Last Month</p>
            </div>

            {/* Stat 2 */}
            <div className="flex flex-col items-center">
              <p className="text-[13px] font-normal text-white mb-1">
                Total Reviews
              </p>
              <p className="text-4xl sm:text-5xl font-bold text-white mb-1">
                906K
              </p>
              <p className="text-[13px] text-white">46% More Than Last Month</p>
            </div>

            {/* Stat 3 */}
            <div className="flex flex-col items-center">
              <p className="text-[13px] font-normal text-white mb-1">
                Active Apps
              </p>
              <p className="text-4xl sm:text-5xl font-bold text-white mb-1">
                132+
              </p>
              <p className="text-[13px] text-white">31 More Will Launch</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
