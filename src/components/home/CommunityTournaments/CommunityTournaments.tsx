"use client";
import CommunityCard from "@/components/cards/CommunityCard/CommunityCard";
import { Select, SelectItem } from "@nextui-org/react";
import React from "react";
import { FaCaretDown } from "react-icons/fa";
import { motion } from "framer-motion"; // Import motion from framer-motion

export const animals = [
  { key: "games", label: "Games" },
  { key: "bo6", label: "Bo6" },
  { key: "warzone", label: "Warzone" },
];

const CommunityTournaments = () => {
  const items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  // Define the animation variants
  const textVariant = {
    hidden: { opacity: 0, x: -100 }, // Start off-screen on the left
    visible: { opacity: 1, x: 0, transition: { duration: 0.6, delay: 0.2 } }, // Slide in with delay
  };

  return (
    <div className="container dark:text-white mb-10 sm:mb-20">
      <motion.div
        className="flex flex-col md:flex-row gap-y-3 gap-x-5 lg:gap-x-20 md:items-end w-full mb-10 overflow-hidden"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.5 }} // Trigger animation when 50% of the element is in view
      >
        {/* Left to Right animation */}
        <div className="border-s-4 ps-5 border-primary">
          <motion.h5
            variants={textVariant}
            className="text-[15px] md:text-[30px] font-bold uppercase"
          >
            Community
          </motion.h5>
          <motion.h2
            className="text-[25px] md:text-[49px] font-bold uppercase"
            variants={{
              hidden: { opacity: 0, x: -100 }, // Start off-screen on the left
              visible: {
                opacity: 1,
                x: 0,
                transition: { duration: 0.8, delay: 0.4 },
              }, // Slide in with delay
            }} // Apply top to bottom animation
          >
            Tournaments
          </motion.h2>
          <motion.p
            variants={{
              hidden: { opacity: 0, x: -100 }, // Start off-screen on the left
              visible: {
                opacity: 1,
                x: 0,
                transition: { duration: 0.9, delay: 0.6 },
              }, // Slide in with delay
            }}
            className="text-gray text-sm md:-mt-2"
          >
            Bring multiple teams together in a bracket for single elimination
            mayhem.
          </motion.p>
        </div>

        {/* Dropdown Section */}
        <div className="flex items-center gap-3 w-full">
          <motion.div
            className="w-full"
            variants={{
              hidden: { opacity: 0, y: -50 }, // Start off-screen on the top
              visible: {
                opacity: 1,
                y: 0,
                transition: { duration: 0.6, delay: 0.3 },
              },
            }}
          >
            <Select
              label="Games"
              className="max-w-xs text-gray"
              radius="none"
              selectorIcon={<FaCaretDown className="" />}
            >
              {animals.map((animal) => (
                <SelectItem key={animal.key}>{animal.label}</SelectItem>
              ))}
            </Select>
          </motion.div>
          <motion.div
            className="w-full"
            variants={{
              hidden: { opacity: 0, y: -50 }, // Start off-screen on the top
              visible: {
                opacity: 1,
                y: 0,
                transition: { duration: 0.8, delay: 0.5 },
              },
            }}
          >
            <Select
              label="Platform"
              className="max-w-xs text-gray"
              radius="none"
              selectorIcon={<FaCaretDown className="" />}
            >
              {animals.map((animal) => (
                <SelectItem key={animal.key}>{animal.label}</SelectItem>
              ))}
            </Select>
          </motion.div>
          <motion.div
            className="w-full"
            variants={{
              hidden: { opacity: 0, y: -50 }, // Start off-screen on the top
              visible: {
                opacity: 1,
                y: 0,
                transition: { duration: 1, delay: 0.9 },
              },
            }}
          >
            <Select
              label="More"
              className="max-w-xs text-gray"
              radius="none"
              selectorIcon={<FaCaretDown className="" />}
            >
              {animals.map((animal) => (
                <SelectItem key={animal.key}>{animal.label}</SelectItem>
              ))}
            </Select>
          </motion.div>
        </div>
      </motion.div>

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
  );
};

export default CommunityTournaments;
