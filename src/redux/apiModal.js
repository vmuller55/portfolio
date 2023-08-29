import { createSlice } from '@reduxjs/toolkit';

const apiModalSlice = createSlice({
  name: 'apiModal',
  initialState: false,
  reducers: {
    toggleApiModal: state => !state,
  },
});

export const { toggleApiModal } = apiModalSlice.actions;

export default apiModalSlice.reducer;
