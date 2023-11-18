import React, { useState } from "react";
import Container from "@mui/material/Container";
import { Link as NavLink, Outlet } from "react-router-dom";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";

import Logo from "../assets/logo.png";

import DashboardIcon from "@mui/icons-material/Dashboard";
import TimelineIcon from "@mui/icons-material/Timeline";
import EventNoteOutlinedIcon from "@mui/icons-material/EventNoteOutlined";
import AccountBoxOutlinedIcon from "@mui/icons-material/AccountBoxOutlined";

function TrainerNav() {
  //NAV LINK NAMES
  const linkName = ["Dashboard", "Training", "Calendar", "Profile"];

  //NAV LINKS
  const links = ["/dashboard", "/training", "/calendar", "/profile"];

  return (
    <div className="main-container  h-screen ">
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
                    />
                  ) : index === 1 ? (
                    <TimelineIcon style={{ fontSize: 50 }} />
                  ) : index === 2 ? (
                    <EventNoteOutlinedIcon style={{ fontSize: 50 }} />
                  ) : index === 3 ? (
                    <AccountBoxOutlinedIcon style={{ fontSize: 50 }} />
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
