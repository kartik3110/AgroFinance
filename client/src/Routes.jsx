import React from "react";
import { useRoutes } from "react-router-dom";
import Home from "pages/Home";
import NotFound from "pages/NotFound";
import MainDashboard from "pages/MainDashboard";
import Investments from "pages/Investments";
import Loan from "pages/Loan";
import Services from "pages/Services";
import SettingEditProfile from "pages/SettingEditProfile";
import Login from "pages/Login.jsx";
import Borrow from "pages/Borrow";

const ProjectRoutes = () => {
  let element = useRoutes([
    { path: "home", element: <Login /> },
    { path: "*", element: <NotFound /> },
    {
      path: "/",
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
  ]);

  return element;
};

export default ProjectRoutes;
