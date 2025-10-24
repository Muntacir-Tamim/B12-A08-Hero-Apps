import AppError from "../assets/App-Error.png";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import useApps from "../Hooks/useApps";
import { updateList, loadInstallation } from "../Utils/localStorage";
import { toast } from "react-toastify";

import Download_icon from "../assets/icon-downloads.png";
import Rating_icon from "../assets/icon-ratings.png";
import Review_icon from "../assets/icon-review.png";
import {
  BarChart,
  Bar,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const AppDetails = () => {
  const { id } = useParams();
  const { Apps, loading } = useApps();
  const [isAdded, setIsAdded] = useState(false);

  const App = Apps.find((p) => p.id === Number(id));

  useEffect(() => {
    const Installation = loadInstallation();
    const alreadyAdded = Installation.some((p) => p.id === Number(id));
    setIsAdded(alreadyAdded);
  }, [id]);

  if (loading) return <p>Loading...</p>;

  if (!App) {
    return (
      <div className="flex flex-col justify-center items-center px-6">
        <img src={AppError} alt="" />
        <h1 className="mt-4 text-4xl font-semibold">Oops, page not found!</h1>
        <p className="mt-3 text-[#627382]">
          The page you are looking for is not available.
        </p>
      </div>
    );
  }

  const {
    image,
    title,
    companyName,
    downloads,
    ratingAvg,
    reviews,
    size,
    ratings,
    description,
  } = App;

  const handleAddToInstallation = () => {
    updateList(App);
    setIsAdded(true);
    toast.success("Added to Installation");
  };

  return (
    <div className="w-[1220px] max-w-full mx-auto px-4 md:px-6">
      {/* ---------- Card Section ---------- */}
      <div className="card-side card flex flex-col lg:flex-row">
        {/* Image */}
        <figure className="w-full lg:w-[35%]">
          <img
            className="h-[250px] w-full object-cover rounded-lg"
            src={image}
            alt={title}
          />
        </figure>

        {/* Content */}
        <div className="ml-0 lg:ml-6 mt-4 lg:mt-0 flex-1">
          <h2 className="font-bold text-2xl mb-2 mt-2 text-[#001931]">
            {title} : {companyName}
          </h2>
          <p>
            Developed by{" "}
            <span className="text-[#9F62F2] font-medium">productive.io</span>
          </p>
          <hr className="text-gray-300 mt-3" />

          {/* Stats */}
          <div className="mt-3 mb-3 grid grid-cols-1 sm:grid-cols-3  gap-6">
            <div className="flex flex-col items-center sm:items-start">
              <img src={Download_icon} alt="" className="sm:ml-4 mb-2" />
              <p className="text-sm text-[#001931]">Downloads</p>
              <h1 className="text-3xl sm:text-4xl font-bold text-[#001931]">
                {downloads}
              </h1>
            </div>

            <div className="flex flex-col items-center sm:items-start">
              <img src={Rating_icon} alt="" className="sm:ml-4 mb-2" />
              <p className="text-sm text-[#001931]">Average Ratings</p>
              <h1 className="text-3xl sm:text-4xl font-bold text-[#001931]">
                {ratingAvg}
              </h1>
            </div>

            <div className="flex flex-col items-center sm:items-start">
              <img src={Review_icon} alt="" className="sm:ml-4 mb-2" />
              <p className="text-sm text-[#001931]">Total Reviews</p>
              <h1 className="text-3xl sm:text-4xl font-bold text-[#001931]">
                {reviews}
              </h1>
            </div>
          </div>

          {/* Button */}
          <button
            onClick={handleAddToInstallation}
            className={`btn w-full sm:w-auto ${
              isAdded
                ? "btn-disabled bg-[#00D390] text-[#FFFFFF]"
                : "bg-[#00D390] text-[#FFFFFF]"
            }`}
            disabled={isAdded}
          >
            {isAdded ? "Installed" : `Install Now (${size} MB)`}
          </button>
        </div>
      </div>

      {/* ---------- Chart Section ---------- */}
      <hr className="mt-10 text-gray-300" />
      <div className="p-0 mt-6">
        <h2 className="font-bold text-xl mb-4 text-[#001931]">
          Ratings Distribution
        </h2>

        {/* Chart container */}
        <div className="flex justify-start items-start">
          <ResponsiveContainer
            width="100%"
            height={250}
            className="sm:h-[300px] lg:w-[80%]"
          >
            <BarChart data={ratings} layout="vertical">
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis type="number" />
              <YAxis dataKey="name" type="category" />
              <Tooltip />
              <Bar dataKey="count" fill="#ff7f2a" name="Total Ratings" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* ---------- Description Section ---------- */}
      <hr className="mt-8 text-gray-300" />
      <div className="mt-4">
        <h1 className="font-semibold text-2xl text-[#001931]">Description</h1>
        <p className="mt-4 text-[#627382] text-justify">{description}</p>
      </div>
    </div>
  );
};

export default AppDetails;
