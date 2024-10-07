import React from "react";
import { useRoutes } from "react-router-dom";
import NotFound from "pages/NotFound";
import MainDashboard from "pages/MainDashboard";
import Loan from "pages/Loan";
import Services from "pages/Services";
import SettingEditProfile from "pages/SettingEditProfile";
import Login from "pages/Login.jsx";
import Borrow from "pages/Borrow";
import Home from "pages/Home";

const ProjectRoutes = () => {
  let element = useRoutes([
    { path: "/", element: <Home /> },
    { path: "/login", element: <Login /> },
    {
      path: "/dashboard",
      element: <MainDashboard />,
    },
    {
      path: "borrow",
      element: <Borrow />,
    },
    {
      path: "loan",
      element: <Loan />,
    },
    {
      path: "services",
      element: <Services />,
    },
    {
      path: "profile",
      element: <SettingEditProfile />,
    },
    { path: "*", element: <NotFound /> },
  ]);

  return element;
};

export default ProjectRoutes;
