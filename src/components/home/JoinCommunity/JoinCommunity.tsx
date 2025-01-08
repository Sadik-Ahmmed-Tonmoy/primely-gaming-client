"use client";
import JoinCommunityCard from "@/components/cards/JoinCommunityCard/JoinCommunityCard";
import { Button } from "@nextui-org/react";
import React from "react";
import { motion } from "framer-motion";
import { RandomizedTextEffect } from "@/components/ui/text-randomized";
import { LiaChevronUpSolid } from "react-icons/lia";
import { RxHamburgerMenu } from "react-icons/rx";
import { ImCoinDollar } from "react-icons/im";
import { GiKnifeThrust } from "react-icons/gi";


const communityCardItems = [
  {
    header: "12,867,641",
    description: "Matches Played",
    
    // image:
    //   "https://www.checkmategaming.com/theme/cmg2/src/images/stats_homepage/matches-played.svg",
    icon: <GiKnifeThrust className="h-full w-full text-primary-light"/>
  },
  {
    header: "$163,837,984",
    description: "Winnings Paid",
    // image:
    //   "https://www.checkmategaming.com/theme/cmg2/src/images/stats_homepage/winnings-paid.svg",
    icon: <ImCoinDollar className="h-full w-full text-primary-light"/>
  },
  {
    header: "241",
    description: "Active Ladders",
    // image:
    //   "https://www.checkmategaming.com/theme/cmg2/src/images/stats_homepage/active-ladders.svg",
    icon: <RxHamburgerMenu className="h-full w-full text-primary-light" />,
  },
  {
    header: "288,074,118",
    description: "XP Earned",
    // image:
    //   "https://www.checkmategaming.com/theme/cmg2/src/images/stats_homepage/xp-earned.svg",
    icon: <LiaChevronUpSolid className="h-full w-full text-primary-light" />,
  },
];
const JoinCommunity = () => {
  return (
    <div className="max-w-[1480px] mx-auto w-full sm:mt-20">
      <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-4 gap-4 px-2">
        {communityCardItems?.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }} // Start off-screen below
            whileInView={{ opacity: 1, y: 0 }} // Animate when in view
            viewport={{ once: false, amount: 0 }} // Animate only once when 0% of the element is in view
            transition={{
              type: "spring",
              stiffness: 100,
              damping: 12,
              duration: 0.5,
              delay: index * 0.3, // Stagger animation by 0.2s for each item
            }}
          >
            <JoinCommunityCard item={item} />
          </motion.div>
        ))}
      </div>
      <div className="flex items-center justify-center gap-5  w-full my-10 px-2 overflow-hidden">
        <RandomizedTextEffect text="Join the fastest growing e-sports community" className="text-base lg:text-[21px] font-bold uppercase hidden md:block"  />
        <p className="text-base lg:text-[21px] font-bold uppercase block md:hidden" >Join the fastest growing e-sports community</p>
        <Button className="rounded-none bg-primary-light px-10 py-2 text-white text-base font-medium">
          Join Now
        </Button>
      </div>
    </div>
  );
};

export default JoinCommunity;
