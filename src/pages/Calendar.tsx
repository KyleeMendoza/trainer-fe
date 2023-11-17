import React from "react";

function Calendar() {
  return (
    <div className=" border-2 border-red-600">
      <div className="border-2 border-green-600 flex flex-col justify-center items-center gap-10 py-10">
        <div className="flex flex-col gap-4">
          <p className="text-4xl uppercase font-bold">
            your{" "}
            <span className="text-4xl uppercase font-bold text-[#FBBC05]">
              calendar
            </span>
          </p>
          <div className="h-[45rem] w-[80rem] bg-[#E6AF2E] rounded-2xl shadow-lg"></div>
        </div>
      </div>
    </div>
  );
}

export default Calendar;
