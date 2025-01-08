"use client";
import { Slide } from "@/types/types";
import React from "react";
import { FaShuffle } from "react-icons/fa6";
import BannerTab from "./BannerTab/BannerTab";

const content: Slide = {
  id: 1,
  title: "Assassin's Creed Mirage",
  subTitle: "Action Game",
  heroImage:
    "https://staticctf.ubisoft.com/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/30dd8syYR9JAPhV759qTQe/66e1f4978d8a6ff11201bc1c6dd7b7f9/acm-boxshot.jpg?imwidth=360",
  bgImage:
    "https://assets-prd.ignimgs.com/2023/10/06/top10assassinscreedgames-36190303-bestacgamesthumb-1696629815358.jpg",
};

const BannerForTournament = () => {
  return (
    <div>
      <div
        className="bg-cover bg-top h-full w-full relative mb-[70px] sm:mb-20 "
        style={{
          backgroundImage: `url(${content.bgImage})`,
          transition: "background-image 0.5s ease-in-out",
        }}
      >
        <div className="h-96 bg-black bg-opacity-50">
          <div className="flex flex-col justify-between h-full">
            <div></div>
            <div className="flex items-center gap-4 px-2 sm:px-20">
              <h3 className="text-4xl font-semibold">{content?.title}</h3>
              <FaShuffle size={20} className="cursor-pointer" />
            </div>
            <div className=" px-2 xs:px-7 lg:px-12 -mb-14 ">
              <BannerTab />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BannerForTournament;
