'use client'
import Image from "next/image";
import React from "react";
import avatarImg from "@/assets/avatar.webp";
import { MdCardGiftcard } from "react-icons/md";
import { Button } from "@nextui-org/react";
import Link from "next/link";

const PlayersOfTheWeekCard = () => {
  return (
    <div className="bg-cardBackgroundColor border-t-[6px] border-white flex flex-col hover:scale-105 transform transition-all">
      <div className="relative w-min mx-auto">
        <div className="rounded-full h-28 w-28 border-white border-[6px] overflow-hidden mx-auto -mt-14 mb-6">
          <Image
            src={avatarImg}
            alt="image"
            className="object-contain"
            height={200}
            width={200}
          />
        </div>
        <div
          style={{
            clipPath:
              "polygon(25% 5%, 75% 5%, 100% 50%, 76% 92%, 25% 92%, 0% 50%)",
          }}
          className="absolute bottom-2 left-9 text-white  h-10 w-10 flex justify-center items-center bg-white"
        >
          <p
            style={{
              clipPath:
                "polygon(25% 5%, 75% 5%, 100% 50%, 76% 92%, 25% 92%, 0% 50%)",
            }}
            className="h-8 w-8 bg-red-500 flex items-center justify-center"
          >
            1
          </p>
        </div>
      </div>
      <p className="text-[30px] text-white text-center font-medium mb-2">
        Pula mea
      </p>
      <p className="text-gray  text-sm text-center mb-4">
        {" "}
        2620 XP earned 10/28 - 11/04
      </p>
      <div className="text-primary flex items-center justify-center gap-4 mb-8">
        <MdCardGiftcard size={22} />
        <p className="text-sm">+20 credits</p>
      </div>
      <Link href={'/profile/123'} className="mx-auto">
      <Button className="bg-primary-light text-white rounded-none mx-auto text-[18px] font-medium px-7 py-6 mb-10" radius="none">View Profile</Button>
      </Link>
    </div>
  );
};

export default PlayersOfTheWeekCard;
