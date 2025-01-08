"use client";
import React, { useEffect, useState } from "react";
import FilterForTournament from "../FilterForTournament/FilterForTournament";
import { useSearchParams } from "next/navigation";
import TournamentHeader from "../TournamentHeader/TournamentHeader";
import CashMatchComponent from "@/components/TournamentComponent/CashMatchComponents/CashMatch/CashMatchComponent";
import XPMatchesComponent from "../../XPMatchesComponent/XPMatchesComponent";
import TournamentDetailsFooter from "../../TournamentDetailsFooter/TournamentDetailsFooter";

const ConditionalTabContent = () => {
  const searchParams = useSearchParams();
  const [selectedTab, setSelectedTab] = useState("tournaments");

  useEffect(() => {
    const tab = searchParams.get("tab");
    if (tab) {
      setSelectedTab(tab);
    } else {
      setSelectedTab("tournaments");
    }
  }, [searchParams]);

  return (
    <div>
      {selectedTab === "tournaments" && (
        <>
          <TournamentHeader />
          <FilterForTournament />
          <TournamentDetailsFooter/>
        </>
      )}
      {selectedTab === "cashMatches" && (
        <>
         <CashMatchComponent/>
         <TournamentDetailsFooter/>
        </>
      )}
      {selectedTab === "xpMatches" && (
        <>
         <XPMatchesComponent/>
         <TournamentDetailsFooter/>
        </>
      )}
   
    </div>
  );
};

export default ConditionalTabContent;
