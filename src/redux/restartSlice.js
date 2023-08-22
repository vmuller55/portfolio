import { createSlice } from '@reduxjs/toolkit';

const restartSlice = createSlice({
  name: 'restart',
  initialState: false,
  reducers: {
    toggleRestart: state => !state,
  },
});

export const { toggleRestart } = restartSlice.actions;

export default restartSlice.reducer;