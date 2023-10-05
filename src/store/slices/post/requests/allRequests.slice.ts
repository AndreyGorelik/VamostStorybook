import { PayloadAction, createAction, createSlice } from '@reduxjs/toolkit';
import { GET_ALL_REQUESTS } from '@shared/constants/actions';
import { GetRequests, PostRequest } from 'src/types/api/getPosts';

export interface RequestsState {
  allRequests: PostRequest[];
  allRequestsLoading: boolean;
  allRequestsError: string | null;
}

const initialState: RequestsState = {
  allRequests: [],
  allRequestsLoading: false,
  allRequestsError: null,
};

const allRequestsSlice = createSlice({
  initialState,
  name: 'allRequests',
  reducers: {
    setAllRequestsError(state, action: PayloadAction<string | null>) {
      state.allRequestsError = action.payload;
      state.allRequestsLoading = false;
    },

    setAllRequests(state, action: PayloadAction<PostRequest[]>) {
      state.allRequests = action.payload;
      state.allRequestsLoading = false;
      state.allRequestsError = null;
    },

    removeAllRequest(state, action: PayloadAction<PostRequest>) {
      state.allRequests = [
        ...state.allRequests.filter((request) => request.id !== action.payload.id),
      ];
    },

    addAllRequest(state, action: PayloadAction<PostRequest>) {
      state.allRequests = [...state.allRequests, action.payload];
    },

    getAllRequests(state) {
      state.allRequestsLoading = true;
    },
  },
});

export const getAllRequests = createAction<GetRequests>(GET_ALL_REQUESTS);

export const { setAllRequests, removeAllRequest, setAllRequestsError, addAllRequest } =
  allRequestsSlice.actions;

export default allRequestsSlice.reducer;
