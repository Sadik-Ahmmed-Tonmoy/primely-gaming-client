"use client";
import CommunityCard from "@/components/cards/CommunityCard/CommunityCard";
import { Button } from "@nextui-org/react";
import { ConfigProvider, Drawer } from "antd";
import { motion } from "framer-motion";
import { useState } from "react";
import { IoMdClose } from "react-icons/io";
import { LuFilter } from "react-icons/lu";
import SideMenuWrapper from "./SideMenuWrapper/SideMenuWrapper";

const FilterForTournament = () => {
  const items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const [open, setOpen] = useState(false);

  const onClose = () => {
    setOpen(false);
  };
  return (
    <div className="px-2 xs:px-7 lg:px-12 flex flex-col md:flex-row items-start gap-5">
      {/* left side start */}
      {/* For Mobile start */}
      <div className="block md:hidden">
        <Button radius="sm" className="rounded-sm">
          <div
            onClick={() => setOpen(true)}
            className="flex items-center gap-2 "
          >
            <p>Filter</p>
            <LuFilter />
          </div>
        </Button>
        <>
          <ConfigProvider
            theme={{
              components: {
                Select: {
                  hoverBorderColor: "#7F56D9",
                  activeBorderColor: "#7F56D9",
                },
                Drawer: {
                  colorBgElevated: "black",
                },
              },
            }}
          >
            <Drawer
              title="Basic Drawer"
              onClose={onClose}
              open={open}
              width={"85%"}
            >
              <div>
                <IoMdClose onClick={onClose} className="text-white" />
                <SideMenuWrapper />
              </div>
            </Drawer>
          </ConfigProvider>
        </>
      </div>
      {/* For Mobile end */}
      {/* For Pc start */}
      <div className="hidden md:block min-w-[200px] md:w-[20%]  ">
        <SideMenuWrapper />
      </div>
      {/* For Pc end */}
      {/* left side end */}
      {/* right side start */}
      <div className="w-full md:w-[80%]">
        {/* Cards Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
          {items?.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }} // Start off-screen below
              whileInView={{ opacity: 1, y: 0 }} // Animate when in view
              viewport={{ once: false, amount: 0 }} // Animate only once when 0% of the element is in view
              transition={{
                duration: 0.2,
                delay: index * 0.1, // Stagger animation by 0.2s for each item
              }}
            >
              <CommunityCard />
            </motion.div>
          ))}
        </div>
      </div>
      {/* right side end */}
    </div>
  );
};

export default FilterForTournament;
