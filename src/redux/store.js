import { configureStore } from '@reduxjs/toolkit';
import darkModeReducer from './darkModeSlice';
import mobileModeReducer from './mobileModeSlice';

const store = configureStore({
  reducer: {
    darkMode: darkModeReducer,
    mobileMode: mobileModeReducer,
  },
});

export default store;
