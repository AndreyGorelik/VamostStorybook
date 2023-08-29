import { createAction, createSlice } from '@reduxjs/toolkit';

export interface AuthState {
  phoneNumber: string;
  email: string;
  nickname: string;
  tokens: Tokens;
  gender: {
    value: 'Man' | 'Woman' | 'Other' | null;
    isShown: boolean;
  };
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
  };
  shownGender: 'Man' | 'Woman' | 'Everyone' | null;
  birthdate: string;
}

interface Tokens {
  access: string;
  refresh: string;
}

const initialState: AuthState = {
  phoneNumber: '',
  email: '',
  nickname: '',
  tokens: {
    access: '',
    refresh: '',
  },
  gender: {
    value: null,
    isShown: false,
  },
  sexualOrientation: {
    value: null,
  },
  shownGender: null,
  birthdate: '',
};

const userSlice = createSlice({
  name: 'userSlice',
  initialState,
  reducers: {
    setPhoneNumber(state, action) {
      state.phoneNumber = action.payload;
    },
    setEmail(state, action) {
      state.email = action.payload;
    },
    setTokens(state, action) {
      state.tokens = action.payload;
    },
    setNickname(state, action) {
      state.tokens = action.payload;
    },
    setGender(state, action) {
      state.gender = action.payload;
    },
    sexualOrientation(state, action) {
      state.sexualOrientation = action.payload;
    },
    setShownGender(state, action) {
      state.shownGender = action.payload;
    },
    setBirthdate(state, action) {
      state.birthdate = action.payload;
    },
  },
});

export const LOGIN_USER = 'users/loginUser';
export const loginUser = createAction(LOGIN_USER);

export const {
  setPhoneNumber,
  setEmail,
  setTokens,
  setNickname,
  setGender,
  sexualOrientation,
  setShownGender,
  setBirthdate,
} = userSlice.actions;

export default userSlice.reducer;
