import React from "react";
import { Link } from "react-router";
import Download_icon from "../assets/icon-downloads.png";
import Rating_icon from "../assets/icon-ratings.png";

const AppCard = ({ App }) => {
  const { image, title, companyName, downloads, ratingAvg, id } = App;

  return (
    <Link to={`/AppDetails/${id}`}>
      <div className="card bg-base-100 shadow-sm hover:scale-102 transition ease-in-out">
        <div className="p-3">
          {/* Image */}
          <figure className="h-48 w-full overflow-hidden rounded-sm">
            <img
              className="w-full h-full object-cover"
              src={image}
              alt={title}
            />
          </figure>

          {/* Title */}
          <h2 className="card-title mt-2 text-base sm:text-lg text-center sm:text-left">
            {title} : {companyName}
          </h2>

          {/* Downloads & Ratings */}
          <div className="flex justify-between items-center mt-2">
            {/* Downloads */}
            <div className="flex justify-center items-center gap-2 font-medium text-[#00D390] bg-[#F1F5E8] py-1 px-3 rounded-lg">
              <img className="w-4" src={Download_icon} alt="downloads" />
              {downloads}
            </div>

            {/* Ratings */}
            <div className="flex justify-center items-center gap-2 font-medium text-[#FF8811] bg-[#FFF0E1] py-1 px-3 rounded-lg">
              <img className="w-4" src={Rating_icon} alt="rating" />
              {ratingAvg}
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default AppCard;
