import { PayloadAction, createAction, createSlice } from '@reduxjs/toolkit';
import { GET_PENDING_REQUESTS } from '@shared/constants/actions';
import { GetRequests, PostRequest } from 'src/types/api/getPosts';

export interface RequestsState {
  pendingRequests: PostRequest[];
  pendingRequestsLoading: boolean;
  pendingRequestsError: string | null;
}

const initialState: RequestsState = {
  pendingRequests: [],
  pendingRequestsLoading: false,
  pendingRequestsError: null,
};

const pendingRequestsSlice = createSlice({
  initialState,
  name: 'pendingRequests',
  reducers: {
    setPendingRequestsError(state, action: PayloadAction<string | null>) {
      state.pendingRequestsError = action.payload;
      state.pendingRequestsLoading = false;
    },

    setPendingRequests(state, action: PayloadAction<PostRequest[]>) {
      state.pendingRequests = action.payload;
      state.pendingRequestsLoading = false;
      state.pendingRequestsError = null;
    },

    addPendingRequest(state, action: PayloadAction<PostRequest>) {
      state.pendingRequests = [...state.pendingRequests, action.payload];
    },

    removePendingRequest(state, action: PayloadAction<PostRequest>) {
      state.pendingRequests = [
        ...state.pendingRequests.filter((request) => request.id !== action.payload.id),
      ];
    },
    getPendingRequests(state) {
      state.pendingRequestsLoading = true;
    },
  },
});

export const getPendingRequests = createAction<GetRequests>(GET_PENDING_REQUESTS);

export const {
  setPendingRequests,
  removePendingRequest,
  setPendingRequestsError,
  addPendingRequest,
} = pendingRequestsSlice.actions;

export default pendingRequestsSlice.reducer;
