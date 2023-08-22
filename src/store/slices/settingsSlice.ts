import { PayloadAction, createAction, createSlice } from '@reduxjs/toolkit';

interface State {
  theme: string;
  isAuth: boolean;
  authError: string | null;
}

const initialState: State = {
  theme: 'light',
  isAuth: false,
  authError: null,
};

const settingsSlice = createSlice({
  name: 'settingsSlice',
  initialState,
  reducers: {
    changeTheme(state) {
      state.theme = 'dark';
    },
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

export const { changeTheme, loginUserSuccess, logoutUser, setAuthError } = settingsSlice.actions;

export default settingsSlice.reducer;
