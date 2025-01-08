"use client";
import { Button, Image } from "@nextui-org/react";
import Link from "next/link";
import React from "react";
import { FaArrowRight } from "react-icons/fa";
import { FaShuffle } from "react-icons/fa6";

const CommunityCard = () => {
  return (
    <div className=" dark:bg-cardBackgroundColor bg-[#fafafa] shadow-md">
      <div className="flex items-start justify-between">
        <div className="px-4 pb-4 pt-6 flex flex-col xs:flex-row justify-start gap-3 md:gap-5">
          <div
            className={`bg-[url('https://www.checkmategaming.com/images/ladders/1701636906207.png')] h-[120px] w-[120px] bg-cover bg-center relative flex justify-center items-center`}
          >
            <div
              style={{
                clipPath: "polygon(0 0, 100% 0, 100% 61%, 50% 100%, 0 61%)",
              }}
              className="absolute bg-primary-light px-3 -top-4 left-[20%] h-11 text-white"
            >
              <p className="text-[22px] font-bold ">$180</p>
              <p className="uppercase text-[6px] font-semibold -mt-2 text-center">
                prize
              </p>
            </div>
            <Image
              className="px-4"
              alt="image"
              src="https://www.checkmategaming.com/images/ladders/1701636905414.png"
            />
          </div>
          <div>
            <h5 className="text-[24px] font-bold mb-2">
              1v1 KILL RACE BEST OF 1
            </h5>
            <p className="mb-3">
              <span className="text-gray">Oct 30, 2:00 AM EDT</span>
              <span className="text-red-600 ps-2">Starts in 3M 18S</span>
            </p>
            <div className="flex items-center gap-3">
              <div>
                <p className="text-[9px] text-gray font-medium mb-1">
                  ENTRY/PLAYER
                </p>
                <h5 className="text-[18px]">5 Credits</h5>
              </div>
              <div>
                <p className="text-[9px] text-gray font-medium">TEAM SIZE</p>
                <h5 className="text-[18px]">1v1</h5>
              </div>
              <div>
                <p className="text-[9px] text-gray font-medium">REGIONS</p>
                <h5 className="text-[18px]">NA + EU</h5>
              </div>
              <div>
                <p className="text-[9px] text-gray font-medium">SKILL LEVEL</p>
                <h5 className="text-[18px]">All</h5>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-6 pr-3">
          <FaShuffle size={20} />
        </div>
      </div>
      <Button
        variant="light"
        radius="none"
        className="w-full border-t-1 border-black h-full"
      >
        <Link
          href={`/tournament/cross-platform/1/1`}
          className="py-4  flex items-center justify-center gap-1 dark:text-primary text-[17px] cursor-pointer"
        >
          <p>View Tournament</p>
          <FaArrowRight />
        </Link>
      </Button>
    </div>
  );
};

export default CommunityCard;
