import { Button } from "@nextui-org/react";
import { CiCircleChevDown, CiCircleChevUp } from "react-icons/ci";
import { motion } from "framer-motion"; // Import motion from framer-motion
import Image from "next/image";


const mockData = [
  {
    id: 1,
    entry: "$1.30",
    teamSize: "2v2",
    competition: "NA | CMG Search and Destroy | Best of 3",
    support: "Live Support",
    platform: "Cross-Platform",
    skill: "All Skills",
    image:
      "https://staticctf.ubisoft.com/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/30dd8syYR9JAPhV759qTQe/66e1f4978d8a6ff11201bc1c6dd7b7f9/acm-boxshot.jpg?imwidth=360",
  },
  {
    id: 2,
    entry: "$1.00",
    teamSize: "1v1",
    competition: "NA + EU | CMG Hardpoint | Best of 1",
    support: "Live Support",
    platform: "Cross-Platform",
    skill: "All Skills",
    image:
      "https://static0.gamerantimages.com/wordpress/wp-content/uploads/2022/11/PUBG-MOBILE.jpg",
  },
  {
    id: 3,
    entry: "$1.00",
    teamSize: "1v1",
    competition: "NA | CMG Hardpoint | Best of 1",
    support: "Live Support",
    platform: "Cross-Platform",
    skill: "All Skills",
    image:
      "https://wallpapers.com/images/hd/yellow-call-of-duty-phone-qh4ng5sccotp6hlh.jpg",
  },
  {
    id: 4,
    entry: "$1.00",
    teamSize: "4v4",
    competition: "NA | CMG Search and Destroy | Best of 3",
    support: "Live Support",
    platform: "Cross-Platform",
    skill: "All Skills",
    image:
      "https://m.media-amazon.com/images/M/MV5BZTA3Y2I2NTctZjJiMi00M2RmLTliZWUtOWY0YzAzMTc1Y2Y5XkEyXkFqcGc@._V1_.jpg",
  },
  {
    id: 5,
    entry: "$1.00",
    teamSize: "1v1",
    competition: "EU | Gunfight | Best of 1",
    support: "Tickets",
    platform: "Cross-Platform",
    skill: "All Skills",
    image:
      "https://m.media-amazon.com/images/M/MV5BODJhMDFhYWQtMDk0ZS00MjNhLTlhNTUtMzZjNWIyNTIxNjgzXkEyXkFqcGc@._V1_.jpg",
  },
  {
    id: 6,
    entry: "$1.00",
    teamSize: "2v2",
    competition: "EU | CMG Search and Destroy | Best of 3",
    support: "Live Support",
    platform: "Cross-Platform",
    skill: "All Skills",
    image:
      "https://staticctf.ubisoft.com/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/30dd8syYR9JAPhV759qTQe/66e1f4978d8a6ff11201bc1c6dd7b7f9/acm-boxshot.jpg?imwidth=360",
  },
  {
    id: 7,
    entry: "$1.00",
    teamSize: "3v3",
    competition: "NA + EU | CMG Search and Destroy | Best of 3",
    support: "Live Support",
    platform: "Cross-Platform",
    skill: "All Skills",
    image:
      "https://wallpapers.com/images/hd/yellow-call-of-duty-phone-qh4ng5sccotp6hlh.jpg",
  },
];
const ResponsiveTable = () => {
  return (
    <div>
      {/* Responsive Table */}
      <div className="overflow-hidden">
        <table className="min-w-full text-left border-collapse text-xs sm:text-base">
          <thead>
            <tr className="dark:bg-primary-light bg-purple-50">
              <th className="p-3 hidden sm:block">Game</th>
              <th className="p-3">Platform</th>
              <th className="p-3 hidden sm:table-cell">Entry</th>
              <th className="p-3 hidden md:table-cell">Team Size</th>
              <th className="p-3 hidden lg:table-cell">Competition</th>
              <th className="p-3 hidden lg:table-cell">Skill Level</th>
              <th className="p-3 hidden xl:table-cell">Support</th>
              <th className="p-3">Starting</th>
              <th className="p-3">Info</th>
            </tr>
          </thead>
          <tbody>
            {mockData.map((item, index) => (
              <motion.tr
                key={item.id}
                className="bg-gray-900 hover:bg-gray-800 border-b border-gray-700"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0 }}
                transition={{
                  type: "spring",
                  stiffness: 150,
                  damping: 11,
                  duration: 0.3,
                  delay: index * 0.05,
                }}
              >
                <td className="p-3 hidden sm:block">
                  <Image
                    src={item?.image}
                    alt="Game"
                    width={50}
                    height={50}
                    className="rounded"
                  />
                </td>
                <td className="p-3">{item.platform}</td>
                <td className="p-3 hidden sm:table-cell text-primary-light font-bold">
                  {item.entry}
                </td>
                <td className="p-3 hidden md:table-cell">{item.teamSize}</td>
                <td className="p-3 hidden lg:table-cell">{item.competition}</td>
                <td className="p-3 hidden lg:table-cell">{item.skill}</td>
                <td className="p-3 hidden xl:table-cell">{item.support}</td>
                <td className="p-3">Available now</td>
                <td className="p-3">
                  <Button className="rounded-none bg-primary-light px-2 py-1 sm:px-8 sm:py-2 text-white text-base font-medium">
                    Accept
                  </Button>
                </td>
              </motion.tr>
            ))}
          </tbody>
        </table>
        <div className="flex items-center justify-between w-full pb-5">
          <div className="mt-4 text-sm text-gray-400">
            14 of 14 Cash Matches
          </div>
          <div className="flex gap-4 items-center text-primary-light me-4 py-2">
            <CiCircleChevUp size={50} className="cursor-pointer" />

            <CiCircleChevDown size={50} className="cursor-pointer" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResponsiveTable;

