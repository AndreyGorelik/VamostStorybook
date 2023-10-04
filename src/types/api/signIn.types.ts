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
  birthDate: string;
  images: Photo[];
  avatar: Photo;
  phoneVerified: boolean;
  _id: string;
};
