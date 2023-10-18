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
  avatar: Photo | null;
  id: string;
  uploadingPhoto?: boolean;
  uploadingPhotoError?: string;
  deletingPhoto?: boolean;
  deletePhotoError?: string;
  savingEditedInfoError?: string;
  savingEditedInfo?: boolean;
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
  images: Photo[];
  avatar: Photo | null;
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
  avatar: null,
  id: '',
  uploadingPhoto: false,
  uploadingPhotoError: '',
  deletingPhoto: false,
  deletePhotoError: '',
  savingEditedInfo: false,
  savingEditedInfoError: '',
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
    setPhoto(state, action: PayloadAction<Photo>) {
      state.uploadingPhotoError = '';
      state.images.push(action.payload);
      state.uploadingPhoto = false;
    },
    setUploadingPhoto(state, action) {
      state.uploadingPhoto = action.payload;
    },
    setPhotoError(state, action) {
      state.uploadingPhotoError = action.payload;
      state.uploadingPhoto = false;
    },
    setDeletePhotoError(state, action) {
      state.deletePhotoError = action.payload;
      state.deletingPhoto = false;
    },
    setDeletingPhoto(state, action) {
      state.deletingPhoto = action.payload;
      state.deletePhotoError = '';
    },
    removePhoto(state, action) {
      state.images = state.images.filter((item) => item._id !== action.payload);
      state.deletePhotoError = '';
      state.deletingPhoto = false;
    },
    setEditedUserInfo(state, action: PayloadAction<PersonalInfoValues>) {
      state.email = action.payload.email;
      state.nickname = action.payload.nickname;
      state.gender = action.payload.gender;
      state.sexualOrientation = action.payload.sexualOrientation;
      state.birthdate = action.payload.birthdate;
      state.shownGender = action.payload.shownGender;
      state.savingEditedInfoError = '';
      state.savingEditedInfo = false;
    },
    setSavingEditedInfo(state, action) {
      state.savingEditedInfo = action.payload;
      state.savingEditedInfoError = '';
    },
    setSavingEditedInfoError(state, action) {
      state.savingEditedInfoError = action.payload;
      state.savingEditedInfo = false;
    },
    addPhoto(state, action: PayloadAction<Photo>) {
      state.images = [...state.images, action.payload];
      if (!state.avatar) {
        state.avatar = state.images[0];
      }
    },
    setAvatar(state, action: PayloadAction<Photo>) {
      state.avatar = action.payload;
    },
  },
});

export const ADD_NEW_PHOTO = 'userSlice/addNewPhoto';
export const addNewPhoto = createAction<string>(ADD_NEW_PHOTO);

export const DELETE_USER_PHOTO = 'userSlice/deletePhoto';
export const deleteUserPhoto = createAction<string>(DELETE_USER_PHOTO);

export const UPDATE_PERSONAL_INFO = 'userSlice/updatePersonalInfo';
export const updatePersonalInfo = createAction<PersonalInfoValues>(UPDATE_PERSONAL_INFO);

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
  setAvatar,
  addPhoto,
  setPhotoError,
  setUploadingPhoto,
  setPhoto,
  removePhoto,
  setDeletePhotoError,
  setDeletingPhoto,
  setSavingEditedInfo,
  setSavingEditedInfoError,
} = userSlice.actions;

export default userSlice.reducer;
