import { configureStore } from '@reduxjs/toolkit';
import darkModeReducer from './darkModeSlice';
import mobileModeReducer from './mobileModeSlice';
import restartReducer from './restartSlice';
import animationModalReducer from './animationModalSlice'
import styleOptionsReducer from './styleOptionsSlice';
import characterReducer from './characterSlice'
import formModalReducer from './formModalSlice';

const store = configureStore({
  reducer: {
    darkMode: darkModeReducer,
    mobileMode: mobileModeReducer,
    restart : restartReducer,
    animationModal : animationModalReducer,
    stylingOptions: styleOptionsReducer,
    character : characterReducer,
    formModal : formModalReducer,
  },
});

export default store;
