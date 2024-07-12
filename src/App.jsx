import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./sections/Hero";
import Events from "./sections/Events";
import Schedule from "./sections/Schedule";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./sections/About";
import TinkerBottom from "./sections/TinkerBottom";
import SocialMedia from "./sections/SocialMedia";
import Projects from "./sections/Projects";

function App() {
  return (
    <div className="App flex flex-col justify-center items-center gap-10 lg:gap-4 bg-bg-dark-blue overflow-x-hidden">
      <Navbar />
      <Hero />
      <Events />
      <Schedule />
      <About />
      {window.innerWidth >= 1280 ? <SocialMedia/> : null}
      <TinkerBottom />
    </div>
  );
}

export default App;
