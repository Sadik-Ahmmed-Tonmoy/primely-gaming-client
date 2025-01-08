"use client";
import SingleCardSwiper from "@/components/ui/SingleCardSwiper/SingleCardSwiper";
import SwiperWithBottomSlider from "@/components/ui/SwiperWithBottomSlider/SwiperWithBottomSlider";
import { Slide } from "@/types/types";
import { Button } from "@nextui-org/react";
import Link from "next/link";
import { useState } from "react";

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
];

const HeroSlider = () => {
  const [selectedItemIndex, setSelectedItemIndex] = useState(0);
  const selectedSlide = slidesData[selectedItemIndex];
  return (
    <>
      {/* pc start */}
      <div
        className=" bg-cover bg-top h-full w-full relative mb-10 sm:mb-20 hidden lg:block"
        style={{
          backgroundImage: `url(${selectedSlide.bgImage})`,

          // backgroundPosition: "center",
          transition: "background-image 0.5s ease-in-out",
        }}
      >
        <div className="h-full w-full bg-black bg-opacity-50">
          <div className="grid grid-cols-2 ">
            <div className=" relative">
              <div className="absolute top-0 bottom-0 left-0 right-0 flex justify-center items-center">
                <div className=" p-8 b-[radial-gradient(ellipse_at_center,_rgba(0,0,0,0.6),_transparent)]">
                  <h3 className="text-4xl font-bold text-white">
                    {selectedSlide?.title}
                  </h3>
                  <p className="font-semibold text-white mb-3">
                    {selectedSlide?.subTitle}
                  </p>
                  <Link href={`/tournament/cross-platform/${selectedSlide?.title}`}>
                    <Button className="rounded-none bg-primary-light px-8 py-2 text-white text-base font-medium">
                      Join Now
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
            <div className="">
              <SingleCardSwiper
                slidesData={slidesData}
                setSelectedItemIndex={setSelectedItemIndex}
              />
            </div>
          </div>
        </div>
      </div>
      {/* pc end */}
      {/* mobile start */}
      <div className="block lg:hidden mb-5">
        <SwiperWithBottomSlider slidesData={slidesData} />
      </div>
      {/* mobile end */}
    </>
  );
};

export default HeroSlider;
