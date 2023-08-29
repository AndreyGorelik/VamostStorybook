export type SignInResponse = {
  tokens: {
    access: string;
    refresh: string;
  };
  phoneNumber: string;
  sexualOrientation: {
    value: string;
    isShown: boolean;
  };
  nickName: string;
  shownGender: string;
  email: string;
  gender: {
    value: string;
    isShown: boolean;
  };
  birthdate: string;
  images: string[];
  phoneVerified: boolean;
  id: string;
};
