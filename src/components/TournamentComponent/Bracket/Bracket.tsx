import Image from "next/image";
import { useState } from "react";
import defaultImage from "@/assets/bracket/profile-tournament.webp";

const Bracket = () => {
  const [tab, setTab] = useState("expanded");
  return (
    <div className="flex flex-col gap-5">
      <div className="flex gap-2">
        <button
          onClick={() => setTab("expanded")}
          className="px-6 py-3 bg-[#292929]"
        >
          Expand
        </button>
        <button
          onClick={() => setTab("compacted")}
          className="px-6 py-3 bg-[#292929]"
        >
          Compact
        </button>
      </div>
      <div className="bg-[#292929] p-6">
        {tab === "expanded" && (
          <div className="flex">
            <div className="flex flex-col justify-between gap-5">
              <div className="flex flex-col gap-3 relative after:content-[''] after:absolute after:w-[30px] after:h-[60%] after:border-t-2 after:border-r-2 after:top-[50%] after:right-[-30px] after:border-[#f006ff] border-r-1 border-[#f006ff]">
                <div className="flex gap-2">
                  <Image
                    src={defaultImage}
                    alt="Trophy Image"
                    height={50}
                    width={50}
                  />
                  <div className="border border-[#404040] px-8 py-3 text-sm">
                    user
                  </div>
                </div>
                <div className="ps-3 text-sm">vs</div>
                <div className="flex gap-2">
                  <Image
                    src={defaultImage}
                    alt="Trophy Image"
                    height={50}
                    width={50}
                  />
                  <div className="border border-[#404040] px-8 py-3 text-sm">
                    user
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-3 relative before:content-[''] before:absolute before:w-[30px] before:h-[60%] before:border-b-2 before:border-r-2 before:bottom-[50%] before:right-[-30px] before:border-[#f006ff] border-r-1 border-[#f006ff]">
                <div className="flex gap-2">
                  <Image
                    src={defaultImage}
                    alt="Trophy Image"
                    height={50}
                    width={50}
                  />
                  <div className="border border-[#404040] px-8 py-3 text-sm">
                    user
                  </div>
                </div>
                <div className="ps-3 text-sm">vs</div>
                <div className="flex gap-2">
                  <Image
                    src={defaultImage}
                    alt="Trophy Image"
                    height={50}
                    width={50}
                  />
                  <div className="border border-[#404040] px-8 py-3 text-sm">
                    user
                  </div>
                </div>
              </div>
            </div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        )}
        {tab === "compacted" && <div>compacted</div>}
      </div>
    </div>
  );
};

export default Bracket;
