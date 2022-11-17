import { InformationCircleIcon } from "@heroicons/react/24/solid";
import { useState } from "react";
import Div100vh from "react-div-100vh";
import { InfoModal, Button } from "./components";
import { getGuilds, getReply } from "./utils/functions";
import { getTokenFromLocalStorage, saveTokenToLocalStorage } from "./utils/localStorage";
import { Done } from "./utils/types";

export default function App() {
  const [isInfoModalOpen, setIsInfoModalOpen] = useState<boolean>(false);
  const [counting, setCounting] = useState<boolean>(false);
  const [serverCount, setServerCount] = useState<number | null>(null);
  const [token, setToken] = useState<string>(getTokenFromLocalStorage);
  const [done, setDone] = useState<Done>({
    error: false,
    message: "",
  });

  const getGuildCount = async () => {
    setDone({ error: false, message: "" });
    setCounting(false);
    if (counting) return;
    if (!token) return;
    setCounting(true);
    const { guilds, error, message } = await getGuilds(token);
    if (error) {
      setCounting(false);
      setDone({ error, message });
      return;
    }
    saveTokenToLocalStorage(token);
    setCounting(false);
    setServerCount(guilds.length);
  };

  return (
    <Div100vh>
      <div className="h-full flex justify-center bg-gray text-white">
        <div className="max-w-xl mt-8">
          <div className="flex gap-2 font-medium mb-4 border-2 rounded-md border-light-blue bg-light-blue/10 p-1">
            <div>
              <InformationCircleIcon className="w-8 h-8 fill-light-blue" />
            </div>
            <p>
              Sharing your token can be dangerous. This page does not use your token in any harmful
              way, but uses it to authenticate with Discord to get your server count.{" "}
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
          <Button label="Count" disabled={counting} counting={counting} onClick={getGuildCount} />
          <p className="text-white mt-4 h-10 text-xl">
            {serverCount &&
              `You are in ${serverCount} servers at the moment. ${getReply(serverCount)}`}
            {done.error && done.message}
          </p>
        </div>
        <InfoModal isInfoModalOpen={isInfoModalOpen} setIsInfoModalOpen={setIsInfoModalOpen} />
      </div>
    </Div100vh>
  );
}
