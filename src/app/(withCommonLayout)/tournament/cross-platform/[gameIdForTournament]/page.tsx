import BannerForTournament from "@/components/TournamentComponent/Tournament/BannerForTournament/BannerForTournament";
import ConditionalTabContent from "@/components/TournamentComponent/Tournament/ConditionalTabContent/ConditionalTabContent";

interface GameForTournamentPageProps {
  params: Promise<{
    gameIdForTournament: string;
  }>;
}

const GameForTournamentPage = async ({
  params,
}: GameForTournamentPageProps) => {
  const { gameIdForTournament } = await params;
  console.log(gameIdForTournament);

  return (
    <div>
      <BannerForTournament />
      <ConditionalTabContent />
    </div>
  );
};

export default GameForTournamentPage;
