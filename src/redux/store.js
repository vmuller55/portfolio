import { configureStore } from '@reduxjs/toolkit';
import darkModeReducer from './darkModeSlice';
import mobileModeReducer from './mobileModeSlice';
import restartReducer from './restartSlice';

const store = configureStore({
  reducer: {
    darkMode: darkModeReducer,
    mobileMode: mobileModeReducer,
    restart : restartReducer,
  },
});

export default store;
