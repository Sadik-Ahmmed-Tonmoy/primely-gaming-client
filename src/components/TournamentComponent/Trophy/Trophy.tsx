import { TrophyTypes } from "@/types/types";
import Image from "next/image";

const Trophy = ({ src, price }: TrophyTypes) => {
  return (
    <div className="py-8 px-20 bg-slate-900 rounded-2xl">
      <Image
        src={src}
        height={110}
        width={110}
        alt="Winning price"
        className="w-[110px] h-[110px] object-contain"
      />
      {price && (
        <div className="text-white text-xl font-semibold text-center">
          ${price}
        </div>
      )}
    </div>
  );
};

export default Trophy;
