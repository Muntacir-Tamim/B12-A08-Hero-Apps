import { createBrowserRouter } from "react-router";
import MainLayout from "../Layout/MainLayout";
import ErrorPage from "../Pages/ErrorPage";
import SkeletonLoader from "../Components/SkeletonLoader";

import Apps from "../Pages/Apps";
import Installation from "../Pages/Installation";
import AppDetails from "../Pages/AppDetails";
import Home from "../Pages/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    hydrateFallbackElement: <SkeletonLoader />,
    children: [
      {
        path: "/",

        element: <Home />,
      },
      {
        path: "/Apps",
        element: <Apps />,
      },
      {
        path: "/Installation",
        element: <Installation />,
      },
      {
        path: "/AppDetails/:id",
        element: <AppDetails />,
      },
    ],
  },
  {
    path: "*",
    element: <ErrorPage />,
  },
]);

export default router;
