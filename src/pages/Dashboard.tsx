import React from "react";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import Box from "@mui/material/Box";
import LinearProgress from "@mui/material/LinearProgress";
import gigachad from "../assets/gigachad.png";

function Dashboard({ user }) {
  return (
    <div className="flex  ">
      <div
        className=" flex bg-white flex-col gap-10 py-7 px-4"
        style={{ boxShadow: "0px 5px 10px 0px rgba(0, 0, 0, 0.5)" }}
      >
        <div className=" flex justify-center items-center gap-5">
          <div>
            <AccountCircleIcon fontSize="large" />
          </div>
          <div className="flex flex-col justify-center items-center">
            <p className="font-bold text-xl">{user.name}</p>
            <p>Licensed Trainer</p>
          </div>
        </div>
        <div className="flex flex-col gap-4 justify-center items-center">
          <div className="w-[20rem] h-[20rem] rounded-full bg-gray-400">
            <img src={gigachad} alt="icon" className="rounded-full" />
          </div>
          <div className="flex flex-col justify-center items-center">
            <p className="font-bold text-4xl">{user.name}</p>
            <p className="text-lg">{user.job}</p>
          </div>
        </div>
        <div className="flex flex-col gap-6 ">
          <div>
            <p className="text-2xl font-bold">
              Appointments <span className="text-[#E6AF2E]">Calendar</span>
            </p>
          </div>
          <div className="flex flex-col">
            {user.appointments.map((appointment, key) => (
              <div className="h-[10rem] w-[25rem]  " key={key}>
                <div className="h-full py-2 flex gap-4 border-b-2 border-black">
                  <div className="flex flex-col p-2 rounded-lg h-[4rem] bg-white justify-center items-center shadow-2xl">
                    <p className="text-[#E6AF2E] font-bold text-lg">
                      {appointment.day}
                    </p>
                    <p className="font-bold">2</p>
                  </div>
                  <div className="flex flex-col justify-between">
                    <div className="flex flex-col">
                      <p className="font-bold text-2xl">{appointment.title}</p>
                      <p className="text-xl">{appointment.name}</p>
                    </div>
                    <div className="flex flex-col">
                      <p>{appointment.date} </p>
                      <p>{appointment.time}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="flex-1">
        <div className="h-full flex flex-col items-center gap-8 px-10 py-5 shadow-2xl">
          <div className="flex justify-between items-center  w-full ">
            <div>
              <p className="text-4xl font-bold">Dashboard</p>
              <p className="text-md font-semibold">
                Hello, <span>{user.name}!</span>
              </p>
            </div>
            <p>June 28, 2024</p>
          </div>
          <div
            className="w-full  text-white bg-[#282F44] rounded-xl flex flex-col justify-center items-center p-8 gap-4"
            style={{ boxShadow: "0px 5px 10px 0px rgba(0, 0, 0, 0.5)" }}
          >
            <div className="flex justify-between items-center w-full">
              <p className="text-xl font-bold">
                Your Training Program Progress!
              </p>
              <p>View All </p>
            </div>
            <div className="flex gap-4 ">
              {user.program.map((program, key) => (
                <div
                  className="h-[18rem] w-[20rem] flex flex-col justify-center items-center gap-3 bg-white text-black rounded-xl"
                  key={key}
                >
                  <p className="text-[2.2rem] font-semibold italic">
                    {program.name}
                  </p>
                  <p className="text-[2.2rem] font-bold text-[#E6AF2E]">
                    {program.title}
                  </p>
                  <div className="flex flex-col justify-center items-center font-semibold text-xl">
                    <p>
                      Total of <span>{program.session}</span> sessions
                    </p>
                    <p>{program.date}</p>
                  </div>
                  <Box sx={{ width: "90%" }}>
                    {/* Adjust the height value to make the progress bar thicker */}
                    <LinearProgress
                      style={{
                        height: 20,
                        borderRadius: "10rem",
                        backgroundColor: "#282F44",
                      }}
                    />
                  </Box>
                </div>
              ))}
            </div>
          </div>
          <div
            className="w-[90%]  text-white bg-[#282F44] rounded-xl flex flex-col justify-center items-start p-5 gap-4"
            style={{ boxShadow: "0px 5px 10px 0px rgba(0, 0, 0, 0.5)" }}
          >
            <div className="flex justify-between items-center w-full">
              <p className="text-xl font-bold">Activity Feed</p>
            </div>
            <div className="flex flex-col gap-4 items-start">
              {user.feed.map((feed, key) => (
                <div
                  className="flex justify-center items-center gap-3"
                  key={key}
                >
                  <div className="h-16 w-16 rounded-full bg-white border-2 border-[#E6AF2E]">
                    <img src={gigachad} alt="" className="rounded-full" />
                  </div>
                  <div className="flex flex-col">
                    <p className="text-xl font-bold">{feed.event}</p>
                    <p className="text-sm "> {feed.log}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
