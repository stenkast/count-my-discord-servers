const tokenKey = "discordToken";

export const saveTokenToLocalStorage = (token: string) => {
  localStorage.setItem(tokenKey, token);
};

export const getTokenFromLocalStorage = () => {
  const token = localStorage.getItem(tokenKey);
  return token ? token : "";
};
