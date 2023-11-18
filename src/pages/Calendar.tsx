import React from "react";
import CalendarScheduler from "../components/CalendarScheduler";

function Calendar() {
  return (
    <div className=" border-2 border-red-600">
      {/* <div className="border-2 border-green-600 flex flex-col justify-center items-center gap-10 py-10">
        <div className="flex flex-col gap-4">
          <p className="text-4xl uppercase font-bold">
            your{" "}
            <span className="text-4xl uppercase font-bold text-[#FBBC05]">
              calendar
            </span>
          </p>
          <div className="h-[45rem] w-[80rem] bg-[#E6AF2E] rounded-2xl shadow-lg"></div>
        </div>
      </div> */}
      <div className="w-full py-10 flex flex-col gap-5 justify-center items-center border-2 border-green-600">
        <p className="text-4xl uppercase font-bold">
          calendar <span className="text-[#E6AF2E]">scheduler</span>
        </p>
        <div className="w-[80%] p-5 bg-white rounded-xl  shadow-2xl">
          <CalendarScheduler />
        </div>
      </div>
    </div>
  );
}

export default Calendar;
