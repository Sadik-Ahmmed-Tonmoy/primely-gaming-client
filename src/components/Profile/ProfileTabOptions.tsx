"use client";
import {
  Card,
  CardBody,
  Select,
  SelectItem,
  Tab,
  Tabs,
} from "@nextui-org/react";
import { motion } from "framer-motion";
import { FaCaretDown } from "react-icons/fa";
import ProfileGameCard from "../cards/ProfileGameCard/ProfileGameCard";
import ProfileTeamCard from "../cards/ProfileTeamCard/ProfileTeamCard";

export const animals = [
  { key: "games", label: "Games" },
  { key: "bo6", label: "Bo6" },
  { key: "warzone", label: "Warzone" },
];

const ProfileTabOptions = () => {
  const fakeCount = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  return (
    <div className="w-full">
      <div className="flex flex-col w-full items-center justify-center">
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
          <Tab key="games" title="games" className="uppercase w-full">
            <Card className="">
              <CardBody>
                <div className="w-full">
                  <p className="text-gray  text-xl font-semibold mt-3 mb-6">
                    All Games
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                    {fakeCount?.map((item, index) => (
                      <ProfileGameCard key={index} />
                    ))}
                  </div>
                </div>
              </CardBody>
            </Card>
          </Tab>
          <Tab key="teams" title="teams" className="uppercase w-full">
            <Card>
              <CardBody>
                <div className="w-full">
                  <motion.div
                    className="flex flex-col md:flex-row gap-y-3 gap-x-5 lg:gap-x-20 md:items-end w-full mt-5 mb-10 overflow-hidden"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false, amount: 0.5 }}
                  >
                  
                    <div className="flex items-center justify-end gap-3 w-full">
                      <motion.div
                        className="w-full"
                        variants={{
                          hidden: { opacity: 0, y: -50 },
                          visible: {
                            opacity: 1,
                            y: 0,
                            transition: { duration: 0.6, delay: 0.3 },
                          },
                        }}
                      >
                        <Select
                          label="All Team Sizes"
                          className="text-gray"
                          radius="none"
                          selectorIcon={<FaCaretDown />}
                        >
                          {animals.map((animal) => (
                            <SelectItem key={animal.key}>
                              {animal.label}
                            </SelectItem>
                          ))}
                        </Select>
                      </motion.div>
                      <motion.div
                        className="w-full"
                        variants={{
                          hidden: { opacity: 0, y: -50 },
                          visible: {
                            opacity: 1,
                            y: 0,
                            transition: { duration: 0.3, delay: 0.2 },
                          },
                        }}
                      >
                        <Select
                          label="All Games"
                          className="text-gray"
                          radius="none"
                          selectorIcon={<FaCaretDown />}
                        >
                          {animals.map((animal) => (
                            <SelectItem key={animal.key}>
                              {animal.label}
                            </SelectItem>
                          ))}
                        </Select>
                      </motion.div>
                      <motion.div
                        className="w-full"
                        variants={{
                          hidden: { opacity: 0, y: -50 },
                          visible: {
                            opacity: 1,
                            y: 0,
                            transition: { duration: 0.8, delay: 0.5 },
                          },
                        }}
                      >
                        <Select
                          label="All Types"
                          className="text-gray"
                          radius="none"
                          selectorIcon={<FaCaretDown />}
                        >
                          {animals.map((animal) => (
                            <SelectItem key={animal.key}>
                              {animal.label}
                            </SelectItem>
                          ))}
                        </Select>
                      </motion.div>
                    </div>
                  </motion.div>
                  <div className="grid grid-cols-1 md:grid-cols-2   gap-6">
                    {fakeCount?.map((item, index) => (
                      <ProfileTeamCard key={index} />
                    ))}
                  </div>
                </div>
              </CardBody>
            </Card>
          </Tab>
        </Tabs>
        {/* <div className="flex flex-wrap items-center gap-2 sm:gap-3 text-sm sm:text-base">
          <div className="flex items-center gap-[6px] hover:text-primary-light cursor-pointer">
            <IoSettings size={20} />
            <p>Settings & Rules</p>
          </div>
          <div className="flex items-center gap-[6px] hover:text-primary-light cursor-pointer">
            <MdLeaderboard size={20} />
            <p>Leaderboards</p>
          </div>
        
           <div className="bg-red-500 w-40">
           <Select
              items={animals}
              label="Create Match"
              className="min-w-xs hover:text-primary-light"
              radius="none"
              size="sm"
            >
              {(animal) => (
                <SelectItem key={animal.key} className="whitespace-nowrap">{animal.label}</SelectItem>
              )}
            </Select>
           </div>
          
        </div> */}
      </div>
    </div>
  );
};

export default ProfileTabOptions;
