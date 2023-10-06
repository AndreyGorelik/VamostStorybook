export type Refresh = {
  userId: string | null;
  refreshToken: string | null;
};

export type RefreshResponse = {
  tokens: {
    accessToken: string;
    refreshToken: string;
  };
};
