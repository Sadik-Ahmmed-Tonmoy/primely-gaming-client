import React from "react";


interface ItemProps {
  image?: string;
  icon?: React.ReactNode;
  header: string;
  description: string;
}

const JoinCommunityCard = ({ item }: { item: ItemProps }) => {
  return (
    <div className="dark:bg-cardBackgroundColor py-10 flex items-center justify-center flex-col border-t-[6px] border-[#404040] shadow-md">
      <div className="h-[80px] w-[80px] mb-3">
      {/* <Image
        alt="image"
        className="mb-[10px]"
        height={80}
        width={80}
        src={item.image}
      /> */}
   
      {item?.icon}
      </div>
      <p className="font-bold text-[21px] mb-1">{item.header}</p>
      <p className="text-sm text-gray">{item.description}</p>
    </div>
  );
};

export default JoinCommunityCard;
