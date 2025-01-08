// components/StatsCard.js
import { Popover, PopoverContent, PopoverTrigger } from "@nextui-org/react";
import React from "react";
import { FaQuestionCircle } from "react-icons/fa";

const ProfileGameCard = () => {
  return (
    <div className="bg-cardBackgroundColor p-4 rounded-lg  w-full text-white">
      <div className="flex items-center justify-center mb-4">
        <h2 className="text-lg font-bold">CALL OF DUTY</h2>
        <span className="ml-2 text-xs font-semibold text-orange-500">
          BLACK OPS 6
        </span>
      </div>

      <div className="flex justify-between items-center mb-4">
        <span className="text-sm">Skill Level</span>
        <div className="flex items-center space-x-2">
          <span className="bg-gray-700 text-white px-2 py-1 rounded-md">
            AMATEUR
          </span>

          <Popover placement="bottom" showArrow={true}>
            <PopoverTrigger>
              <FaQuestionCircle className="text-green-400 cursor-pointer" />
            </PopoverTrigger>
            <PopoverContent>
              <div className="px-1 py-2">
                <div className="text-small font-bold text-primary mb-3">
                  Skill Level
                </div>
                <p className="text-tiny text-gray max-w-96 mb-3">
                  Members are assigned an individual skill level for each game
                  based on multiple factors such as win percentage, amount of
                  games played and money won. This is to help match members of
                  similar skill levels against one another.
                </p>
                <p className="text-tiny text-gray max-w-60 mb-4">
                  Note: Members are only allowed one CMG account.
                </p>
                <div>
                  <p className="text-gray max-w-96 mb-3">
                    <span className="text-white">Novice: </span> Eligible to
                    play Novice, Amateur and Expert matches/tournaments.
                  </p>
                  <p className="text-gray max-w-96 mb-3">
                    <span className="text-white">Amateur: </span> Eligible to play Amateur and Expert matches/tournaments.
                  </p>
                  <p className="text-gray max-w-96 mb-3">
                    <span className="text-white">Expert: </span> Eligible to play All Skill matches/tournaments.
                  </p>
                </div>
              </div>
            </PopoverContent>
          </Popover>
        </div>
      </div>

      <div className="mb-2">
        <span className="text-sm">Record</span>
        <span className="float-right font-semibold">47 / 0</span>
      </div>

      <div className="mb-2">
        <span className="text-sm">Win Percentage</span>
        <span className="float-right font-semibold">100%</span>
      </div>

      <div className="mb-2">
        <span className="text-sm">Earnings</span>
        <span className="float-right font-semibold">$250.83</span>
      </div>

      <div className="mb-2">
        <span className="text-sm">Trophies</span>
        <div className="float-right flex space-x-2">
          <div className="text-xs text-gray-400">0</div>
          <div className="text-xs text-gray-400">0</div>
          <div className="text-xs text-gray-400">0</div>
          <div className="text-xs text-gray-400">0</div>
        </div>
      </div>

      <hr className="my-4 border-gray-600" />

      <div className="mb-2">
        <span className="text-sm">Points</span>
        <span className="float-right font-semibold">7335</span>
      </div>

      <div>
        <span className="text-sm">Best Streak</span>
        <span className="float-right font-semibold">39</span>
      </div>
    </div>
  );
};

export default ProfileGameCard;
