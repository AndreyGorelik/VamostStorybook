import { createSlice } from '@reduxjs/toolkit';

interface State {
  theme: string;
}

const initialState: State = {
  theme: 'light',
};

const settingsSlice = createSlice({
  name: 'settingsSlice',
  initialState,
  reducers: {
    changeTheme(state) {
      state.theme = 'dark';
    },
  },
});

export const { changeTheme } = settingsSlice.actions;

export default settingsSlice.reducer;
