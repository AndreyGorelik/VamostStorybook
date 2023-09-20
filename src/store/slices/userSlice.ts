import { PayloadAction, createAction, createSlice } from '@reduxjs/toolkit';

interface Photo {
  id: string;
  imageUrl: string;
}

export interface UserState {
  phoneNumber: string;
  email: string;
  nickname: string;
  gender: {
    value: 'Man' | 'Woman' | 'Other' | null;
    isShown: boolean;
  };
  phoneVerified: boolean;
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
  images: Photo[];
  avatar: string;
}

export const initialState: UserState = {
  phoneNumber: '',
  email: '',
  nickname: '',
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
  images: [],
  phoneVerified: false,
  avatar: '',
};

const userSlice = createSlice({
  name: 'userSlice',
  initialState,
  reducers: {
    setUser(state, action: PayloadAction<UserState>) {
      return { ...state, ...action.payload };
    },
    setPhoneNumber(state, action) {
      state.phoneNumber = action.payload;
    },
    setEmail(state, action) {
      state.email = action.payload;
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
  },
});

export const LOGIN_USER = 'users/loginUser';
export const loginUser = createAction(LOGIN_USER);

export const {
  setPhoneNumber,
  setEmail,
  setNickname,
  setGender,
  setSexualOrientation,
  setShownGender,
  setBirthdate,
  setUser,
} = userSlice.actions;

export default userSlice.reducer;
