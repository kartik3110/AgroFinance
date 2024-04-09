import React from "react";
import { useRoutes } from "react-router-dom";
import Home from "pages/Home";
import NotFound from "pages/NotFound";
import MainDashboard from "pages/MainDashboard";
import Investments from "pages/Investments";
import Loan from "pages/Loan";
import Services from "pages/Services";
import SettingEditProfile from "pages/SettingEditProfile";

const ProjectRoutes = () => {
  let element = useRoutes([
    { path: "home", element: <Home /> },
    { path: "*", element: <NotFound /> },
    {
      path: "/",
      element: <MainDashboard />,
    },
    {
      path: "investments",
      element: <Investments />,
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
      path: "settingeditprofile",
      element: <SettingEditProfile />,
    },
  ]);

  return element;
};

export default ProjectRoutes;
