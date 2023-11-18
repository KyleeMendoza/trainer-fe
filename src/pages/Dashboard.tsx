import React from "react";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import Box from "@mui/material/Box";
import LinearProgress from "@mui/material/LinearProgress";

function Dashboard({ user }) {
  return (
    <div className="flex border-2 border-red-600 ">
      <div className="border-r-2 border-black flex bg-white flex-col gap-10 py-2 px-4">
        <div className="border-2 border-blue-600 flex justify-center items-center gap-5">
          <div>
            <AccountCircleIcon fontSize="large" />
          </div>
          <div className="flex flex-col justify-center items-center">
            <p className="font-bold text-xl">{user.name}</p>
            <p>Licensed Trainer</p>
          </div>
        </div>
        <div className="flex flex-col gap-4 justify-center items-center">
          <div className="w-[20rem] h-[20rem] rounded-full bg-gray-400"></div>
          <div className="flex flex-col justify-center items-center">
            <p className="font-bold text-4xl">{user.name}</p>
            <p className="text-lg">{user.job}</p>
          </div>
        </div>
        <div className="flex flex-col gap-6 border-2 border-blue-600">
          <div>
            <p className="text-2xl font-bold">
              Appointments <span className="text-[#E6AF2E]">Calendar</span>
            </p>
          </div>
          <div className="flex flex-col">
            {user.appointments.map((appointment, key) => (
              <div
                className="h-[10rem] w-[25rem]  border-2 border-red-600"
                key={key}
              >
                <div className="h-full py-2 flex gap-4 border-2 border-green-600">
                  <div className="flex flex-col p-2 rounded-lg border-2 border-black h-[4rem] bg-white justify-center items-center">
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
            {/* <div className="h-[10rem] w-[25rem]  border-2 border-red-600">
              <div className="h-full py-2 flex gap-4 border-2 border-green-600">
                <div className="flex flex-col p-2 rounded-lg border-2 border-black h-[4rem] bg-white justify-center items-center">
                  <p className="text-[#E6AF2E] font-bold text-lg">Mon</p>
                  <p className="font-bold">2</p>
                </div>
                <div className="flex flex-col justify-between">
                  <div className="flex flex-col">
                    <p className="font-bold text-2xl">Basic Fire Safety</p>
                    <p className="text-xl">Mr. Peter Roosevelt</p>
                  </div>
                  <div className="flex flex-col">
                    <p>Sep 4th 2023 </p>
                    <p>7:30AM - 11:30AM</p>
                  </div>
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </div>
      <div className="flex-1">
        <div className="h-full flex flex-col items-center gap-10 p-5 shadow-2xl">
          <div className="flex justify-between items-center  w-full border-2 border-red-600">
            <div>
              <p className="text-4xl font-bold">Dashboard</p>
              <p className="text-md font-semibold">
                Hello, <span>{user.name}</span>
              </p>
            </div>
            <p>June 28, 2024</p>
          </div>
          <div className="w-full border-2 border-red-600 text-white bg-[#282F44] rounded-xl flex flex-col justify-center items-center p-5 gap-4">
            <div className="flex justify-between items-center w-full">
              <p className="text-xl font-bold">
                Your Training Program Progress!
              </p>
              <p>View All </p>
            </div>
            <div className="flex gap-4 ">
              {user.program.map((program, key) => (
                <div
                  className="h-[20rem] w-[20rem] flex flex-col justify-center items-center gap-3 bg-white text-black rounded-xl"
                  key={key}
                >
                  <p className="text-[2.2rem] font-semibold italic">
                    {program.name}
                  </p>
                  <p className="text-[2.2rem] font-bold">{program.title}</p>
                  <div className="flex flex-col justify-center items-center font-semibold text-xl">
                    <p>
                      Total of <span>{program.session}</span> sessions
                    </p>
                    <p>{program.date}</p>
                  </div>
                  <Box sx={{ width: "90%" }}>
                    <LinearProgress />
                  </Box>
                </div>
              ))}
            </div>
          </div>
          <div className="w-[90%] border-2 border-red-600 text-white bg-[#282F44] rounded-xl flex flex-col justify-center items-start p-5 gap-4">
            <div className="flex justify-between items-center w-full">
              <p className="text-xl font-bold">Activity Feed</p>
            </div>
            <div className="flex flex-col gap-4 items-start">
              {user.feed.map((feed, key) => (
                <div
                  className="flex justify-center items-center gap-3"
                  key={key}
                >
                  <div className="h-16 w-16 rounded-full bg-white"></div>
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
