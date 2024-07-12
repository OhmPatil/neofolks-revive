import React from "react";
import { InstagramEmbed } from "react-social-media-embed";

function SocialMedia() {
  return (
    <div
      className="hidden xl:flex relative h-fit min-h-[650px] w-full text-white flex-col items-center gap-10 px-2 section"
    >
      {/* Title */}
      <div className="w-full flex flex-col justify-center items-center gap-2">
        <h1 className="text-5xl md:text-7xl font-['MonumentExtended'] text-center heading-gradient">
          Social Wall
        </h1>
      </div>

      {/* Instagram posts */}
      <div className="w-full flex flex-col justify-center items-center">
        <div className="flex">
          <div>
            <InstagramEmbed
              url="https://www.instagram.com/p/Cp-0vIGNZd2/"
              className="aspect-[6/7] min-w-[328px]"
            />
          </div>
          <div>
            <InstagramEmbed
              url="https://www.instagram.com/p/Cp2zK74t9yH/"
              className="aspect-[6/7] min-w-[328px]"
            />
          </div>
          <div>
            <InstagramEmbed
              url="https://www.instagram.com/p/Cpsr9zntTCT/"
              className="aspect-[6/7] min-w-[328px]"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default SocialMedia;
