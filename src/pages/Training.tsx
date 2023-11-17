import React from "react";

function Training() {
  return (
    <div className=" border-2 border-red-600">
      <div className=" border-2 border-green-600 flex flex-col justify-center items-center gap-10 py-10">
        <div>
          <p className="text-5xl uppercase font-bold">appointment detail</p>
        </div>
        <div className="grid grid-cols-3 grid-rows-2 gap-5">
          <div className="h-[30rem] w-[30rem] bg-[#E6AF2E] rounded-xl"></div>
          <div className="h-[30rem] w-[30rem] bg-[#E6AF2E] rounded-xl"></div>
          <div className="h-[30rem] w-[30rem] bg-[#E6AF2E] rounded-xl"></div>
          <div className="h-[30rem] w-[30rem] bg-[#E6AF2E] rounded-xl"></div>
          <div className="h-[30rem] w-[30rem] bg-[#E6AF2E] rounded-xl"></div>
          <div className="h-[30rem] w-[30rem] bg-[#E6AF2E] rounded-xl"></div>
        </div>
      </div>
    </div>
  );
}

export default Training;
