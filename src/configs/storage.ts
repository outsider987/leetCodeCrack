export const setTokenStorage = (tokens: {
  accessToken: string;
  refreshToken: string;
}) => {
  localStorage.setItem('tokens', JSON.stringify(tokens));
};

export const getTokenStorage = () => {
  const tokens = localStorage.getItem('tokens');
  if (tokens) return JSON.parse(tokens);
  return '';
};
