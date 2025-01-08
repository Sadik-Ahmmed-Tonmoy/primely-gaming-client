import EarnedTrophies from "@/components/Profile/EarnedTrophies";
import ProfileInfo from "@/components/Profile/ProfileInfo";
import ProfileRankAndEarnings from "@/components/Profile/ProfileRankAndEarnings";
import ProfileTabOptions from "@/components/Profile/ProfileTabOptions";
import Banner from "@/components/ui/Banner/Banner";
import Image from "next/image";
import React from "react";

interface ProfileProps {
  params: Promise<{
    profileId: string;
  }>;
}

const ProfilePage = async ({ params }: ProfileProps) => {
  const { profileId } = await params;
  console.log(profileId);
  return (
    <>
      <div className="relative mb-24">
        {/* Banner start */}
        <Banner url="https://img.freepik.com/premium-vector/professional-esports-logo-template-game-team-gaming-tournament_126068-307.jpg" />
        {/* Banner end */}

        {/* Profile details start*/}
        <ProfileInfo />
        {/* Profile details end*/}
      </div>
      <div className="container">
        {/*  Profile Rank And Earnings start*/}
        <ProfileRankAndEarnings />
        {/*  Profile Rank And Earnings end*/}
        {/* Earned Trophies start */}
        <EarnedTrophies />
        {/* Earned Trophies end */}
        {/* profile tab start */}
        <ProfileTabOptions/>
        {/* profile tab end */}
      </div>
    </>
  );
};

export default ProfilePage;
