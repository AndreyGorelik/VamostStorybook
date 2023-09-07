import { PayloadAction, createAction, createSlice } from '@reduxjs/toolkit';
import {
  REGISTER_USER,
  CONFIRM_CODE,
  REGISTER_EMAIL,
  REGISTER_NICKNAME,
  REGISTER_ATTRIBUTES,
  REGISTER_PHOTO,
  REFRESH,
} from '@shared/constants/actions';

import {
  ConfirmCode,
  LoginUser,
  RegisterAttributes,
  RegisterEmail,
  RegisterNickname,
  RegisterPhoto,
  RegisterUser,
} from '../../types/actions/actions.types';

import { LOGIN_USER } from './userSlice';

export interface AuthState {
  isAuth: boolean;
  step: number;
  isLoading: boolean;
  signUpFinished: boolean;
}

const initialState: AuthState = {
  isAuth: false,
  step: 1,
  isLoading: false,
  signUpFinished: false,
};

const authSlice = createSlice({
  name: 'authSlice',
  initialState,
  reducers: {
    loginUserSuccess(state) {
      state.isAuth = true;
    },
    logoutUser(state) {
      state.isAuth = false;
    },
    setNextStep(state) {
      state.step += 1;
    },
    setPrevStep(state) {
      state.step -= 1;
    },
    setStep(state, action: PayloadAction<number>) {
      state.step = action.payload;
    },
    setIsLoading(state, action: PayloadAction<boolean>) {
      state.isLoading = action.payload;
    },
    setSignUpFinished(state, action: PayloadAction<boolean>) {
      state.signUpFinished = action.payload;
    },
  },
});

export const loginUser = createAction<LoginUser>(LOGIN_USER);

export const registerUser = createAction<RegisterUser>(REGISTER_USER);

export const confirmCode = createAction<ConfirmCode>(CONFIRM_CODE);

export const registerEmail = createAction<RegisterEmail>(REGISTER_EMAIL);

export const registerNickname = createAction<RegisterNickname>(REGISTER_NICKNAME);

export const registerAttributes = createAction<RegisterAttributes>(REGISTER_ATTRIBUTES);

export const registerPhoto = createAction<RegisterPhoto>(REGISTER_PHOTO);

export const refresh = createAction(REFRESH);

export const {
  loginUserSuccess,
  logoutUser,
  setNextStep,
  setPrevStep,
  setIsLoading,
  setStep,
  setSignUpFinished,
} = authSlice.actions;

export default authSlice.reducer;
