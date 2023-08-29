import { configureStore } from '@reduxjs/toolkit';
import darkModeReducer from './darkModeSlice';
import restartReducer from './restartSlice';
import animationModalReducer from './animationModalSlice'
import styleOptionsReducer from './styleOptionsSlice';
import characterReducer from './characterSlice'
import formModalReducer from './formModalSlice';
import apiModalReducer from './apiModal'

const store = configureStore({
  reducer: {
    darkMode: darkModeReducer,
    restart : restartReducer,
    animationModal : animationModalReducer,
    stylingOptions: styleOptionsReducer,
    character : characterReducer,
    formModal : formModalReducer,
    apiModal : apiModalReducer
  },
});

export default store;
