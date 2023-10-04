import { Photo } from 'src/store/slices/profileSlice';

import { SexualOrientation, UserGender } from '../actions/actions.types';

export type SignInResponse = {
  tokens: {
    accessToken: string;
    refreshToken: string;
  };
  phoneNumber: string;
  gender: UserGender;
  sexualOrientation: SexualOrientation;
  nickName: string;
  shownGender: 'Man' | 'Woman' | 'Everyone' | null;
  email: string;
  birthdate: string;
  images: Photo[];
  avatar: string;
  phoneVerified: boolean;
  _id: string;
};
