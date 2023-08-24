import { createSlice } from '@reduxjs/toolkit';

const animationModalSlice = createSlice({
  name: 'animationModal',
  initialState: false,
  reducers: {
    toggleAnimationModal: state => !state,
  },
});

export const { toggleAnimationModal } = animationModalSlice.actions;

export default animationModalSlice.reducer;
