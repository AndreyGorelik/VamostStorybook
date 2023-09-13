import { PayloadAction, createAction, createSlice } from '@reduxjs/toolkit';
import { FullPackage, GetPackages, Package, Place } from 'src/types/actions/actions.types';

export interface PostCreateState {
  posts: string[];
  postPackages: Package[];
  fullPackage: FullPackage | null;
  isLoading: boolean;
  postVenues: Place[];
}

const initialState: PostCreateState = {
  posts: [],
  postPackages: [],
  postVenues: [],
  fullPackage: null,
  isLoading: false,
};

const postsSlice = createSlice({
  name: 'postsSlice',
  initialState,
  reducers: {
    setLoading(state, action) {
      state.isLoading = action.payload;
    },
    setPostPackages(state, action) {
      state.postPackages = action.payload;
    },
    setPostVenues(state, action) {
      state.postVenues = action.payload;
    },
    setPostFullPackage(state, action: PayloadAction<FullPackage>) {
      state.fullPackage = action.payload;
    },
  },
});

export const CREATE_POST = 'postCreateSlice/createPost';
export const postCreate = createAction(CREATE_POST);

export const GET_VENUES = 'postCreateSlice/getVenues';
export const getVenues = createAction<string>(GET_VENUES);

export const GET_PACKAGES = 'postCreateSlice/getPackages';
export const getPackages = createAction<GetPackages>(GET_PACKAGES);

export const GET_FULL_PACKAGE = 'postCreateSlice/getFullPackage';
export const getFullPackage = createAction<string>(GET_FULL_PACKAGE);

export const { setLoading, setPostPackages, setPostVenues, setPostFullPackage } =
  postsSlice.actions;

export default postsSlice.reducer;
