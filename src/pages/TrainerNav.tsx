import React from "react";
import Container from "@mui/material/Container";

import DashboardIcon from "@mui/icons-material/Dashboard";
import TimelineIcon from "@mui/icons-material/Timeline";
import EventNoteOutlinedIcon from "@mui/icons-material/EventNoteOutlined";
import AccountBoxOutlinedIcon from "@mui/icons-material/AccountBoxOutlined";

function TrainerNav() {
  return (
    <div className="main-container border-2 border-red-600 h-screen">
      <div className="sub-container border-2 border-blue-600 h-full flex flex-col">
        <div className="heade h-[10%] z-10 bg-md-blue"></div>
        <div className="content-container flex h-[80%]">
          <div className="side-nav w-[5%] h-full bg-full-blue flex flex-col gap-2 text-white text-sm capitalize">
            <div className="w-full h-[10%] flex flex-col items-center justify-center border-2 border-white">
              <DashboardIcon style={{ width: "40px", height: "40px" }} />
              <p className="hover:text-goldish">dashboard</p>
            </div>
            <div className="w-full h-[10%] flex flex-col items-center justify-center gap-2 border-2 border-white">
              <TimelineIcon style={{ width: "40px", height: "40px" }} />
              <p className="hover:text-goldish">training</p>
            </div>
            <div className="w-full h-[10%] flex flex-col items-center justify-center gap-2 border-2 border-white">
              <EventNoteOutlinedIcon
                style={{ width: "40px", height: "40px" }}
              />
              <p className="hover:text-goldish">calendar</p>
            </div>
            <div className="w-full h-[10%] flex flex-col items-center justify-center gap-2 border-2 border-white">
              <AccountBoxOutlinedIcon
                style={{ width: "40px", height: "40px" }}
              />
              <p className="hover:text-goldish">profile</p>
            </div>
          </div>
          <div className="content border-2 border-red-600 bg-[#ECECEC] flex-1 overflow-y-auto">
            <div style={{ height: "900px" }}>More content here</div>
          </div>
        </div>
        <div className="foote h-[10%] z-10 bg-md-blue"></div>
      </div>
    </div>
  );
}

export default TrainerNav;
