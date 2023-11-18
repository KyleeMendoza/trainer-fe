import React from "react";
import { Link as NavLink } from "react-router-dom";

function Training() {
  const trainingData = [
    {
      date: "11/07/23",
      time: "07:30 PM",
      sessions: "6 sessions",
      title: "Data 1",
      trainer: "Mr. Peter Roosevelt",
      role: "Trainer",
      courseID: "00000001",
    },
    {
      date: "11/07/23",
      time: "07:30 PM",
      sessions: "6 sessions",
      title: "Data 2",
      trainer: "Mr. Peter Roosevelt",
      role: "Trainer",
      courseID: "00000001",
    },
    {
      date: "11/07/23",
      time: "07:30 PM",
      sessions: "6 sessions",
      title: "Data 3",
      trainer: "Mr. Peter Roosevelt",
      role: "Trainer",
      courseID: "00000001",
    },
    {
      date: "11/07/23",
      time: "07:30 PM",
      sessions: "6 sessions",
      title: "Data 4",
      trainer: "Mr. Peter Roosevelt",
      role: "Trainer",
      courseID: "00000001",
    },
    {
      date: "11/07/23",
      time: "07:30 PM",
      sessions: "6 sessions",
      title: "Data 5",
      trainer: "Mr. Peter Roosevelt",
      role: "Trainer",
      courseID: "00000001",
    },
    {
      date: "11/07/23",
      time: "07:30 PM",
      sessions: "6 sessions",
      title: "Data 6",
      trainer: "Mr. Peter Roosevelt",
      role: "Trainer",
      courseID: "00000001",
    },
  ];
  return (
    <div className="">
      <div className="relative flex flex-col justify-center items-center gap-10 px-10 py-10">
        <div className="">
          <p className="text-4xl uppercase font-bold">
            appointment <span className="text-[#E6AF2E]">detail</span>
          </p>
        </div>
        <div className="grid grid-cols-3 gap-10 w-[75%]">
          {trainingData.map((dataEntry, index) => (
            <NavLink
              key={index}
              to="/training/tables"
              state={{ title: dataEntry.title }}
              className="shadow-xl h-[20rem] flex flex-col justify-between p-5 bg-[#E6AF2E] rounded-xl hover:scale-105 transition ease-in-out"
              style={{ boxShadow: "0px 5px 10px 0px rgba(0, 0, 0, 0.5)" }}
            >
              <div className="flex justify-between">
                <p className="font-bold">{dataEntry.date}</p>
                <p className="font-bold">{dataEntry.time}</p>
              </div>
              <div className="flex flex-col justify-center items-center gap-4">
                <p className="text-2xl font-semibold italic">
                  {dataEntry.sessions}
                </p>
                <p className="text-3xl font-bold">{dataEntry.title}</p>
                <div className="flex flex-col justify-center items-center">
                  <p>{dataEntry.trainer}</p>
                  <p>{dataEntry.role}</p>
                </div>
              </div>
              <div>
                <p className="font-semibold">Course ID: {dataEntry.courseID}</p>
              </div>
            </NavLink>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Training;
