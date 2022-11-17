const tokenKey = "discordToken";

export const saveTokenToSessionStorage = (token: string) => {
  sessionStorage.setItem(tokenKey, token);
};

export const getTokenFromSessionStorage = () => {
  const token = sessionStorage.getItem(tokenKey);
  return token ? token : "";
};
