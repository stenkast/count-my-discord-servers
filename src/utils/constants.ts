export const API = {
  baseUrl: "https://discord.com/api/v10",
  guilds: "/users/@me/guilds",
  request: async (method: string, endPoint: string, token: string) => {
    return await fetch(API.baseUrl + endPoint, {
      method,
      headers: {
        Authorization: token,
      },
    });
  },
};
