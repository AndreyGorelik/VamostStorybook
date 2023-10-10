import { PayloadAction, createAction, createSlice } from '@reduxjs/toolkit';
import { GET_APPROVE_REQUESTS } from '@shared/constants/actions';
import { GetRequests, PostRequest } from 'src/types/api/getPosts';

export interface RequestsState {
  approveRequests: PostRequest[];
  approveRequestsLoading: boolean;
  approveRequestsError: string | null;
}

const initialState: RequestsState = {
  approveRequests: [],
  approveRequestsLoading: false,
  approveRequestsError: null,
};

const approveRequestsSlice = createSlice({
  initialState,
  name: 'approveRequests',
  reducers: {
    setApproveRequestsError(state, action: PayloadAction<string | null>) {
      state.approveRequestsError = action.payload;
      state.approveRequestsLoading = false;
    },

    setApproveRequests(state, action: PayloadAction<PostRequest[]>) {
      state.approveRequests = action.payload;
      state.approveRequestsLoading = false;
      state.approveRequestsError = null;
    },

    removeApproveRequest(state, action: PayloadAction<PostRequest>) {
      state.approveRequests = [
        ...state.approveRequests.filter((request) => request._id !== action.payload._id),
      ];
    },

    addApproveRequest(state, action: PayloadAction<PostRequest>) {
      state.approveRequests = [...state.approveRequests, action.payload];
    },

    getApproveRequests(state) {
      state.approveRequestsLoading = true;
    },
  },
});

export const getApproveRequests = createAction<GetRequests>(GET_APPROVE_REQUESTS);

export const {
  setApproveRequests,
  removeApproveRequest,
  setApproveRequestsError,
  addApproveRequest,
} = approveRequestsSlice.actions;

export default approveRequestsSlice.reducer;
