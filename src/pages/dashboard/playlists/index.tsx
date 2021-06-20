import AllPlaylists from "../../../components/Dashboard/AllPlaylists";
import CardStats from "../../../components/Dashboard/CardStats";
import HeaderStatsPlaylists from "../../../components/Dashboard/HeaderStatsPlaylists";

const playlists = () => {
  return (
    <>
      <HeaderStatsPlaylists />
      <div className="lg:-mt-4">
        <AllPlaylists />
      </div>
    </>
  );
};

export default playlists;
