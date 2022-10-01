import { API } from "./constants";

export const getReply = (amount: number) => {
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

export const getGuilds = async (token: string) => {
  let res = await API.request("GET", API.guilds, token);
  if (!res.ok) {
    return {
      guilds: [],
      error: true,
      message: "Could not count guilds.",
    };
  }
  const guilds = await res.json();
  return {
    guilds: guilds,
    error: false,
    message: "",
  };
};
