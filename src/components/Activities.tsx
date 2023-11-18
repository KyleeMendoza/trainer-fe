import React from "react";
import { Link as NavLink } from "react-router-dom";
import Box from "@mui/material/Box";
import LinearProgress from "@mui/material/LinearProgress";

function Activities() {
  const data = [
    {
      session: 1,
      program: "Fire Safety Training",
      part: "Introduction (Chapter 1)",
      total: 3,
    },
    {
      session: 2,
      program: "First Aid Workshop",
      part: "Basic Life Support",
      total: 2,
    },
    {
      session: 3,
      program: "Cybersecurity Awareness",
      part: "Password Security",
      total: 4,
    },
    {
      session: 4,
      program: "Time Management Seminar",
      part: "Setting Priorities",
      total: 2,
    },
    {
      session: 5,
      program: "Team Building Retreat",
      part: "Outdoor Activities",
      total: 5,
    },
    {
      session: 6,
      program: "Customer Service Excellence",
      part: "Effective Communication",
      total: 3,
    },
  ];
  return (
    <div className="relative flex flex-col justify-center items-center gap-10 px-10 py-10">
      <div className="">
        <p className="text-4xl uppercase font-bold">
          appointment <span className="text-[#E6AF2E]">detail</span>
        </p>
      </div>
      <div className="grid grid-cols-3 gap-10 w-[75%]">
        {data.map((data, key) => (
          <NavLink
            to="/training/tables"
            // state={{ title: dataEntry.title }}
            className="shadow-xl h-[18rem] flex flex-col  p-5 bg-[#E6AF2E] rounded-xl hover:scale-105 transition ease-in-out"
            style={{ boxShadow: "0px 5px 10px 0px rgba(0, 0, 0, 0.5)" }}
            key={key}
          >
            <div className="h-[20%] border-b-2 mb-2 border-black">
              <p className="italic text-2xl capitalize">
                session <span>{data.session}</span>
              </p>
            </div>
            <div className=" flex flex-col gap-8">
              <div className="flex flex-col justify-center items-center gap-4">
                <p className="font-bold text-3xl">{data.program}</p>
                <p className="font-bold text-2xl">{data.part}</p>
                <p>
                  Total of <span>{data.total}</span> Activities
                </p>
              </div>
              <div className="flex justify-center items-center">
                <Box sx={{ width: "90%" }}>
                  {/* Adjust the height value to make the progress bar thicker */}
                  <LinearProgress
                    style={{
                      height: 25,
                      borderRadius: "10rem",
                      backgroundColor: "#282F44",
                    }}
                  />
                </Box>
              </div>
            </div>
          </NavLink>
        ))}
      </div>
    </div>
  );
}

export default Activities;
