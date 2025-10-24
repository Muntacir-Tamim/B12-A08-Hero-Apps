import React from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import { Outlet, useLocation } from "react-router";
import { ToastContainer } from "react-toastify";
import Banner from "../Components/Banner";
import { useNavigation } from "react-router";
import { BallTriangle } from "react-loader-spinner";

const MainLayout = () => {
  const location = useLocation();

  const navigation = useNavigation();
  const isNavigating = navigation.state === "loading";

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar></Navbar>

      {isNavigating && (
        <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex justify-center items-center z-50">
          <BallTriangle
            height={100}
            width={100}
            radius={5}
            color="#7F5AF0"
            ariaLabel="ball-triangle-loading"
            visible={true}
          />
        </div>
      )}

      {location.pathname === "/" && <Banner />}
      <div className="bg-gray-200 flex-1">
        <div className=" w-11/12 mx-auto py-8 ">
          <Outlet></Outlet>
        </div>
      </div>
      <Footer></Footer>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
    </div>
  );
};

export default MainLayout;
