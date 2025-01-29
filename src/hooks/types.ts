export type AuthTokens = {
    accessToken: string | null,
    refreshToken: string | null
}

export type AuthStore = {
    token: string | null;
    setToken: (accessToken?: string) => void;
    saveTokenToSessionStorage: (token: AuthTokens) => void;
    getTokenFromSessionStorage: () => AuthTokens | null;
    removeTokensFromSessionStorage: () => void;
};