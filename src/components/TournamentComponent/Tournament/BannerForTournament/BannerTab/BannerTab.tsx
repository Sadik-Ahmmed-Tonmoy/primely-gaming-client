"use client";
import { TabsBtn, TabsProvider } from "@/components/ui/tab";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

const BannerTab = () => {
  const searchParams = useSearchParams();
  const [selectedTab, setSelectedTab] = useState("tournaments");

  const handleAddTabQuery = (tab: string) => {
    const currentUrl = new URL(window.location.href);
    currentUrl.searchParams.set("tab", tab);
    window.history.replaceState({}, "", currentUrl.toString());
    setSelectedTab(tab);
  };

  useEffect(() => {
    const tab = searchParams.get("tab");
    if (tab) {
      setSelectedTab(tab);
    } else {
      setSelectedTab("tournaments");
    }
  }, [searchParams]);

  return (
    <TabsProvider defaultValue={"tournaments"} wobbly={true}>
      <div className="flex justify-center w-full">
        <div className="flex items-center  rounded-md w-full bg-[#1a1a1a]">
          <TabsBtn value="tournaments" selectedTab={selectedTab}>
            <div
              onClick={() => handleAddTabQuery("tournaments")}
              className={` w-full h-full py-5 px-1 cursor-pointer`}
            >
              <h5 className="text-center text-xs xs:text-base md:text-lg lg:text-2xl font-bold flex items-center justify-center gap-1">
                <span className="hidden md:block">Community</span> Tournaments
              </h5>
              <p className="text-center text-[10.5px] font-normal hidden sm:block">
                Battle your way through a bracket of competitors for big prizes.{" "}
                <br /> Find a competition that is right for you.
              </p>
            </div>
          </TabsBtn>
          <TabsBtn value="cashMatches" selectedTab={selectedTab}>
            {/* Cash Matches Tab */}
            <div
              onClick={() => handleAddTabQuery("cashMatches")}
              className={` w-full h-full py-5 px-1 cursor-pointer`}
            >
              <h5 className="text-center text-xs xs:text-base md:text-lg lg:text-2xl font-bold">
                Cash Matches
              </h5>
              <p className="text-center text-[10.5px] font-normal hidden sm:block">
                Go head to head with your opponents for winner take all stakes.
                <br />
                Play when and how you want.
              </p>
            </div>
          </TabsBtn>
          <TabsBtn value="xpMatches" selectedTab={selectedTab}>
            {/* XP Matches Tab */}
            <div
              onClick={() => handleAddTabQuery("xpMatches")}
              className={`w-full h-full py-5 px-1 cursor-pointer`}
            >
              <h5 className="text-center text-xs xs:text-base md:text-lg lg:text-2xl font-bold">
                XP Matches
              </h5>
              <p className="text-center text-[10.5px] font-normal hidden sm:block">
                Join up and earn XP with every win.
              </p>
            </div>
          </TabsBtn>
        </div>
      </div>
    </TabsProvider>
  );
};

export default BannerTab;
