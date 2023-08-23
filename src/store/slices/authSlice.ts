import { PayloadAction, createAction, createSlice } from '@reduxjs/toolkit';

export interface AuthState {
  isAuth: boolean;
  authError: string | null;
}

const initialState: AuthState = {
  isAuth: false,
  authError: null,
};

const settingsSlice = createSlice({
  name: 'settingsSlice',
  initialState,
  reducers: {
    loginUserSuccess(state) {
      state.isAuth = true;
    },
    logoutUser(state) {
      state.isAuth = false;
      state.authError = null;
    },
    setAuthError(state, action: PayloadAction<string | null>) {
      state.authError = action.payload;
    },
  },
});

export const LOGIN_USER = 'users/loginUser';
export const loginUser = createAction(LOGIN_USER);

export const { loginUserSuccess, logoutUser, setAuthError } = settingsSlice.actions;

export default settingsSlice.reducer;
