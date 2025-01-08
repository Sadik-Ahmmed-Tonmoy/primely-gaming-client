"use client";

import ResponsiveTable from "@/components/ResponsiveTable/ResponsiveTable";
import { Card, CardBody, Tab, Tabs } from "@nextui-org/react";
import BannerForTournament from "@/components/TournamentComponent/Tournament/BannerForTournament/BannerForTournament";
import TournamentHeader from "@/components/TournamentComponent/Tournament/TournamentHeader/TournamentHeader";
import TournamentInfo from "@/components/TournamentComponent/TournamentInfo/TournamentInfo";
import TournamentRules from "@/components/TournamentComponent/TournamentRules/TournamentRules";
import Bracket from "@/components/TournamentComponent/Bracket/Bracket";

const TournamentDetails = () => {
  // const tabs = [
  //   {
  //     id: "Info",
  //     label: "Info",
  //     content: <TournamentInfo />,
  //   },
  //   {
  //     id: "music",
  //     label: "Music",
  //     content:
  //       "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
  //   },
  //   {
  //     id: "videos",
  //     label: "Videos",
  //     content:
  //       "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  //   },
  // ];

  return (
    <div>
      <BannerForTournament />
      <TournamentHeader />
      <div className="px-2 xs:px-7 lg:px-12 pb-12">
        <Tabs
          aria-label="Options"
          color="primary"
          variant="underlined"
          classNames={{
            tabList:
              "gap-6 w-full relative rounded-none p-0 border-b border-divider",
            cursor: "w-full bg-primary-light",
            tab: "max-w-fit px-0 h-12 ",
            tabContent:
              "group-data-[selected=true]:text-primary  w-12 text-sm md:w-20 md:text-base lg:w-40 lg:text-xl",
          }}
        >
          <Tab key="info" title="info" className="uppercase">
            <TournamentInfo />
          </Tab>
          <Tab key="rules" title="rules" className="uppercase">
            <TournamentRules />
          </Tab>
          <Tab key="bracket" title="bracket" className="uppercase">
            <Bracket />
          </Tab>
          <Tab key="squads" title="squads" className="uppercase">
            <Card>
              <CardBody>
                <>
                  <p className="text-gray mb-2">
                    Total Teams: <span className="text-white">12494</span>
                  </p>
                  <ResponsiveTable />
                </>
              </CardBody>
            </Card>
          </Tab>
        </Tabs>
      </div>
    </div>
  );
};

export default TournamentDetails;
