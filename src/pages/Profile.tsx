import React from "react";
import Button from "@mui/material/Button";
import LogoutIcon from "@mui/icons-material/Logout";

function Profile() {
  return (
    <div className=" ">
      <div className="border-2 border-green-600 flex flex-col justify-center items-center gap-10 py-10">
        <div className=" w-[95%]  border-b-2 border-black pb-5">
          <p className="text-3xl uppercase font-bold">
            User{" "}
            <span className="text-3xl uppercase font-bold text-[#FBBC05]">
              profile
            </span>
          </p>
        </div>
        <div className="w-[90%] flex flex-col gap-4 justify-center items-center border-b-2 border-gray-300  pb-5">
          <div className="h-[20rem] w-[20rem] rounded-full bg-[#E6AF2E]"></div>
          <div className="flex flex-col justify-center items-center">
            <p className="font-bold text-3xl ">Peter Roosevelt</p>
            <p>Licensed Trainer</p>
          </div>
        </div>
        <div className="  w-[80rem] p-2 flex flex-col items-center justify-center gap-4">
          <div className="grid grid-cols-2 grid-rows-3 grid-flow-row gap-10 p-5 w-full border-b-2 border-gray-300">
            <div className="flex items-center gap-4">
              <p className="font-semibold text-lg">First Name: </p>
              <input
                placeholder="Peter"
                className="border-2 border-gray-200  p-4 rounded-lg w-[70%]"
              />
            </div>
            <div className="flex items-center gap-4">
              <p className="font-semibold text-lg">Last Name: </p>
              <input
                placeholder="Parker"
                className="border-2 border-gray-200  p-4 rounded-lg w-[70%]"
              />
            </div>
            <div className="flex items-center gap-4">
              <p className="font-semibold text-lg">Password: </p>
              <input
                placeholder="********"
                className="border-2 border-gray-200  p-4 rounded-lg w-[70%]"
              />
            </div>
            <div className="flex items-center gap-4">
              <p className="font-semibold text-lg">Contact No.: </p>
              <input
                placeholder="xxx-xxxx-xxxx"
                className="border-2 border-gray-200  p-4 rounded-lg w-[70%]"
              />
            </div>
            <div className="flex items-center gap-4">
              <p className="font-semibold text-lg">Email: </p>
              <input
                placeholder="Peter"
                className="border-2 border-gray-200  p-4 rounded-lg w-[70%]"
              />
            </div>
          </div>
          <Button variant="contained" endIcon={<LogoutIcon />}>
            Logout
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Profile;
