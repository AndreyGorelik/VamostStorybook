export type ConfirmCodeResponse = {
  tokens: {
    access: string;
    refresh: string;
  };
  userId: string;
};
