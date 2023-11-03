// store.js

import { configureStore } from '@reduxjs/toolkit';
import inputReducer from './InputSlice';

const store = configureStore({
  reducer: {
    input: inputReducer,
  },
});

export default store;
