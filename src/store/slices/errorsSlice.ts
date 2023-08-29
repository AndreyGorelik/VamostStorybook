import { createAction, createSlice } from '@reduxjs/toolkit';

export interface ErrorState {
  phoneNumberError: null | string;
  confirmCodeError: null | string;
  emailError: null | string;
  nicknameError: null | string;
}

const initialState: ErrorState = {
  phoneNumberError: null,
  confirmCodeError: null,
  emailError: null,
  nicknameError: null,
};

const errorsSlice = createSlice({
  name: 'errorsSlice',
  initialState,
  reducers: {
    setPhoneNumberError(state, action) {
      state.phoneNumberError = action.payload;
    },
    setConfirmCodeError(state, action) {
      state.confirmCodeError = action.payload;
    },
    setEmailError(state, action) {
      state.emailError = action.payload;
    },
    setNicknameError(state, action) {
      state.nicknameError = action.payload;
    },
  },
});

export const { setPhoneNumberError, setConfirmCodeError, setEmailError, setNicknameError } =
  errorsSlice.actions;

export default errorsSlice.reducer;
