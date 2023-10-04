export type ConfirmCodeResponse = {
  tokens: {
    accessToken: string;
    refreshToken: string;
  };
  _id: string;
};
