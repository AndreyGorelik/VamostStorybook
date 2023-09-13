import { createSlice } from '@reduxjs/toolkit';

export interface ErrorState {
  authError: null | string;
  phoneNumberError: null | string;
  confirmCodeError: null | string;
  emailError: null | string;
  nicknameError: null | string;
  attributesError: null | string;
  photosError: null | string;
  postCreateError: null | string;
  getPackageError: null | string;
  getVenueError: null | string;
  getFullPackageError: null | string;
}

const initialState: ErrorState = {
  authError: null,
  phoneNumberError: null,
  confirmCodeError: null,
  emailError: null,
  nicknameError: null,
  attributesError: null,
  photosError: null,
  postCreateError: null,
  getPackageError: null,
  getVenueError: null,
  getFullPackageError: null,
};

const errorsSlice = createSlice({
  name: 'errorsSlice',
  initialState,
  reducers: {
    setAuthError(state, action) {
      state.authError = action.payload;
    },
    setPhoneNumberError(state, action) {
      state.phoneNumberError = action.payload;
    },
    setConfirmCodeError(state, action) {
      state.confirmCodeError = action.payload;
    },
    setEmailError(state, action) {
      state.emailError = action.payload;
    },
    setNicknameError(state, action) {
      state.nicknameError = action.payload;
    },
    setAttributesError(state, action) {
      state.attributesError = action.payload;
    },
    setPhotosError(state, action) {
      state.photosError = action.payload;
    },
    setPostCreateError(state, action) {
      state.postCreateError = action.payload;
    },
    setGetPackageError(state, action) {
      state.getPackageError = action.payload;
    },
    setGetVenuesError(state, action) {
      state.getPackageError = action.payload;
    },
    setGetFullPackageError(state, action) {
      state.getFullPackageError = action.payload;
    },
  },
});

export const {
  setAuthError,
  setPhoneNumberError,
  setConfirmCodeError,
  setEmailError,
  setNicknameError,
  setAttributesError,
  setPhotosError,
  setPostCreateError,
  setGetPackageError,
  setGetVenuesError,
  setGetFullPackageError,
} = errorsSlice.actions;

export default errorsSlice.reducer;
