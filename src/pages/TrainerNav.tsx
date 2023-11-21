import React, { useEffect, useState } from "react";
import Container from "@mui/material/Container";
import { Link as NavLink, Outlet } from "react-router-dom";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Alert from "@mui/material/Alert";

import Logo from "../assets/logo.png";

import DashboardIcon from "@mui/icons-material/Dashboard";
import TimelineIcon from "@mui/icons-material/Timeline";
import EventNoteOutlinedIcon from "@mui/icons-material/EventNoteOutlined";
import AccountBoxOutlinedIcon from "@mui/icons-material/AccountBoxOutlined";

function TrainerNav({ showAlert, setShowAlert }) {
  const [navigationState, setNavigationState] = useState("dashboard");

  useEffect(() => {
    // Retrieve navigation state on component mount
    const savedNavigationState = localStorage.getItem("navigationState");
    if (savedNavigationState) {
      setNavigationState(savedNavigationState);
    }
  }, []);

  //NAV LINK NAMES
  const linkName = ["Dashboard", "Training", "Calendar", "Profile"];

  //NAV LINKS
  const links = ["/dashboard", "/training", "/calendar", "/profile"];

  const handleNavigationClick = (newState) => {
    // Save the new navigation state in localStorage
    localStorage.setItem("navigationState", newState);
    setNavigationState(newState);
  };

  return (
    <div className="main-container  h-screen relative">
      {showAlert && (
        <div className="w-[15%] absolute top-5 left-[45%] right-1/2 z-20">
          <Alert onClose={() => setShowAlert(false)} severity="success">
            Data successfully saved.
          </Alert>
        </div>
      )}
      <div className="sub-container  h-full flex flex-col">
        <div
          className="heade h-[10%] z-10 bg-md-blue relative"
          style={{ boxShadow: "0px 5px 10px 0px rgba(0, 0, 0, 0.5)" }}
        >
          <div className="absolute top-2 bottom-0 left-5 ">
            <img src={Logo} alt="logo" />
          </div>
        </div>
        <div className="content-container flex h-[90%]">
          <div className="side-nav w-[5%] h-full bg-full-blue  flex flex-col py-5 gap-4 text-white text-sm capitalize">
            {linkName.map((item, index) => (
              <NavLink to={links[index]} key={index} className="">
                <div className="flex flex-col justify-center items-center  hover:text-[#E6AF2E]">
                  {index === 0 ? (
                    <DashboardIcon
                      style={{ fontSize: 50, fontFamily: "Poppins" }}
                      className={`${
                        navigationState === "dashboard"
                          ? "border-[#E6AF2E] border-2"
                          : ""
                      }`}
                      onClick={() => handleNavigationClick("dashboard")}
                    />
                  ) : index === 1 ? (
                    <TimelineIcon
                      style={{ fontSize: 50 }}
                      className={`${
                        navigationState === "training"
                          ? "border-[#E6AF2E] border-2"
                          : ""
                      }`}
                      onClick={() => handleNavigationClick("training")}
                    />
                  ) : index === 2 ? (
                    <EventNoteOutlinedIcon
                      style={{ fontSize: 50 }}
                      className={`${
                        navigationState === "calendar"
                          ? "border-[#E6AF2E] border-2"
                          : ""
                      }`}
                      onClick={() => handleNavigationClick("calendar")}
                    />
                  ) : index === 3 ? (
                    <AccountBoxOutlinedIcon
                      style={{ fontSize: 50 }}
                      className={`${
                        navigationState === "profile"
                          ? "border-[#E6AF2E] border-2"
                          : ""
                      }`}
                      onClick={() => handleNavigationClick("profile")}
                    />
                  ) : null}
                  <p className="text-md ">{item}</p>
                </div>
              </NavLink>
            ))}
          </div>
          <div className="content bg-[#ECECEC] flex-1 overflow-y-auto">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
}

export default TrainerNav;
