import { useCallback, useEffect, useState } from "react";
import Button from "../components/Button";
import ClickCount from "../components/ClickCount";
import styles from "../styles/home.module.css";
import useProfile from "../store/useProfileStore";
import ProfileHeader from "../components/profileHeader";
import RepoCard from "../components/RepoCard";
import StatsChart from "../components/StatsChart";

function Home() {
  const { profile, repos, isLoading, error, fetchGithubData } = useProfile();
  const [username, setUsername] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    fetchGithubData(username);
  };

  return (
    <div className="p-2 max-w-7xl mx-auto">
      <h1 className="text-3xl text-center my-4 uppercase">
        Search GitHub Details of a User
      </h1>
      <div className="h-0.5 bg-gray-800 relative left-1/2 right-1/2 ml-[-50vw] mr-[-50vw] w-screen"></div>
      <form
        action=""
        onSubmit={handleSubmit}
        className="flex gap-4 justify-center items-center my-4"
      >
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Enter Github Username"
          className="w-md px-1 py-2 border-2 rounded-sm border-green-400"
        />
        <button
          type="submit"
          className="px-5 py-2 rounded-sm cursor-pointer bg-blue-500 text-white text-lg hover:bg-blue-600/80 active:scale-95 active:shadow-lg duration-200 transition-all"
        >
          Get Details
        </button>
      </form>
      {isLoading && (
        <div className="text-sm text-blue-500">Loading, please wait!!</div>
      )}
      {error && (
        <div className="text-sm text-red-500">
          Error occurred, please try again
        </div>
      )}
      <div className="flex flex-col gap-6">
        {profile && (
          <>
            <ProfileHeader profile={profile} />
            <RepoCard repos={repos} name={profile.login} />
            <StatsChart />
          </>
        )}
      </div>
    </div>
  );
}

export default Home;
