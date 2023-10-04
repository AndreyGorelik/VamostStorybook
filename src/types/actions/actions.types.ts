export type LoginUser = { phoneNumber: string; password: string };
export type RegisterUser = { phoneNumber: string; password: string };
export type ConfirmCode = { phoneNumber: string; code: string };
export type RegisterEmail = { email: string };
export type RegisterNickname = { nickName: string };
export type RegisterBirthDate = { birthDate: string };
export type RegisterAttributes = {
  gender: UserGender;
  sexualOrientation: SexualOrientation;
  shownGender: 'Man' | 'Woman' | 'Everyone' | null | string;
  birthDate: string;
};
export type RegisterPhoto = FormData;
export type SexualOrientation = {
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
  hostType: 'Guest' | 'Host';
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

export type ShownGender = 'Man' | 'Woman' | 'Everyone';
export type UserGender = {
  value: 'Man' | 'Woman' | 'Other' | null;
  isShown: boolean;
};

export interface CreatePostData {
  name: string;
  date: string;
  location: string;
  tags: string[];
  venue: string;
  menCount: number;
  womenCount: number;
  othersCount: number;
  gender: ShownGender[];
  description: string;
  guestMenCount: number;
  guestOthersCount: number;
  guestWomenCount: number;
  id: string;
  imageData: string;
  packageId: string;
}
export type PossibleTags = 'food' | 'drinks' | 'dance' | 'hookah';

export type PostStatus = 'Active' | 'Complete' | 'New' | 'Cancelled';

export type GuestType = {
  avatar: string;
  nickName: string;
  id: string;
  gender: {
    value: 'Man' | 'Woman' | 'Other' | null;
    isShown: boolean;
  };
};

export type PostInfo = {
  info: PostResponse | null;
  isUsersPost: boolean;
} | null;
