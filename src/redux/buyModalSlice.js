import { createSlice } from '@reduxjs/toolkit';

const buyModalSlice = createSlice({
  name: 'buyModal',
  initialState: false,
  reducers: {
    toggleBuyModal: state => !state,
  },
});

export const { toggleBuyModal } = buyModalSlice.actions;

export default buyModalSlice.reducer;
