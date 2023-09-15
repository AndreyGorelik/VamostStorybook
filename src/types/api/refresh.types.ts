export type Refresh = {
  userId: string | null;
  refreshToken: string | null;
};

export type RefreshResponse = {
  tokens: {
    access: string;
    refresh: string;
  };
};
