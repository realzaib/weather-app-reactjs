import React from "react";
import Rain from "../assets/rain.png";

const Highlites = ({ data }) => {
  return (
    <div className="flex flex-col mt-8 ">
      <h1 className="text-3xl font-bold mb-4 ml-4">Today's Headline</h1>{" "}
      <div className="flex justify-center items-center space-y-4 space-x-6  md:justify-start flex-col md:flex-row    bg-blue-300 shadow-sm rounded-3xl py-6 px-4 md:space-x-3">
        <div className=" ml-6 mt-3 flex flex-col justify-evenly items-center p-3 h-48 md:w-36 w-64 bg-blue-200 shadow-md rounded-3xl ">
          <span className="text-2xl -mb-4">Pressure</span>
          <img className="w-24 h-24 my-2" src={Rain} alt="" />
          {data.main ? (
            <span className="text-xl">{data.main.pressure} mb</span>
          ) : null}
        </div>
        <div className="flex flex-col justify-evenly items-center p-3 h-48 md:w-36 w-64 bg-blue-200 shadow-md rounded-3xl">
          <span className="text-2xl -mb-4">Humidity</span>
          <img className="w-24 h-24 my-2" src={Rain} alt="" />
          {data.main ? (
            <span className="text-xl">{data.main.humidity}%</span>
          ) : null}
        </div>
        <div className="flex flex-col justify-evenly items-center p-3 h-48 md:w-36 w-64 bg-blue-200 shadow-md rounded-3xl">
          <span className="text-2xl -mb-4">Wind</span>
          <img className="w-24 h-24 my-2" src={Rain} alt="" />
          {data.wind ? (
            <span className="text-xl">{data.wind.speed}km/h</span>
          ) : null}
        </div>
        <div className="flex flex-col justify-evenly items-center p-3 h-48 md:w-36 w-64 bg-blue-200 shadow-md rounded-3xl">
          <span className="text-2xl -mb-4">Temp Max</span>
          <img className="w-24 h-24 my-2" src={Rain} alt="" />
          <span className="text-xl">
            {data.main ? data.main.temp_max : ""}
            <sup>°</sup>
          </span>
        </div>
        <div className="flex flex-col justify-evenly items-center p-3 h-48 md:w-36 w-64 bg-blue-200 shadow-md rounded-3xl">
          <span className="text-2xl -mb-4">Temp Min</span>
          <img className="w-24 h-24 my-2" src={Rain} alt="" />
          <span className="text-xl">
            {data.main ? data.main.temp_min : ""}
            <sup>°</sup>{" "}
          </span>
        </div>
        <div className="flex flex-col justify-evenly items-center p-3 h-48 md:w-36 w-64 bg-blue-200 shadow-md rounded-3xl">
          <span className="text-2xl -mb-4">Cloud</span>
          <img className="w-24 h-24 my-2" src={Rain} alt="" />
          <span className="text-xl">
            {data.clouds ? `${data.clouds.all}%` : ""}
          </span>
        </div>
        <div className="flex flex-col justify-evenly items-center p-3 h-48 md:w-36 w-64 bg-blue-200 shadow-md rounded-3xl">
          <span className="text-2xl -mb-4">Visibility</span>
          <img className="w-24 h-24 my-2" src={Rain} alt="" />
          <span className="text-xl">
            {data.visibility ? `${data.visibility}LED` : ""}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Highlites;
