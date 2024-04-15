import React from "react";
import { FaMapMarkerAlt } from "react-icons/fa";

function Card(data) {
  return (
    <div className="bg-white lg:border-b-2 px-2 lg:border-gray-300 lg:flex-row flex-col  lg:w-3/5 w-full h-fit lg:h-64 flex items-center">
      <img className="lg:h-5/6 lg:w-1/4 h-2/6 w-5/6 rounded-lg flex" src={data.image} alt="" />
      <div className="flex flex-col h-full lg:px-4 lg:gap-0 gap-4 py-5 w-5/6 justify-around">
        <div className="flex flex-col gap-1">
          <div className="flex gap-4 items-center">
            <span className="flex items-center text-base gap-1">
              <FaMapMarkerAlt />
              {data.country}
            </span>
            <a className="text-sm underline cursor-pointer text-[#ada4a4] ">
              View on Google Maps
            </a>
          </div>
          <h1 className="lg:text-3xl text-2xl font-bold">{data.location}</h1>
        </div>
        <div className="flex flex-col gap-1">
          <span className="font-semibold text-[#423f3f]">{data.date}</span>
          <p className="text-base">{data.desc}</p>
        </div>
      </div>
    </div>
  );
}

export default Card;
