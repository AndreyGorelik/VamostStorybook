import { PayloadAction, createAction, createSlice } from '@reduxjs/toolkit';
import {
  CONFIRM_CODE,
  LOGIN_USER,
  REFRESH,
  REGISTER_ATTRIBUTES,
  REGISTER_EMAIL,
  REGISTER_NICKNAME,
  REGISTER_PHOTO,
  REGISTER_USER,
} from '@shared/constants/actions';

import {
  ConfirmCode,
  LoginUser,
  RegisterAttributes,
  RegisterEmail,
  RegisterNickname,
  RegisterUser,
} from '../../types/actions/actions.types';

export interface AuthState {
  isAuth: boolean;
  step: number;
  isLoading: boolean;
  signUpFinished: boolean;
  error: string | null;
}

const initialState: AuthState = {
  isAuth: false,
  step: 0,
  isLoading: false,
  signUpFinished: false,
  error: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    loginUserSuccess(state) {
      state.isAuth = true;
      state.error = null;
      state.isLoading = false;
    },
    logoutUser(state) {
      state.isAuth = false;
      state.signUpFinished = false;
    },
    setNextStep(state) {
      state.step += 1;
      state.isLoading = false;
      state.error = null;
    },
    setPrevStep(state) {
      state.step -= 1;
    },
    setStep(state, action: PayloadAction<number>) {
      state.step = action.payload;
      state.isLoading = false;
      state.error = null;
    },
    setSignUpFinished(state, action: PayloadAction<boolean>) {
      state.signUpFinished = action.payload;
      state.isLoading = false;
      state.error = null;
    },
    setAuthError(state, action: PayloadAction<string | null>) {
      state.error = action.payload;
      state.isLoading = false;
    },
    loginUser(state) {
      state.isLoading = true;
      state.error = null;
    },
    signUpUser(state) {
      state.isLoading = true;
      state.error = null;
    },
    confirmCode(state) {
      state.isLoading = true;
      state.error = null;
    },
    registerEmail(state) {
      state.isLoading = true;
      state.error = null;
    },
    registerNickname(state) {
      state.isLoading = true;
      state.error = null;
    },
    registerAttributes(state) {
      state.isLoading = true;
      state.error = null;
    },
    registerPhotos(state) {
      state.isLoading = true;
      state.error = null;
    },
    refresh(state) {
      state.isLoading = true;
      state.error = null;
    },
  },
});

export const loginUserAction = createAction<LoginUser>(LOGIN_USER);

export const registerUser = createAction<RegisterUser>(REGISTER_USER);

export const confirmCodeAction = createAction<ConfirmCode>(CONFIRM_CODE);

export const registerEmailAction = createAction<RegisterEmail>(REGISTER_EMAIL);

export const registerNicknameAction = createAction<RegisterNickname>(REGISTER_NICKNAME);

export const registerAttributesAction = createAction<RegisterAttributes>(REGISTER_ATTRIBUTES);

export const registerPhotoAction = createAction<FormData[]>(REGISTER_PHOTO);

export const refresh = createAction(REFRESH);
export const {
  loginUserSuccess,
  logoutUser,
  setNextStep,
  setPrevStep,
  setStep,
  setSignUpFinished,
  setAuthError,
  loginUser,
  registerAttributes,
  registerEmail,
  registerNickname,
  registerPhotos,
  confirmCode,
  signUpUser,
} = authSlice.actions;

export default authSlice.reducer;
