import React from "react";
import TinkerthonBigboi from "../assets/TinkerthonBig.webp";
import TinkerthonSmol from "../assets/TinkerthonSmall.webp";
import NeofolksSmol from "../assets/NeofolksSmall.webp";
import RegisterModal from "../components/RegisterModal";

function TinkerBottom() {
  return (
    <div
      className="relative h-fit min-h-[500px] w-full text-white flex flex-col items-center gap-10 px-2 md:mt-10"
    >
      {/* Tinkerthon bigboi image */}
      <img src={TinkerthonBigboi} className="w-[95%] max-w-[800px]" alt="" />

      {/* Register text */}
      <div className="w-full lg:w-1/2 flex flex-col gap-4 justify-center items-center">
        <h1 className="text-center text-4xl md:text-6xl font-['familjen_grotesk'] font-semibold">
          Register Now for Tinkerthon
        </h1>
        {/* <p className='text-center md:text-xl text-[#959499]'>Add collaborative experiences you know and love like text editors, forms, creative tools and whiteboards with Liveblocks APIs and tools.</p> */}
      </div>

      {/* Register button */}
      <RegisterModal />

      {/* TODO Map location stuff */}

      {/* Address */}
      <div className="text-white font-medium text-center text-lg flex flex-col gap-3 justify-center items-center">
        <h3>
          Address: Navrachana University, Vasna-Bhayli main road, Vadodara,
          Gujarat 391410
        </h3>
        <a href="https://goo.gl/maps/5nXG94rjNqvzNKgB7" target="_blank">
          <button className="bg-[#232323] p-2 px-6 rounded-3xl text-white hover:bg-[#afafaf] hover:text-black font-semibold text-sm md:text-base cursor-pointer">
            Open in Google Maps
          </button>
        </a>
      </div>

      {/* Footer images neofolks & tinkerthon */}
      <div className="flex w-[95%] justify-between mb-4">
        <div className="max-w-[100px] lg:max-w-[150px]">
          <img src={NeofolksSmol} alt="" />
        </div>
        <div className="max-w-[100px] lg:max-w-[150px] flex justify-center items-center">
          <img src={TinkerthonSmol} alt="" />
        </div>
      </div>
    </div>
  );
}

export default TinkerBottom;
