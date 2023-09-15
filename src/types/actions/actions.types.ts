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

export interface PostGetPackages {
  maxPeople: number;
  tags: string[];
  placeId: string;
}

export type Action<Payload = undefined> = Payload extends undefined
  ? { type: string }
  : { type: string; payload: Payload };

export type PostResponse = {
  location: string;
  othersCount: number;
  menCount: number;
  postStatus: string;
  name: string;
  venue: string;
  guestWomenCount: number;
  womenCount: number;
  date: string;
  imageUrl: string;
  packageId: string;
  guestOthersCount: number;
  userId: string;
  guestMenCount: number;
  description: string;
  id: string;
  tags: string[];
};

export interface Place {
  id: string;
  imageUrl: string;
  location: string;
  name: string;
  tags: string[];
  userId: string;
}

export interface Package {
  minSpend: number;
  date: string;
  imageUrl: string;
  maxPeople: number;
  userId: string;
  placeId: string;
  description: string;
  id: string;
  name: string;
  tags: string[];
  place: string;
}

export interface FullPackage {
  minSpend: number;
  date: string;
  imageUrl: string;
  maxPeople: number;
  userId: string;
  placeId: string;
  description: string;
  id: string;
  name: string;
  tags: string[];
  place: string;
}

export interface GetPackages {
  tags: string[];
  placeId: string;
  maxPeople: number;
}

type Gender = 'Man' | 'Woman' | 'Everyone';

export interface CreatePostData {
  gender: Gender[];
  date: string;
  description: string;
  guestMenCount: number;
  guestOthersCount: number;
  guestWomenCount: number;
  id: string;
  imageData: string;
  location: string;
  menCount: number;
  name: string;
  othersCount: number;
  packageId: string;
  tags: string[];
  venue: string;
  womenCount: number;
}
