import { createSlice } from '@reduxjs/toolkit';

const mobileModeSlice = createSlice({
  name: 'mobileMode',
  initialState: false,
  reducers: {
    toggleMobileMode: state => !state,
  },
});

export const { toggleMobileMode } = mobileModeSlice.actions;

export default mobileModeSlice.reducer;
