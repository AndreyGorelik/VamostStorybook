import { PayloadAction, createSlice } from '@reduxjs/toolkit';

export interface ErrorState {
  authError: null | string;
  phoneNumberError: null | string;
  confirmCodeError: null | string;
  emailError: null | string;
  nicknameError: null | string;
  attributesError: null | string;
  photosError: null | string;
  postsError: null | string;
  requestError: null | string;
}

const initialState: ErrorState = {
  authError: null,
  phoneNumberError: null,
  confirmCodeError: null,
  emailError: null,
  nicknameError: null,
  attributesError: null,
  photosError: null,
  postsError: null,
  requestError: null,
};

const errorsSlice = createSlice({
  name: 'errorsSlice',
  initialState,
  reducers: {
    setAuthError(state, action: PayloadAction<string | null>) {
      state.authError = action.payload;
    },
    setPhoneNumberError(state, action: PayloadAction<string | null>) {
      state.phoneNumberError = action.payload;
    },
    setConfirmCodeError(state, action: PayloadAction<string | null>) {
      state.confirmCodeError = action.payload;
    },
    setEmailError(state, action: PayloadAction<string | null>) {
      state.emailError = action.payload;
    },
    setNicknameError(state, action: PayloadAction<string | null>) {
      state.nicknameError = action.payload;
    },
    setAttributesError(state, action: PayloadAction<string | null>) {
      state.attributesError = action.payload;
    },
    setPhotosError(state, action: PayloadAction<string | null>) {
      state.photosError = action.payload;
    },
    setPostsError(state, action: PayloadAction<string | null>) {
      state.postsError = action.payload;
    },
    setRequestError(state, action: PayloadAction<string | null>) {
      state.requestError = action.payload;
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
  setPostsError,
  setRequestError,
} = errorsSlice.actions;

export default errorsSlice.reducer;
