import Carousel, {
  Slider,
  SliderContainer,
  ThumsSlider,
} from "@/components/ui/carousel";
import { Slide } from "@/types/types";
import { Button } from "@nextui-org/react";
import { EmblaOptionsType } from "embla-carousel";
import Image from "next/image";
import Link from "next/link";
export const imgPreview = {
  img1: "https://images.unsplash.com/photo-1709949908058-a08659bfa922?q=80&w=1200&auto=format",
  img2: "https://images.unsplash.com/photo-1548192746-dd526f154ed9?q=80&w=1200&auto=format",
  img3: "https://images.unsplash.com/photo-1693581176773-a5f2362209e6?q=80&w=1200&auto=format",
  img4: "https://images.unsplash.com/photo-1584043204475-8cc101d6c77a?q=80&w=1200&auto=format",
  img5: "https://images.unsplash.com/photo-1709949908058-a08659bfa922?q=80&w=1200&auto=format",
  img6: "https://images.unsplash.com/photo-1518599904199-0ca897819ddb?q=80&w=1200&auto=format",
  img7: "https://images.unsplash.com/photo-1706049379414-437ec3a54e93?q=80&w=1200&auto=format",
  img8: "https://images.unsplash.com/photo-1709949908219-fd9046282019?q=80&w=1200&auto=format",
  img9: "https://images.unsplash.com/photo-1508873881324-c92a3fc536ba?q=80&w=1200&auto=format",
  img10:
    "https://images.unsplash.com/photo-1462989856370-729a9c1e2c91?q=80&w=1200&auto=format",
  img11:
    "https://images.unsplash.com/photo-1475727946784-2890c8fdb9c8?q=80&w=1200&auto=format",
  img12:
    "https://images.unsplash.com/photo-1546942113-a6c43b63104a?q=80&w=1200&auto=format",
  img13:
    "https://images.unsplash.com/photo-1462989856370-729a9c1e2c91?q=80&w=1200&auto=format",
  img14:
    "https://images.unsplash.com/photo-1462989856370-729a9c1e2c91?q=80&w=1200&auto=format",
  img15:
    "https://images.unsplash.com/photo-1532423622396-10a3f979251a?q=80&w=1200&auto=format",
  img16:
    "https://images.unsplash.com/photo-1490750967868-88aa4486c946?q=80&w=1200&auto=format",
  img17:
    "https://images.unsplash.com/photo-1496861083958-175bb1bd5702?q=80&w=1200&auto=format",
  img18:
    "https://images.unsplash.com/photo-1469212044023-0e55b4b9745a?q=80&w=1200&auto=format",
};

function SwiperWithBottomSlider({ slidesData }: { slidesData: Slide[] }) {
  const OPTIONS: EmblaOptionsType = { loop: true };
  return (
    <>
      <div className=" bg-background mx-auto">
        <Carousel options={OPTIONS} className=" relative" isAutoPlay={true}>
          <SliderContainer className="gap-2">
            {slidesData?.map((slide, index) => (
              <Slider
                key={index}
                className="xl:h-[800px] sm:h-[350px] h-[300px] w-full relative"
                thumnailSrc={slide.heroImage}
              >
                <Image
                  src={slide.bgImage}
                  width={1400}
                  height={800}
                  alt="image"
                  className="h-full rounded-lg w-full"
                />
                <div className="bg-gradient-to-b from-[#0808081a] via-[#0808088a]  to-[#000000ce] text-white  absolute bottom-0 left-0 w-full p-8">
                  <h5 className="text-xl font-bold ">{slide?.title}</h5>
                  <p className="mb-2">{slide?.subTitle}</p>
                  <Link href={`/tournament/cross-platform/${slide?.title}`}>
                    <Button className="rounded-none bg-primary px-6 py-[4px] text-black text-xs font-medium">
                      Join Now
                    </Button>
                  </Link>
                </div>
              </Slider>
            ))}
          </SliderContainer>
          <ThumsSlider />
        </Carousel>
      </div>
    </>
  );
}

export default SwiperWithBottomSlider;
