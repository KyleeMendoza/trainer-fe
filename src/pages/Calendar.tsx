import React from "react";
import CalendarScheduler from "../components/CalendarScheduler";

function Calendar() {
  return (
    <div className=" ">
      <div className="w-full py-5 flex flex-col gap-5 justify-center items-center ">
        <p className="text-4xl uppercase font-bold">
          calendar <span className="text-[#E6AF2E]">scheduler</span>
        </p>
        <div
          className="w-[80%] p-5 bg-white rounded-xl  shadow-2xl"
          style={{ boxShadow: "0px 5px 10px 0px rgba(0, 0, 0, 0.5)" }}
        >
          <CalendarScheduler />
        </div>
      </div>
    </div>
  );
}

export default Calendar;
