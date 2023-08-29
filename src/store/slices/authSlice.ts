import { PayloadAction, createAction, createSlice } from '@reduxjs/toolkit';
import {
  REGISTER_USER,
  CONFIRM_CODE,
  REGISTER_EMAIL,
  REGISTER_NICKNAME,
  REGISTER_ATTRIBUTES,
  REGISTER_PHOTO,
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
}

const initialState: AuthState = {
  isAuth: false,
  step: 1,
  isLoading: false,
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
    setIsLoading(state, action: PayloadAction<boolean>) {
      state.isLoading = action.payload;
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

export const { loginUserSuccess, logoutUser, setNextStep, setPrevStep, setIsLoading } =
  authSlice.actions;

export default authSlice.reducer;
