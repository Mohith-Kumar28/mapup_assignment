// redux/store.js
import { configureStore } from '@reduxjs/toolkit';
import nightModeReducer from './nightModeSlice';
import regionReducer from './regionSlice';

const store = configureStore({
  reducer: {
    nightMode: nightModeReducer,
    region: regionReducer,
  },
});

export default store;
