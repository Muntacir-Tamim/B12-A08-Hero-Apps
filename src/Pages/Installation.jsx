import React, { useState } from "react";
import AppError from "../assets/App-Error.png";
import Download_icon from "../assets/icon-downloads.png";
import Rating_icon from "../assets/icon-ratings.png";
import Review_icon from "../assets/icon-review.png";
import {
  loadInstallation,
  removeFromInstallation,
} from "../Utils/localStorage";
import { toast } from "react-toastify";

const Installation = () => {
  const [Installation, setInstallation] = useState(() => loadInstallation());
  const [sortOrder, setSortOrder] = useState("none");

  if (!Installation.length) {
    return (
      <div className="flex flex-col justify-center items-center px-6">
        <h2 className="text-xl font-semibold mb-2">
          Your Installation is empty!
        </h2>
        <p className="text-gray-500 mb-4">Add your favorite Apps here.</p>
      </div>
    );
  }

  const sortedItem = (() => {
    if (sortOrder === "size-asc") {
      return [...Installation].sort((a, b) => a.size - b.size);
    } else if (sortOrder === "size-desc") {
      return [...Installation].sort((a, b) => b.size - a.size);
    } else {
      return Installation;
    }
  })();

  const handleRemover = (id) => {
    removeFromInstallation(id);
    setInstallation((prev) => prev.filter((p) => p.id !== id));
    toast.success("Successfully Unstalled");
  };

  return (
    <div className="w-[1220px] max-w-full mx-auto px-4 md:px-6">
      {/* ---------- Header ---------- */}
      <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-4 mb-8">
        <h1 className="text-2xl sm:text-3xl font-semibold">
          <span className="text-lg sm:text-xl text-[#001931]">
            {sortedItem.length} Apps Found
          </span>
        </h1>

        <label className="form-control w-full sm:w-auto max-w-xs">
          <select
            className="select select-bordered w-full"
            value={sortOrder}
            onChange={(e) => setSortOrder(e.target.value)}
          >
            <option value="none">Sort by size</option>
            <option value="size-asc">Low → High</option>
            <option value="size-desc">High → Low</option>
          </select>
        </label>
      </div>

      {/* ---------- Installed Apps List ---------- */}
      <div className="space-y-3">
        {sortedItem.map((p) => (
          <div
            key={p.id}
            className="card card-side bg-base-100 shadow flex flex-col sm:flex-row"
          >
            {/* Image */}
            <figure className="w-full sm:w-auto">
              <img
                className="w-full sm:w-40 h-40 sm:h-28 object-cover p-3"
                src={p.image}
                alt={p.name}
              />
            </figure>

            {/* Details Section */}
            <div className="flex flex-col sm:flex-row justify-between items-center sm:items-start flex-1 px-3 sm:px-0">
              <div className="card-body p-3 sm:p-4 text-center sm:text-left">
                <h3 className="card-title text-base sm:text-lg mb-2">
                  {p.title} : {p.companyName}
                </h3>

                <div className="flex flex-wrap justify-center sm:justify-start items-center gap-4 sm:gap-5">
                  {/* Downloads */}
                  <div className="flex items-center gap-1">
                    <img className="w-4" src={Download_icon} alt="downloads" />
                    <p className="font-medium text-[#00D390]">{p.downloads}</p>
                  </div>

                  {/* Reviews */}
                  <div className="flex items-center gap-1">
                    <img className="w-4" src={Rating_icon} alt="reviews" />
                    <p className="font-medium text-[#00D390]">{p.reviews}</p>
                  </div>

                  {/* Size */}
                  <div className="flex items-center gap-1">
                    <img className="w-4" src={Review_icon} alt="size" />
                    <p className="font-medium text-[#00D390]">{p.size} MB</p>
                  </div>
                </div>
              </div>

              {/* Button */}
              <div className="pb-4 sm:pb-0">
                <button
                  onClick={() => handleRemover(p.id)}
                  className="btn bg-[#00D390] text-[#FFFFFF] w-full sm:w-auto sm:mr-4"
                >
                  Unstall
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Installation;
