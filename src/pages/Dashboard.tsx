import React from "react";

function Dashboard() {
  return (
    <div className="  flex justify-center">
      <div className=" w-[50%] flex flex-col items-center gap-10 p-10 shadow-2xl ">
        <div className="flex justify-between items-center  w-full">
          <div>
            <p className="text-4xl font-bold">Dashboard</p>
            <p className="text-md font-semibold">Hello, Peter Roosvelt</p>
          </div>
          <p>June 28, 2024</p>
        </div>
        <div className=" text-white bg-[#282F44] rounded-xl flex flex-col justify-center items-center p-5 gap-4">
          <div className="flex justify-between items-center w-full">
            <p className="text-xl font-bold">Your Training Program Progress!</p>
            <p>View All </p>
          </div>
          <div className="flex gap-4 ">
            <div className="h-[15rem] w-[15rem] bg-white rounded-xl"></div>
            <div className="h-[15rem] w-[15rem] bg-white rounded-xl"></div>
            <div className="h-[15rem] w-[15rem] bg-white rounded-xl"></div>
          </div>
        </div>
        <div className="w-[90%]  text-white bg-[#282F44] rounded-xl flex flex-col justify-center items-start p-5 gap-4">
          <div className="flex justify-between items-center w-full">
            <p className="text-xl font-bold">Activity Feed</p>
          </div>
          <div className="flex flex-col gap-4 ">
            <div className="flex justify-center items-center gap-3">
              <div className="h-16 w-16 rounded-full bg-white"></div>
              <div className="flex flex-col">
                <p className="text-xl font-bold">
                  You recently change your password
                </p>
                <p className="text-sm ">10mins ago</p>
              </div>
            </div>
            <div className="flex justify-center items-center gap-3">
              <div className="h-16 w-16 rounded-full bg-white"></div>
              <div className="flex flex-col">
                <p className="text-xl font-bold">
                  You recently change your password
                </p>
                <p className="text-sm ">10mins ago</p>
              </div>
            </div>
            <div className="flex justify-center items-center gap-3">
              <div className="h-16 w-16 rounded-full bg-white"></div>
              <div className="flex flex-col">
                <p className="text-xl font-bold">
                  You recently change your password
                </p>
                <p className="text-sm ">10mins ago</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
