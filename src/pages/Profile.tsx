import React from "react";
import Button from "@mui/material/Button";
import LogoutIcon from "@mui/icons-material/Logout";
import gigachad from "../assets/gigachad.png";
import EditIcon from "@mui/icons-material/Edit";
import BasicModal from "../components/BasicModal";

function Profile({ user }) {
  return (
    <div className="flex p-10 justify-center items-center ">
      <div
        className=" w-[90%] rounded-2xl bg-white flex flex-col justify-center items-center gap-10 py-10"
        style={{ boxShadow: "0px 5px 10px 0px rgba(0, 0, 0, 0.5)" }}
      >
        <div className="w-[95%] flex justify-center items-center border-b-2 border-black pb-5">
          <div>
            <p className="text-4xl uppercase font-bold">
              User{" "}
              <span className="text-4xl uppercase font-bold text-[#FBBC05]">
                profile
              </span>
            </p>
          </div>
        </div>
        <div className="w-[90%] flex flex-col gap-4 justify-center items-center border-b-2 border-gray-300  pb-5">
          <div className="h-[20rem] w-[20rem] rounded-full bg-[#E6AF2E]">
            <img src={gigachad} alt="" className="rounded-full" />
          </div>
          <div className="flex flex-col justify-center items-center">
            <p className="font-bold text-3xl ">{user.name}</p>
            <p>{user.job}</p>
          </div>
        </div>
        <div className="  w-[70rem] p-2 flex flex-col items-center justify-center gap-4">
          <div className="grid grid-cols-2 grid-rows-3 grid-flow-row gap-10 p-5 w-full border-b-2 border-gray-300">
            <div className="flex items-center gap-4">
              <p className="font-semibold text-xl w-[10rem]">First Name: </p>
              <input
                value={user.name.split(" ")[0]}
                readOnly
                className="border-2 border-gray-200  p-4 rounded-lg w-full"
              />
            </div>
            <div className="flex items-center gap-4">
              <p className="font-semibold text-xl w-[10rem]">Last Name: </p>
              <input
                value={user.name.split(" ")[1]}
                readOnly
                className="border-2 border-gray-200  p-4 rounded-lg w-full"
              />
            </div>
            <div className="flex items-center gap-4 relative">
              <p className="font-semibold text-xl w-[10rem]">Password: </p>
              <div className="relative w-full">
                <input
                  placeholder="******"
                  className="border-2 border-gray-200 p-4 rounded-lg w-full"
                />
                <div className="absolute right-4 top-1/2 transform -translate-y-1/2">
                  <BasicModal type={"password"} />
                </div>
              </div>
            </div>
            <div className="flex items-center gap-4 relative">
              <p className="font-semibold text-xl w-[10rem]">
                Contact Number:{" "}
              </p>
              <div className="relative w-full">
                <input
                  placeholder="+63"
                  className="border-2 border-gray-200 p-4 rounded-lg w-full"
                />
                <div className="absolute right-4 top-1/2 transform -translate-y-1/2">
                  <BasicModal type={"contact"} />
                </div>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <p className="font-semibold text-xl w-[10rem]">Email: </p>
              <input
                value={user.email}
                readOnly
                className="border-2 border-gray-200  p-4 rounded-lg w-full"
              />
            </div>
          </div>
          <Button
            variant="contained"
            endIcon={<LogoutIcon />}
            style={{ backgroundColor: "#282F44", padding: "1rem" }}
          >
            Logout
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Profile;
