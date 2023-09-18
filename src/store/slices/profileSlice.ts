import { PayloadAction, createAction, createSlice } from '@reduxjs/toolkit';

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
  images: string[];
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
    setStartLoading(state) {
      state.isLoading = true;
      state.error = null;
    },
    setError(state, action: PayloadAction<string>) {
      state.error = action.payload;
      state.isLoading = false;
    },
  },
});

export const GET_PROFILE = 'profileSlice/getProfile';
export const getProfile = createAction<string>(GET_PROFILE);

export const { setProfile, setStartLoading, setError } = profileSlice.actions;

export default profileSlice.reducer;
