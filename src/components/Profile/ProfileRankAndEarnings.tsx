import React from "react";
import trophy from "@/assets/trophy/gold-trophy.svg";
import Image from "next/image";

const ProfileRankAndEarnings = () => {
  return (
    <div className="dark:bg-cardBackgroundColor bg-[#fafafa] rounded p-8 w-full grid grid-cols-1 md:grid-cols-3 items-center mb-5">
      <div className="h-full w-full border-b-2 md:border-b-0 md:border-r-2 flex justify-center gap-2 py-2">
        <Image
          src={trophy}
          height={110}
          width={110}
          alt="Winning price"
          className="w-[110px] h-[110px] object-contain"
        />
        <div className="flex flex-col items-center">
          <h4 className="text-primary font-semibold text-3xl">Rank</h4>
          <p className="text-4xl font-bold my-1">400</p>
          <p className="text-gray">55,735 XP</p>
        </div>
      </div>
      <div className="h-full w-full border-b-2 md:border-b-0 md:border-r-2  flex justify-center gap-2 py-2">
        {/* <Image
          src={trophy}
          height={110}
          width={110}
          alt="Winning price"
          className="w-[110px] h-[110px] object-contain"
        /> */}
        <div className="flex flex-col items-center">
          <h4 className="text-primary font-semibold text-3xl">Earnings</h4>
          <p className="text-4xl font-bold my-1">$13455.73</p>
          <p className="text-gray">RANKED #1180</p>
        </div>
      </div>
      <div className="h-full w-full flex justify-center gap-2 py-2">
        {/* <Image
          src={trophy}
          height={110}
          width={110}
          alt="Winning price"
          className="w-[110px] h-[110px] object-contain"
        /> */}
        <div className="flex flex-col items-center">
          <h4 className="text-primary font-semibold text-3xl">Record</h4>
          <p className="text-4xl font-bold my-1">47 W - 0 L</p>
          {/* <p className="text-gray">55,735 XP</p> */}
        </div>
      </div>

    </div>
  );
};

export default ProfileRankAndEarnings;
