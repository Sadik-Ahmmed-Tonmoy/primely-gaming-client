"use client";

import { Button } from "@nextui-org/react";
import { FaShuffle } from "react-icons/fa6";

const TournamentHeader = () => {
  return (
    <div className="px-2 xs:px-7 lg:px-12 mb-10">
      <div className=" dark:bg-cardBackgroundColor bg-[#fafafa] shadow-md ">
        <div className="px-4 pb-4 pt-6 flex flex-col xs:flex-row justify-start gap-3 md:gap-10 w-full">
          <div
            className={`bg-[url('https://www.checkmategaming.com/images/ladders/1701636906207.png')] h-[120px] w-[120px] sm:h-[300px] sm:w-[300px] bg-cover bg-center relative flex justify-center items-center`}
          >
            <div
              style={{
                clipPath: "polygon(0 0, 100% 0, 100% 61%, 50% 100%, 0 61%)",
              }}
              className="absolute bg-primary-light px-3 -top-4 left-[20%] sm:left-[38%] h-11 text-white"
            >
              <p className="text-[22px] font-bold ">$180</p>
              <p className="uppercase text-[6px] font-semibold -mt-2 text-center">
                prize
              </p>
            </div>
          </div>
          <div className="text-white  w-full flex flex-col justify-between">
            <div>
              <h5 className="text-lg md:text-[32px] font-bold mb-4">
                1v1 KILL RACE BEST OF 1
              </h5>
              <div className="mb-3 text-gray flex flex-wrap items-center gap-2 sm:gap-5">
                <p className="">Call of Duty: Warzone</p>
                <FaShuffle size={20} className="cursor-pointer text-white" />
                <h5 className="text-[18px]">NA + EU</h5>
              </div>

              <div className="flex flex-col lg:flex-row gap-3  justify-between border-t-2 border-[#464444] pt-4">
                <div className=" flex flex-col justify-between">
                  <div className="flex gap-3 sm:gap-5   w-full">
                    <div>
                      <p className="text-[9px] md:text-base text-gray font-medium mb-1">
                        ENTRY/PLAYER
                      </p>
                      <h5 className="text-[18px] sm:text-base lg:text-3xl">
                        5 Credits
                      </h5>
                    </div>
                    <div>
                      <p className="text-[9px] md:text-base text-gray font-medium">
                        TEAM SIZE
                      </p>
                      <h5 className="text-[18px] sm:text-base lg:text-3xl">
                        1v1
                      </h5>
                    </div>
                    <div>
                      <p className="text-[9px] md:text-base text-gray font-medium">
                        REGIONS
                      </p>
                      <h5 className="text-[18px] sm:text-base lg:text-3xl">
                        NA + EU
                      </h5>
                    </div>
                    <div>
                      <p className="text-[9px] md:text-base text-gray font-medium">
                        SKILL LEVEL
                      </p>
                      <h5 className="text-[18px] sm:text-base lg:text-3xl">
                        All
                      </h5>
                    </div>
                  </div>
                  <Button className="bg-primary rounded-md w-min mt-3 px-10">
                    Show
                  </Button>
                </div>
                <div className="bg-black rounded py-4 px-6  whitespace-nowrap">
                  <div className="mb-3">
                    <h5 className="text-[#5cc5e6] uppercase text-lg">view</h5>
                    <p className="text-sm">REGISTRATION OPEN</p>
                  </div>
                  <div className="">
                    <h5 className="text-[#5cc5e6]  text-lg">
                      Nov 04, 10:00 PM EST
                    </h5>
                    <p className="text-sm">START TIME</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TournamentHeader;
