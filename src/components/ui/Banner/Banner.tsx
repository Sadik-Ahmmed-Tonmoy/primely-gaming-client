import { cn } from "@/lib/utils";
import Image from "next/image";
import React from "react";

const Banner = ({ url }: { url: string }) => {
  return (
    <>
      <div className={cn("overflow-hidden h-40 md:h-[400px] w-full relative")}>
        <Image
          src={url}
          className="object-top h-full w-full"
          width={2500}
          height={2000}
          alt="image"
        />

        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
      </div>
    </>
  );
};

export default Banner;
