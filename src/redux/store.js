import { configureStore } from '@reduxjs/toolkit';
import darkModeReducer from './darkModeSlice';
import mobileModeReducer from './mobileModeSlice';
import restartReducer from './restartSlice';
import animationModalReducer from './animationModalSlice'
import styleOptionsReducer from './styleOptionsSlice';

const store = configureStore({
  reducer: {
    darkMode: darkModeReducer,
    mobileMode: mobileModeReducer,
    restart : restartReducer,
    animationModal : animationModalReducer,
    stylingOptions: styleOptionsReducer,
  },
});

export default store;
