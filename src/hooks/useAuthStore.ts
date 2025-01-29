import { create } from 'zustand';
import { API_ACCESS_TOKEN_KEY, API_REFRESH_TOKEN_KEY } from '../consts';
import { AuthStore, AuthTokens } from './types';


export const useAuthStore = create<AuthStore>((set) => ({
  token: null,
  setToken: (token) => set(() => ({ token })),
  saveTokenToSessionStorage: (token: AuthTokens) => {
    sessionStorage.setItem(API_ACCESS_TOKEN_KEY, token.accessToken!);
    sessionStorage.setItem(API_REFRESH_TOKEN_KEY, token.refreshToken!);
  },
  getTokenFromSessionStorage: (): AuthTokens | null => {
    if (!sessionStorage.getItem(API_ACCESS_TOKEN_KEY)){
      return null;
    }
    return {
      accessToken: sessionStorage.getItem(API_ACCESS_TOKEN_KEY),
      refreshToken: sessionStorage.getItem(API_REFRESH_TOKEN_KEY),
    };
  },
  removeTokensFromSessionStorage: () => set(() => {
    sessionStorage.removeItem(API_ACCESS_TOKEN_KEY);
    sessionStorage.removeItem(API_REFRESH_TOKEN_KEY);
    return { token: undefined };
  }),
}));