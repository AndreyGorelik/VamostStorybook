export type SignInResponse = {
  tokens: {
    access: string;
    refresh: string;
  };
  phoneNumber: string;
  gender: {
    value: 'Man' | 'Woman' | 'Other' | null;
    isShown: boolean;
  };
  sexualOrientation: {
    value:
      | 'Straight'
      | 'Gay'
      | 'Lesbian'
      | 'Bisexual'
      | 'Asexual'
      | 'Demisexual'
      | 'Pansexual'
      | 'Queer'
      | null;
    isShown: boolean;
  };
  nickName: string;
  shownGender: 'Man' | 'Woman' | 'Everyone' | null;
  email: string;
  birthdate: string;
  images: string[];
  phoneVerified: boolean;
  id: string;
};
