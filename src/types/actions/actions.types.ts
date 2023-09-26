export type LoginUser = { phoneNumber: string; password: string };
export type RegisterUser = { phoneNumber: string; password: string };
export type ConfirmCode = { phoneNumber: string; code: string };
export type RegisterEmail = { email: string };
export type RegisterNickname = { nickName: string };
export type RegisterAttributes = {
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
  shownGender: 'Man' | 'Woman' | 'Everyone' | null | string;
  birthdate: string;
};
export type RegisterPhoto = { imageData: string };

export type Action<Payload = undefined> = Payload extends undefined
  ? { type: string }
  : { type: string; payload: Payload };

export type PostResponse = {
  location: string;
  othersCount: number;
  menCount: number;
  postStatus: PostStatus;
  name: string;
  venue: string;
  guestWomenCount: number;
  womenCount: number;
  date: string;
  imageUrl: string;
  packageId: string;
  guestOthersCount: number;
  host: GuestType;
  guestMenCount: number;
  description: string;
  id: string;
  tags: PossibleTags[];
  guests: GuestType[];
};

export type PossibleTags = 'food' | 'drinks' | 'dance' | 'hookah';

export type PostStatus = 'Confirmed' | 'Completed' | 'Created' | 'Cancelled';

export type GuestType = {
  avatar: string;
  nickName: string;
  id: string;
  gender: {
    value: 'Man' | 'Woman' | 'Other' | null;
    isShown: boolean;
  };
};