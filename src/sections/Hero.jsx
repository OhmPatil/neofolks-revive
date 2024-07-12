import React from "react";
import "../styles/hero.css";
import NeofolksHero from "../assets/NeofolksHero.webp";
// import TinkerthonArrow from '../assets/TinkerthonArrow.png'
import NUVlogo from "../assets/NUVlogo.webp";
import Nuvyuvalogo from "../assets/Nuvyuvalogo.webp";
import SSIPLogo from "../assets/SSIPLogo.png";
import RegisterModal from "../components/RegisterModal";
import Bulb from "../assets/Bulb.webp";
import EyeIcon from "../assets/icons/EyeIcon.svg";
import { HashLink } from "react-router-hash-link";
import RegisterNowButton from "../components/RegisterNowButton";
import { useNavigate } from "react-router-dom";

function Hero() {
  const navigate = useNavigate();

  return (
    <div
      className="relative w-full min-h-[80svh] lg:min-h-[95svh] bg-bg-dark-blue flex flex-col justify-start items-center section"
      id="home"
    >
      {/* BG PAPER goes here */}
      {/* <img src="../assets/BigBGPaper.png" className="absolute bg-cover" id='bg' alt="" /> */}

      {/* NUV and NUVyuva imgs */}
      <div className="w-full flex justify-between items-center p-2">
        <div className="flex justify-center items-center">
          <img src={NUVlogo} className="max-w-[100px] lg:max-w-none" alt="" />
          <img
            src={SSIPLogo}
            className="max-w-[50px] lg:max-w-[120px]"
            alt=""
          />
        </div>
        <img src={Nuvyuvalogo} className="max-w-[50px] lg:max-w-none" alt="" />
      </div>

      {/* Neofolks hero title img */}
      <img
        src={NeofolksHero}
        className="w-[95%] max-w-[800px]"
        alt="neofolks hero"
      />

      {/* Parent div for buttons and hero text */}
      <div className="relative flex flex-col items-center gap-6 mt-4">
        {/* Tinkerthon arrow img */}
        {/* <div className="w-[90%]"> */}
        {/* <img src={TinkerthonArrow} className="absolute top-[-10%] left-0 max-w-[125px] md:max-w-none" alt="" /> */}
        {/* </div> */}

        {/* Buttons */}
        <div className="w-full flex flex-wrap gap-1 justify-center items-center space-x-4">
          {/* <div onClick={() => navigate('/projects')}> */}
          {/* <RegisterNowButton text={"View Projects"}/> */}
          {/* <RegisterModal/> */}
          <RegisterNowButton link="/projects" text="View Projects" />
          {/* </div> */}
          <HashLink to={"#events"} smooth>
            <button className="bg-[#232323] py-2 px-4 rounded-3xl text-white hover:invert font-semibold cursor-pointer flex justify-center items-center gap-1 text-sm md:text-base">
              <img src={EyeIcon} alt="" />
              <h3>View Events</h3>
            </button>
          </HashLink>
        </div>
        {/* Hero Text */}
        <div className="md:w-1/2 md:max-w-[1000px] px-2 md:px-0 pb-10">
          <p className="text-white text-center text-lg md:text-xl">
            Are you ready for an unforgettable experience! Join us at
            Tinkerthon, where you'll have the opportunity to connect with
            aspiring individuals, participate in interactive sessions, and hear
            from industry experts. This event is designed to inspire and unlock
            your inner innovator.
          </p>
          {/* <p className="text-white text-center text-md md:text-xl">
            Whether you're interested in learning new skills, networking with peers, or simply having fun, Tinkerthon has something for everyone. So don't miss out on this chance to grow and discover new opportunities. Register now and be a part of this exciting 36 hour event!
            </p> */}
        </div>
      </div>

      {/* Lightbulb design element */}
      <img
        src={Bulb}
        className="absolute w-1/4 left-0 bottom-[-30%] hidden lg:block z-10"
        alt=""
      />
      <div className="absolute w-1/4 aspect-square rounded-full bottom-[-25%] left-[-5%] bg-[#F66902] blur-3xl opacity-[.15] hidden lg:block"></div>
    </div>
  );
}

export default Hero;
