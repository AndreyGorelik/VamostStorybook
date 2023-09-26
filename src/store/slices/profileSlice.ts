import { PayloadAction, createAction, createSlice } from '@reduxjs/toolkit';

export interface Photo {
  id: string;
  imageUrl: string;
}

export interface Profile {
  phoneNumber: string;
  avatar: string;
  sexualOrientation: {
    value: string;
    isShown: boolean;
  };
  birthdate: string;
  shownGender: string;
  nickName: string;
  images: Photo[];
  id: string;
  gender: {
    value: string;
    isShown: boolean;
  };
}

export interface ProfileState {
  profile: Profile;
  isLoading: boolean;
  error: string | null;
}

export const initialState: ProfileState = {
  profile: {
    phoneNumber: '',
    avatar: '',
    sexualOrientation: {
      value: '',
      isShown: false,
    },
    birthdate: '',
    shownGender: '',
    images: [],
    id: '',
    gender: {
      value: '',
      isShown: false,
    },
    nickName: '',
  },
  isLoading: false,
  error: null,
};

const profileSlice = createSlice({
  name: 'profileSlice',
  initialState,
  reducers: {
    setProfile(state, action: PayloadAction<Profile>) {
      state.profile = action.payload;
      state.isLoading = false;
      state.error = null;
    },
    getProfile(state, _action) {
      state.isLoading = true;
      state.error = null;
    },
    setError(state, action: PayloadAction<string>) {
      state.error = action.payload;
      state.isLoading = false;
    },
  },
});

export const { setProfile, getProfile, setError } = profileSlice.actions;

export default profileSlice.reducer;
