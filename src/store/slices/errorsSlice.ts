import { createSlice } from '@reduxjs/toolkit';

export interface ErrorState {
  authError: null | string;
  phoneNumberError: null | string;
  confirmCodeError: null | string;
  emailError: null | string;
  nicknameError: null | string;
  attributesError: null | string;
  photosError: null | string;
}

const initialState: ErrorState = {
  authError: null,
  phoneNumberError: null,
  confirmCodeError: null,
  emailError: null,
  nicknameError: null,
  attributesError: null,
  photosError: null,
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
} = errorsSlice.actions;

export default errorsSlice.reducer;
