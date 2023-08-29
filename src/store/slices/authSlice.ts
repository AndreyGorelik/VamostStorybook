import { PayloadAction, createAction, createSlice } from '@reduxjs/toolkit';

export interface AuthState {
  isAuth: boolean;
  step: number;
}

const initialState: AuthState = {
  isAuth: false,
  step: 1,
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
    setNextStep(state, action) {
      state.step = action.payload;
    },
  },
});

export const LOGIN_USER = 'users/loginUser';
export const loginUser = createAction(LOGIN_USER);

export const REGISTER_USER = 'users/signUpUser';
export const registerUser = createAction<{ phoneNumber: string; password: string }>(REGISTER_USER);

export const CONFIRM_CODE = 'users/confirmCode';
export const confirmCode = createAction<{ phoneNumber: string; code: string }>(CONFIRM_CODE);

export const REGISTER_EMAIL = 'users/registerEmail';
export const registerEmail = createAction<{ email: string }>(REGISTER_EMAIL);

export const REGISTER_NICKNAME = 'users/registerNickname';
export const registerNickname = createAction<{ nickName: string }>(REGISTER_NICKNAME);

export const { loginUserSuccess, logoutUser, setNextStep } = authSlice.actions;

export default authSlice.reducer;
