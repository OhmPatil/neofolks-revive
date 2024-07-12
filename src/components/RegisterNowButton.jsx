import React from "react";
import '../styles/registerButton.css'
import ArrowRight from '../assets/icons/ArrowRight.svg'

function RegisterNowButton({link, text}) {
  return (
    <a href={link ? link : null} target="_blank">
      <button className="bg-[#f7f7f8] py-2 px-4 rounded-3xl font-semibold text-black flex justify-center items-center gap-1 text-sm md:text-base" id="register-button">
        <h3>{text ?? "Register Now"}</h3>
        <img src={ArrowRight} alt="" />
      </button>
    </a>
  );
}

export default RegisterNowButton;
