import React from "react";
import useApps from "../Hooks/useApps";
import { Link } from "react-router";
import AppCard from "../Components/AppCard";
import SkeletonLoader from "../Components/SkeletonLoader";

const Home = () => {
  const { Apps, loading } = useApps();

  const featuredApps = Apps.slice(0, 8);
  return (
    <div>
      <div>
        <h1 className="text-center font-bold text-3xl mb-3">Trending Apps</h1>
        <p className="text-center mb-8 text-[#627382]">
          Explore All Trending Apps on the Market developed by us
        </p>
      </div>
      {loading ? (
        <SkeletonLoader />
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {featuredApps.map((App) => (
            <AppCard key={App.id} App={App} />
          ))}
        </div>
      )}

      <div className="flex justify-center item-center mt-10 mb-6">
        <Link to="/Apps" className="btn  bg-[#7F5AF0] text-[#FFFFFF] px-8">
          Show All
        </Link>
      </div>
    </div>
  );
};

export default Home;
