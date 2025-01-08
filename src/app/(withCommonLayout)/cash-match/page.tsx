"use client";
import React from "react";
import { motion } from "framer-motion";
import TournamentDetailsFooter from "@/components/TournamentComponent/TournamentDetailsFooter/TournamentDetailsFooter";
import { Slide } from "@/types/types";
import Image from "next/image";
import { ChevronsRight } from "lucide-react";
import Link from "next/link";

const slidesData: Slide[] = [
  {
    id: 1,
    content: "Slide 1 content",
    title: "Assassin's Creed Mirage",
    subTitle: "Action Game",
    heroImage:
      "https://staticctf.ubisoft.com/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/30dd8syYR9JAPhV759qTQe/66e1f4978d8a6ff11201bc1c6dd7b7f9/acm-boxshot.jpg?imwidth=360",
    bgImage:
      "https://assets-prd.ignimgs.com/2023/10/06/top10assassinscreedgames-36190303-bestacgamesthumb-1696629815358.jpg",
  },
  {
    id: 2,
    content: "Slide 2 content",
    title: "PlayerUnknown's Battlegrounds",
    subTitle: "Action Game",
    heroImage:
      "https://static0.gamerantimages.com/wordpress/wp-content/uploads/2022/11/PUBG-MOBILE.jpg",
    bgImage:
      "https://mrwallpaper.com/images/high/pubg-motorcycle-4k-wjn960o8mnnxyjob.webp",
  },
  {
    id: 3,
    content: "Slide 2 content",
    title: "Call of Duty: Warzone",
    subTitle: "Action Game",
    heroImage:
      "https://wallpapers.com/images/hd/yellow-call-of-duty-phone-qh4ng5sccotp6hlh.jpg",
    bgImage: "https://wallpapercave.com/wp/wp11672165.jpg",
  },
  {
    id: 4,
    content: "Slide 2 content",
    title: "Prince of persia",
    subTitle: "Action Game",
    heroImage:
      "https://m.media-amazon.com/images/M/MV5BZTA3Y2I2NTctZjJiMi00M2RmLTliZWUtOWY0YzAzMTc1Y2Y5XkEyXkFqcGc@._V1_.jpg",
    bgImage:
      "https://www.ancientworldmagazine.com/site/assets/files/1993/sot.jpg",
  },
  {
    id: 5,
    content: "Slide 2 content",
    title: "Battlefield 3",
    subTitle: "Action Game",
    heroImage:
      "https://m.media-amazon.com/images/M/MV5BODJhMDFhYWQtMDk0ZS00MjNhLTlhNTUtMzZjNWIyNTIxNjgzXkEyXkFqcGc@._V1_.jpg",
    bgImage: "https://images6.alphacoders.com/374/374358.jpg",
  },
  {
    id: 1,
    content: "Slide 1 content",
    title: "Assassin's Creed Mirage",
    subTitle: "Action Game",
    heroImage:
      "https://staticctf.ubisoft.com/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/30dd8syYR9JAPhV759qTQe/66e1f4978d8a6ff11201bc1c6dd7b7f9/acm-boxshot.jpg?imwidth=360",
    bgImage:
      "https://assets-prd.ignimgs.com/2023/10/06/top10assassinscreedgames-36190303-bestacgamesthumb-1696629815358.jpg",
  },
  {
    id: 2,
    content: "Slide 2 content",
    title: "PlayerUnknown's Battlegrounds",
    subTitle: "Action Game",
    heroImage:
      "https://static0.gamerantimages.com/wordpress/wp-content/uploads/2022/11/PUBG-MOBILE.jpg",
    bgImage:
      "https://mrwallpaper.com/images/high/pubg-motorcycle-4k-wjn960o8mnnxyjob.webp",
  },
  {
    id: 3,
    content: "Slide 2 content",
    title: "Call of Duty: Warzone",
    subTitle: "Action Game",
    heroImage:
      "https://wallpapers.com/images/hd/yellow-call-of-duty-phone-qh4ng5sccotp6hlh.jpg",
    bgImage: "https://wallpapercave.com/wp/wp11672165.jpg",
  },
  {
    id: 4,
    content: "Slide 2 content",
    title: "Prince of persia",
    subTitle: "Action Game",
    heroImage:
      "https://m.media-amazon.com/images/M/MV5BZTA3Y2I2NTctZjJiMi00M2RmLTliZWUtOWY0YzAzMTc1Y2Y5XkEyXkFqcGc@._V1_.jpg",
    bgImage:
      "https://www.ancientworldmagazine.com/site/assets/files/1993/sot.jpg",
  },
  {
    id: 5,
    content: "Slide 2 content",
    title: "Battlefield 3",
    subTitle: "Action Game",
    heroImage:
      "https://m.media-amazon.com/images/M/MV5BODJhMDFhYWQtMDk0ZS00MjNhLTlhNTUtMzZjNWIyNTIxNjgzXkEyXkFqcGc@._V1_.jpg",
    bgImage: "https://images6.alphacoders.com/374/374358.jpg",
  },
  {
    id: 1,
    content: "Slide 1 content",
    title: "Assassin's Creed Mirage",
    subTitle: "Action Game",
    heroImage:
      "https://staticctf.ubisoft.com/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/30dd8syYR9JAPhV759qTQe/66e1f4978d8a6ff11201bc1c6dd7b7f9/acm-boxshot.jpg?imwidth=360",
    bgImage:
      "https://assets-prd.ignimgs.com/2023/10/06/top10assassinscreedgames-36190303-bestacgamesthumb-1696629815358.jpg",
  },
  {
    id: 2,
    content: "Slide 2 content",
    title: "PlayerUnknown's Battlegrounds",
    subTitle: "Action Game",
    heroImage:
      "https://static0.gamerantimages.com/wordpress/wp-content/uploads/2022/11/PUBG-MOBILE.jpg",
    bgImage:
      "https://mrwallpaper.com/images/high/pubg-motorcycle-4k-wjn960o8mnnxyjob.webp",
  },
  {
    id: 3,
    content: "Slide 2 content",
    title: "Call of Duty: Warzone",
    subTitle: "Action Game",
    heroImage:
      "https://wallpapers.com/images/hd/yellow-call-of-duty-phone-qh4ng5sccotp6hlh.jpg",
    bgImage: "https://wallpapercave.com/wp/wp11672165.jpg",
  },
  {
    id: 4,
    content: "Slide 2 content",
    title: "Prince of persia",
    subTitle: "Action Game",
    heroImage:
      "https://m.media-amazon.com/images/M/MV5BZTA3Y2I2NTctZjJiMi00M2RmLTliZWUtOWY0YzAzMTc1Y2Y5XkEyXkFqcGc@._V1_.jpg",
    bgImage:
      "https://www.ancientworldmagazine.com/site/assets/files/1993/sot.jpg",
  },
  {
    id: 5,
    content: "Slide 2 content",
    title: "Battlefield 3",
    subTitle: "Action Game",
    heroImage:
      "https://m.media-amazon.com/images/M/MV5BODJhMDFhYWQtMDk0ZS00MjNhLTlhNTUtMzZjNWIyNTIxNjgzXkEyXkFqcGc@._V1_.jpg",
    bgImage: "https://images6.alphacoders.com/374/374358.jpg",
  },
];
const CashMatchPage = () => {
  return (
    <div className="container mt-10">
      <motion.div
        className="flex flex-col md:flex-row gap-y-3 gap-x-5 lg:gap-x-20 md:items-end w-full mb-10 overflow-hidden"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.5 }}
      >
        <div className="border-s-4 ps-5 border-primary">
          <motion.h2
            className="text-[25px] md:text-[49px] font-bold uppercase"
            // variants={{
            //   hidden: { opacity: 0, x: -100 },
            //   visible: {
            //     opacity: 1,
            //     x: 0,
            //     transition: { duration: 0.8, delay: 0.4 },
            //   },
            // }}
          >
            Cash Matches
          </motion.h2>
          <motion.p
            // variants={{
            //   hidden: { opacity: 0, x: -100 },
            //   visible: {
            //     opacity: 1,
            //     x: 0,
            //     transition: { duration: 0.9, delay: 0.6 },
            //   },
            // }}
            className="text-gray text-sm md:-mt-2"
          >
            One team vs another team. To schedule a match you can post <br /> or
            accept a match. Once a match is accepted a match details page will
            be provided.
          </motion.p>
        </div>
      </motion.div>

      <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6 ">
        {slidesData?.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }} // Start off-screen below
            animate={{ opacity: 1, y: 0 }} // Final state
            transition={{
              duration: 0.3,
              delay: index * 0.1, // Stagger animation by 0.1s for each item
            }}
            className=" rounded-md overflow-hidden group relative cursor-pointer"
          >
           <Link href={`/tournament/cross-platform/Assassin's%20Creed%20Mirage?tab=cashMatches`}>
           <Image
              src={item?.heroImage}
              alt="Game"
              width={500}
              height={500}
              className="rounded object-cover h-full w-full"
            />
            <article className="p-4 space-y-2 absolute -bottom-10 group-hover:bottom-0 transition-all duration-300 group-hover:bg-black w-full bg-opacity-75">
              <div className="text-base dark:text-white text-blue-600 font-normal group-hover:opacity-100 opacity-0 translate-y-2 group-hover:translate-y-0 pt-2 flex gap-1 transition-all duration-300">
                {item?.title}
                <span>
                  <ChevronsRight />
                </span>
              </div>
            </article>
            </Link>
          </motion.div>
        ))}
      </div>
      <TournamentDetailsFooter />
    </div>
  );
};

export default CashMatchPage;
