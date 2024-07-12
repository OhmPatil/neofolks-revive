import React from "react";
import VideoCard from "../components/VideoCard";
import {teams, winningTeams} from "../../videoLinks";

function Projects() {
  const winningBackgrounds = ['bg-yellow-200', 'bg-slate-300', 'bg-yellow-600']
  
  return (
    <div className="flex flex-col justify-center items-center gap-6 bg-bg-dark-blue overflow-x-hidden p-2 py-4">
      {/* Title */}
      <div className="w-full flex flex-col justify-center items-center gap-2">
        <h1 className="text-4xl md:text-7xl font-['MonumentExtended'] text-center heading-gradient">
          Tinkerthon Projects
        </h1>
      </div>
      {/* Winners title */}
      <div className="w-full flex flex-col justify-center items-center">
        <h1 className="text-3xl md:text-6xl font-['MonumentExtended'] text-center heading-gradient border-b-2">
          Winners
        </h1>
      </div>

      {/* Winning Teams */}
      <div className="w-full flex justify-center items-center flex-wrap gap-4 pb-4 border-b-4">
        {winningTeams.map((item, index) => {
          return <VideoCard link={item.videoUrl} name={item.teamName} position={index+1} background={winningBackgrounds[index]}/>
        })}
      </div>

        {/* Teams */}
        <div className="flex justify-center items-center flex-wrap gap-4">
            {teams.map(item => {
                return <VideoCard link={item.videoUrl} name={item.teamName}/>
            })}
        </div>
      
    </div>
  );
}

export default Projects;
