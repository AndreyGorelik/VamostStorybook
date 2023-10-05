import { PayloadAction, createAction, createSlice } from '@reduxjs/toolkit';
import { GET_DELETED_REQUESTS } from '@shared/constants/actions';
import { GetRequests, PostRequest } from 'src/types/api/getPosts';

export interface RequestsState {
  deletedRequests: PostRequest[];
  deletedRequestsLoading: boolean;
  deletedRequestsError: string | null;
}

const initialState: RequestsState = {
  deletedRequests: [],
  deletedRequestsLoading: false,
  deletedRequestsError: null,
};

const deletedRequestsSlice = createSlice({
  initialState,
  name: 'deletedRequests',
  reducers: {
    setDeletedRequestsError(state, action: PayloadAction<string | null>) {
      state.deletedRequestsError = action.payload;
      state.deletedRequestsLoading = false;
    },

    setDeletedRequests(state, action: PayloadAction<PostRequest[]>) {
      state.deletedRequests = action.payload;
      state.deletedRequestsLoading = false;
      state.deletedRequestsError = null;
    },

    addDeletedRequest(state, action: PayloadAction<PostRequest>) {
      state.deletedRequests = [...state.deletedRequests, action.payload];
    },

    removeDeletedRequest(state, action: PayloadAction<PostRequest>) {
      state.deletedRequests = [
        ...state.deletedRequests.filter((request) => request.id !== action.payload.id),
      ];
    },

    getDeletedRequests(state) {
      state.deletedRequestsLoading = true;
    },
  },
});

export const getDeletedRequests = createAction<GetRequests>(GET_DELETED_REQUESTS);

export const {
  setDeletedRequests,
  removeDeletedRequest,
  setDeletedRequestsError,
  addDeletedRequest,
} = deletedRequestsSlice.actions;

export default deletedRequestsSlice.reducer;
