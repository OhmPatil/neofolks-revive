import React from "react";
import ScheduleImg from '../assets/ScheduleImg.webp'

function Schedule() {
  return (
    <div className="h-fit w-full flex flex-col gap-4 text-white section" id="schedule">
      {/* Title */}
      <div className="w-full flex flex-col justify-center items-center gap-2">
        <h1 className="text-5xl lg:text-7xl font-['MonumentExtended'] text-center heading-gradient">Event Schedule</h1>
        <h2 className="text-lg font-['montserrat']">Mark your calendars</h2>
      </div>

      {/* Divider */}
      <div className="h-[3px] w-1/2 my-4 bg-[#7e7e7e] rounded-md ml-auto mr-auto"></div>

      {/* Schedule image */}
      <div className="w-full h-fit flex justify-center items-center px-4">
        <img src={ScheduleImg} className="w-full md:max-w-[600px] lg:max-w-[850px]" alt="schedule image" />
      </div>
      
    </div>
  );
}

export default Schedule;
