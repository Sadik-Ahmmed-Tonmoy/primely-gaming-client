"use client";
import { Select, SelectItem } from "@nextui-org/react";
import { FaCaretDown } from "react-icons/fa";

import ResponsiveTable from "@/components/ResponsiveTable/ResponsiveTable";
import { motion } from "framer-motion";

export const animals = [
  { key: "games", label: "Games" },
  { key: "bo6", label: "Bo6" },
  { key: "warzone", label: "Warzone" },
];


const Matchfinder = () => {
  return (
    <div className="container dark:text-white mb-8 sm:mb-20">
      <motion.div
        className="flex flex-col md:flex-row gap-y-3 gap-x-5 lg:gap-x-20 md:items-end w-full mb-10 overflow-hidden"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.5 }}
      >
        <div className="border-s-4 ps-5 border-primary">
          <motion.h2
            className="text-[25px] md:text-[49px] font-bold uppercase"
            variants={{
              hidden: { opacity: 0, x: -100 },
              visible: {
                opacity: 1,
                x: 0,
                transition: { duration: 0.8, delay: 0.4 },
              },
            }}
          >
            Matchfinder
          </motion.h2>
          <motion.p
            variants={{
              hidden: { opacity: 0, x: -100 },
              visible: {
                opacity: 1,
                x: 0,
                transition: { duration: 0.9, delay: 0.6 },
              },
            }}
            className="text-gray text-sm md:-mt-2"
          >
            Head to head matches where you pick the game, rules, and prize.
          </motion.p>
        </div>
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
              label="Games"
              className="text-gray"
              radius="none"
              selectorIcon={<FaCaretDown />}
            >
              {animals.map((animal) => (
                <SelectItem key={animal.key}>{animal.label}</SelectItem>
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
              label="Platform"
              className="text-gray"
              radius="none"
              selectorIcon={<FaCaretDown />}
            >
              {animals.map((animal) => (
                <SelectItem key={animal.key}>{animal.label}</SelectItem>
              ))}
            </Select>
          </motion.div>
        </div>
      </motion.div>

      {/* Responsive Table */}
      <ResponsiveTable />
    </div>
  );
};

export default Matchfinder;
