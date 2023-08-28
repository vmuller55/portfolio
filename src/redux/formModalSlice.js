import { createSlice } from '@reduxjs/toolkit';

const formModalSlice = createSlice({
  name: 'formModal',
  initialState: false,
  reducers: {
    toggleFormModal: state => !state,
  },
});

export const { toggleFormModal } = formModalSlice.actions;

export default formModalSlice.reducer;
