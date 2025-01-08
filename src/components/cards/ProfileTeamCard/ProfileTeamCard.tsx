
import { Button } from "@nextui-org/react";
import Image from "next/image";
import React from "react";
import { FaUsers } from "react-icons/fa";
import { FaShuffle } from "react-icons/fa6";

const ProfileTeamCard = () => {
  return (
    <div className="bg-cardBackgroundColor p-4 rounded-[6px] border-r-2 border-gray overflow-hidden w-full flex items-center text-white space-x-4 hover:scale-105 transform transition-all duration-300">
      {/* Left side image */}
      <div className="w-40 h-40 rounded overflow-hidden relative">
        <Image
          src="https://m.media-amazon.com/images/M/MV5BZTA3Y2I2NTctZjJiMi00M2RmLTliZWUtOWY0YzAzMTc1Y2Y5XkEyXkFqcGc@._V1_.jpg" 
          alt="Team"
          height={400}
          width={400}
          className="object-cover w-full h-full"
        />
        <div className="absolute bottom-2 right-2 bg-black bg-opacity-70 rounded-full p-2">
        <FaShuffle size={20} />
        </div>
      </div>

      {/* Right side content */}
      <div className="flex-1">
        <h3 className="text-lg font-semibold">GamebattlesFinest</h3>
        <p className="text-sm text-gray">Call of Duty: Black Ops 6 | Cross-Platform</p>

        <div className="flex items-center space-x-2 mt-2 text-gray-300">
          <FaUsers className="text-lg" />
          <span>Doubles | 28W - 0L</span>
        </div>

        <Button className="mt-3 bg-primary hover:bg-primary-light text-sm font-semibold py-1.5 px-3 rounded">
          View Team
        </Button>
      </div>
    </div>
  );
};

export default ProfileTeamCard;
