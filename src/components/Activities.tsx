import React from "react";
import { Link as NavLink } from "react-router-dom";
import Box from "@mui/material/Box";
import LinearProgress from "@mui/material/LinearProgress";
import ActivityModal from "./ActivityModal";

function Activities({ setShowAlert }) {
  const Actdata = [
    {
      id: 1,
      session: 1,
      program: "Fire Safety Training",
      part: "Introduction (Chapter 1)",
      activity: [
        { id: 1, name: "Understanding the Fire Basics1", status: "On going" },
        { id: 2, name: "Fire Prevention", status: "On going" },
        { id: 3, name: "Emergency Planning", status: "On going" },
      ],
    },
    {
      id: 2,
      session: 2,
      program: "First Aid Workshop",
      part: "Basic Life Support",
      activity: [
        { id: 1, name: "Understanding the Fire Basics2", status: "On going" },
        { id: 2, name: "Fire Prevention", status: "On going" },
        { id: 3, name: "Emergency Planning", status: "On going" },
      ],
    },
    {
      id: 3,
      session: 3,
      program: "Cybersecurity Awareness",
      part: "Password Security",
      activity: [
        { id: 1, name: "Understanding the Fire Basics3", status: "On going" },
        { id: 2, name: "Fire Prevention", status: "On going" },
        { id: 3, name: "Emergency Planning", status: "On going" },
      ],
    },
    {
      id: 4,
      session: 4,
      program: "Time Management Seminar",
      part: "Setting Priorities",
      activity: [
        { id: 1, name: "Understanding the Fire Basics4", status: "On going" },
        { id: 2, name: "Fire Prevention", status: "On going" },
        { id: 3, name: "Emergency Planning", status: "On going" },
      ],
    },
    {
      id: 5,
      session: 5,
      program: "Team Building Retreat",
      part: "Outdoor Activities",
      activity: [
        { id: 1, name: "Understanding the Fire Basics5", status: "On going" },
        { id: 2, name: "Fire Prevention", status: "On going" },
        { id: 3, name: "Emergency Planning", status: "On going" },
      ],
    },
    {
      id: 6,
      session: 6,
      program: "Customer Service Excellence",
      part: "Effective Communication",
      activity: [
        { id: 1, name: "Understanding the Fire Basics6", status: "On going" },
        { id: 2, name: "Fire Prevention", status: "On going" },
        { id: 3, name: "Emergency Planning", status: "On going" },
      ],
    },
  ];

  return (
    <div className="relative flex flex-col justify-center items-center gap-10 px-10 py-10">
      <div className="">
        <p className="text-4xl uppercase font-bold">
          activity <span className="text-[#E6AF2E]">progress</span>
        </p>
      </div>
      <div className="grid grid-cols-3 gap-10 w-[75%]">
        {Actdata.map((data, key) => (
          <div
            className="shadow-xl h-[18rem] flex flex-col  p-5 bg-[#E6AF2E] rounded-xl hover:scale-105 transition ease-in-out"
            style={{ boxShadow: "0px 5px 10px 0px rgba(0, 0, 0, 0.5)" }}
            key={key}
          >
            <div className="h-[20%] border-b-2 mb-2 border-black">
              <p className="italic text-xl capitalize">
                session <span>{data.session}</span>
              </p>
            </div>
            <div className=" flex flex-col gap-2 flex-1 ">
              <div className="flex flex-col justify-center text-center items-center gap-1 flex-1">
                <p className="font-bold text-xl ">{data.program}</p>
                <p className="font-bold text-lg">{data.part}</p>
                <p>
                  Total of <span>{data.activity.length}</span> Activities
                </p>
              </div>
              <div className="flex justify-center items-center">
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
            </div>
            <div className=" flex justify-center items-center">
              <ActivityModal
                session={data.session}
                data={data.activity}
                setShowAlert={setShowAlert}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Activities;
