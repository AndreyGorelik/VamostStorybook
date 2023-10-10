import { PayloadAction, createAction, createSlice } from '@reduxjs/toolkit';
import { PersonalInfoValues } from '@screens/user/account/components/personalInfo/personalInfo.types';
import { UserGender } from 'src/types/actions/actions.types';

import { Photo } from './profileSlice';

export interface UserState {
  phoneNumber: string;
  email: string;
  nickname: string;
  gender: UserGender;
  phoneVerified: boolean;
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
  shownGender: 'Man' | 'Woman' | 'Everyone' | null;
  birthdate: string;
  images: Photo[];
  avatar: string;
  editInfoError?: string;
  photoError?: string;
  uploadingPhoto?: boolean;
}

export type UserInfo = {
  phoneNumber: string;
  email: string;
  nickname: string;
  gender: {
    value: 'Man' | 'Woman' | 'Other' | null;
    isShown: boolean;
  };
  phoneVerified: boolean;
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
  shownGender: 'Man' | 'Woman' | 'Everyone' | null;
  birthdate: string;
  images: string[];
  avatar: string;
};

export const initialState: UserState = {
  phoneNumber: '',
  email: '',
  nickname: '',
  gender: {
    value: null,
    isShown: false,
  },
  sexualOrientation: {
    value: null,
    isShown: false,
  },
  shownGender: null,
  birthdate: '',
  images: [],
  phoneVerified: false,
  avatar: '',
  photoError: '',
  uploadingPhoto: false,
};

const userSlice = createSlice({
  name: 'userSlice',
  initialState,
  reducers: {
    setUser(state, action: PayloadAction<UserState>) {
      return { ...state, ...action.payload };
    },
    setPhoneNumber(state, action) {
      state.phoneNumber = action.payload;
    },
    setEmail(state, action) {
      state.email = action.payload;
    },
    setNickname(state, action) {
      state.nickname = action.payload;
    },
    setGender(state, action) {
      state.gender = action.payload;
    },
    setSexualOrientation(state, action) {
      state.sexualOrientation = action.payload;
    },
    setShownGender(state, action) {
      state.shownGender = action.payload;
    },
    setBirthDate(state, action) {
      state.birthdate = action.payload;
    },
    setEditedUserInfo(state, action: PayloadAction<PersonalInfoValues>) {
      state.phoneNumber = action.payload.phoneNumber;
      state.email = action.payload.email;
      state.nickname = action.payload.nickname;
      state.gender = action.payload.gender;
      state.sexualOrientation = action.payload.sexualOrientation;
      state.birthdate = action.payload.birthdate;
    },
    setPhoto(state, action: PayloadAction<Photo>) {
      state.photoError = '';
      state.images.push(action.payload);
      state.uploadingPhoto = false;
    },
    setUploadingPhoto(state, action) {
      state.uploadingPhoto = action.payload;
    },
    setPhotoError(state, action) {
      state.photoError = action.payload;
      state.uploadingPhoto = false;
    },
  },
});

export const ADD_NEW_PHOTO = 'userSlice/addNewPhoto';
export const addNewPhoto = createAction<FormData[]>(ADD_NEW_PHOTO);

export const {
  setPhoneNumber,
  setEmail,
  setNickname,
  setGender,
  setSexualOrientation,
  setShownGender,
  setBirthDate,
  setUser,
  setEditedUserInfo,
  setPhotoError,
  setUploadingPhoto,
  setPhoto,
} = userSlice.actions;

export default userSlice.reducer;
