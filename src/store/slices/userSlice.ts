import { PayloadAction, createAction, createSlice } from '@reduxjs/toolkit';

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
    isShown: boolean;
  };
  shownGender: 'Man' | 'Woman' | 'Everyone' | null;
  birthdate: string;
  userId: string | null;
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
    isShown: false,
  },
  shownGender: null,
  birthdate: '',
  userId: null,
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
      state.nickname = action.payload;
    },
    setGender(state, action) {
      state.gender = action.payload;
    },
    setSexualOrientation(state, action) {
      state.sexualOrientation = action.payload;
    },
    setShownGender(state, action) {
      state.shownGender = action.payload;
    },
    setBirthdate(state, action) {
      state.birthdate = action.payload;
    },
    setUserId(state, action: PayloadAction<string>) {
      state.userId = action.payload;
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
  setSexualOrientation,
  setShownGender,
  setBirthdate,
  setUserId,
} = userSlice.actions;

export default userSlice.reducer;
