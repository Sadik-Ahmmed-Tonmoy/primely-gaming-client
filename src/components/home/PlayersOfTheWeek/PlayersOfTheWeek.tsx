import React from "react";
import bgImg from "@/assets/players-of-the-week-background.webp";
import PlayersOfTheWeekCard from "@/components/cards/PlayersOfTheWeekCard/PlayersOfTheWeekCard";

const PlayersOfTheWeek = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${bgImg.src})`, // Use .src to get the actual image path
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      className="h-full w-full py-16"
    >
      <div className="container  ">
        <h3 className="border-t-8 border-[#5cc5e6] uppercase text-[20px] sm:text-[30px] md:text-[50px] font-bold w-min whitespace-nowrap mx-auto text-white">
          Players of the Week
        </h3>
        <p className="text-center text-sm font-normal text-gray sm:-mt-3 mb-20 md:mb-36">
          Placements reset every Sunday at 12 AM EST
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-6 ">
          <PlayersOfTheWeekCard />
          <div className="md:-mt-14">
            <PlayersOfTheWeekCard />
          </div>
          <PlayersOfTheWeekCard />
        </div>
      </div>
    </div>
  );
};

export default PlayersOfTheWeek;
