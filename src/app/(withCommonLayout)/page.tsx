import CommunityTournaments from "@/components/home/CommunityTournaments/CommunityTournaments";
import HeroSlider from "@/components/home/HeroSlider/HeroSlider";
import JoinCommunity from "@/components/home/JoinCommunity/JoinCommunity";
import Matchfinder from "@/components/home/Matchfinder/Matchfinder";
import PlayersOfTheWeek from "@/components/home/PlayersOfTheWeek/PlayersOfTheWeek";
// import SingleCardSwiper from '@/components/ui/SingleCardSwiper/SingleCardSwiper';

const HomePage = () => {
  return (
    <div>
      <HeroSlider />
      <Matchfinder/>
      <CommunityTournaments />
      <JoinCommunity />
      <PlayersOfTheWeek />
    </div>
  );
};

export default HomePage;
