import Image from "next/image";
import Elite from "@/assets/trophy/elite-trophy.svg";
import Gold from "@/assets/trophy/gold-trophy.svg";
import Sliver from "@/assets/trophy/silver-trophy.svg";
import Bronze from "@/assets/trophy/bronze-trophy.svg";

const EarnedTrophies = () => {
  return (
    <div className="grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-4 items-center gap-2 mb-6">

      <div className="h-full w-full flex items-start gap-3 bg-cardBackgroundColor">
        <Image
          src={Elite}
          height={110}
          width={110}
          alt="Winning price"
          className="w-[80px] h-[80px] object-contain bg-slate-700"
        />
        <div className="flex flex-col items-center">
          <h4 className="text-[#5cc5e6] font-semibold text-xl">
          Elite Trophies</h4>
          <p className="text-2xl font-bold my-1">0</p>
        </div>
      </div>
      <div className="h-full w-full flex items-start gap-3 bg-cardBackgroundColor">
        <Image
          src={Gold}
          height={110}
          width={110}
          alt="Winning price"
          className="w-[80px] h-[80px]  object-contain bg-slate-700"
        />
        <div className="flex flex-col items-center">
          <h4 className="text-[#d8b862] font-semibold text-xl">
          Gold Trophies</h4>
          <p className="text-2xl font-bold my-1">11</p>
        </div>
      </div>
      <div className="h-full w-full flex items-start gap-3 bg-cardBackgroundColor">
        <Image
          src={Sliver}
          height={110}
          width={110}
          alt="Winning price"
          className="w-[80px] h-[80px]  object-contain bg-slate-700"
        />
        <div className="flex flex-col items-center">
          <h4 className="text-[#999] font-semibold text-xl">
          
Silver Trophies</h4>
          <p className="text-2xl font-bold my-1">50</p>
        </div>
      </div>
      <div className="h-full w-full flex items-start gap-3 bg-cardBackgroundColor">
        <Image
          src={Bronze}
          height={110}
          width={110}
          alt="Winning price"
          className="w-[80px] h-[80px]  object-contain bg-slate-700"
        />
        <div className="flex flex-col items-center">
          <h4 className="text-[#c17343] font-semibold text-xl">
          
Bronze Trophies</h4>
          <p className="text-2xl font-bold my-1">66</p>
        </div>
      </div>

    </div>
  );
};

export default EarnedTrophies;
