import React from "react";
import Snow from "../assets/snow.png";

const CoToday = ({ data }) => {
  return (
    <div className="flex mt-8 flex-col  bg-blue-300 shadow-sm rounded-3xl">
      <div className="ml-9 pt-5 space-x-2 ">
        <select
          id="cars"
          className="bg-blue-400 rounded-sm px-2 py-1 text-black shadow-sm"
        >
          <option value="volvo" selected>
            Bahawalpur
          </option>
          <option value="saab">Khanqah Sharif</option>
          <option value="opel">Lahore</option>
          <option value="audi">Islamabad</option>
        </select>
      </div>
      <div className="flex items-center justify-evenly mt-10">
        <img className="h-56 w-56 mb-4" src={Snow} alt="" />
        <div>
        {data.main ? (
                <h1 className="font-bold text-6xl">
                  {data.main.temp}<sup>°C</sup>
                </h1>
              ) : null}
          <br />
          <span className="text-lg font-bold text-black">
            Monday,<span className="text-gray-500"> 15:00</span>
          </span>
        </div>
      </div>
    </div>
  );
};

export default CoToday;
