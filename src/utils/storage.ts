import { store } from "~/store";
import { setToken } from "~/store/auth";


export const setTokenStorage = (tokens: {
  accessToken: string;
  refreshToken: string;
}) => {
  localStorage.setItem('tokens', JSON.stringify(tokens));
  store.dispatch(setToken(tokens))
};

export const getTokenStorage = () => {
  const tokens = localStorage.getItem('tokens');
  if (tokens) return JSON.parse(tokens);
  return '';
};

export const cleanTokenStorage = () => {
    localStorage.removeItem('tokens');
    store.dispatch(setToken({accessToken:'',refreshToken:''}))
  };