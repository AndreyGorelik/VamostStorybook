export type SignInResponse = {
  tokens: {
    access: string;
    refresh: string;
  };
  phoneNumber: string;
  gender: string;
  sexualOrientation: string;
  nickName: string;
  shownGender: 'Man' | 'Woman' | 'Everyone' | null;
  email: string;
  birthdate: string;
  images: string[];
  phoneVerified: boolean;
  id: string;
};
