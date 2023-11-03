// inputSlice.js

import { createSlice } from '@reduxjs/toolkit';

const inputSlice = createSlice({
  name: 'input',
  initialState: [],
  reducers: {
    addToInput: (state, action) => {
      state.push(action.payload);
    },
    clearInput: (state) => {
      return [];
    },
  },
});

export const { addToInput, clearInput } = inputSlice.actions;
export default inputSlice.reducer;
