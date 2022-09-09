import axios from "axios";
import Div100vh from "react-div-100vh";
import { useState } from "react";
import { InfoModal } from "./InfoModal";
import { InformationCircleIcon } from "@heroicons/react/24/solid";

export const App = () => {
  const [isInfoModalOpen, setIsInfoModalOpen] = useState(false);
  const [counting, setCounting] = useState(false);
  const [serverCount, setServerCount] = useState(null);
  const [token, setToken] = useState("");
  const [error, setError] = useState(false);

  const getReply = (amount) => {
    if (amount === 0) return "That can't be right...";
    if (amount === 1) return "Only one? You must have many friends.";
    if (amount >= 2 && amount <= 20) return "Yeah, sounds about right.";
    if (amount >= 21 && amount <= 50) return "Wow, that's a lot of servers.";
    if (amount >= 51 && amount <= 100)
      return "Let's be real, it's for porn and emojis.";
    if (amount >= 101 && amount <= 150)
      return "This number is still smaller than your weight.";
    if (amount >= 151 && amount <= 199) return "Your parents must be proud.";
    if (amount === 200) return "Touch some grass.";
  };

  const getServerCount = async () => {
    setError(false);
    if (!token) return;
    setCounting(true);
    const endPoint = "https://discord.com/api/users/@me/guilds";

    const { data } = await axios
      .get(endPoint, {
        headers: {
          Authorization: token,
        },
      })
      .catch(() => {
        setCounting(false);
        return setError(true);
      });

    if (error == false) {
      setCounting(false);
      setServerCount(data.length);
    }
  };

  return (
    <Div100vh>
      <div className="h-full w-full flex flex-col justify-center items-center bg-gray text-white">
        <div className="max-w-xl">
          <div className="flex gap-2 font-medium mb-4 border-2 rounded-md border-light-blue bg-light-blue/10 p-1">
            <div>
              <InformationCircleIcon className="w-8 h-8 fill-light-blue" />
            </div>
            <p>
              Sharing your token can be dangerous. This page does not use your
              token in any harmful way, but uses it to authenticate with Discord
              to get your server count.{" "}
              <a
                target="_blank"
                rel="noreferrer"
                href="https://github.com/stenkast/count-my-discord-servers"
                className="underline"
              >
                Source can be found here
              </a>
            </p>
          </div>
          <div className="flex flex-col gap-1 max-w-xl mx-auto w-full">
            <label className="font-semibold text-left">
              User Token{" "}
              <span
                className="text-blue cursor-pointer hover:text-dark-blue"
                onClick={() => setIsInfoModalOpen(true)}
              >
                (?)
              </span>
            </label>
            <input
              className="w-full p-2 rounded-md bg-dark-gray text-white placeholder:text-light-gray"
              value={token}
              onChange={(e) => setToken(e.target.value)}
              type="password"
              placeholder="Ek8Mof0kYrCSp.WlNM7SNDZ4x3ZqL01YjOA6INjdz2D4I.NwFdHLxoH2yGpN3RRzdQhP8G"
            />
          </div>
          <button
            onClick={getServerCount}
            type="button"
            className="mt-4 h-11 w-28 flex items-center justify-center rounded-md border border-transparent bg-blue text-base font-bold text-white shadow-sm hover:bg-dark-blue outline-none"
          >
            {counting ? (
              <svg
                className="animate-spin h-6 w-6 text-white"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                ></circle>
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                ></path>
              </svg>
            ) : (
              "Count"
            )}
          </button>
          <p className="text-white mt-4 h-10 min-h-full text-xl">
            {serverCount != null &&
              `You are in ${serverCount} servers at the moment. ${getReply(
                serverCount
              )}`}
            {error && "Something went wrong!"}
          </p>
        </div>
        <InfoModal
          isInfoModalOpen={isInfoModalOpen}
          setIsInfoModalOpen={setIsInfoModalOpen}
        />
      </div>
    </Div100vh>
  );
};

export default App;
