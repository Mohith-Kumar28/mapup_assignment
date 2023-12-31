// redux/nightModeSlice.js
import { createSlice } from '@reduxjs/toolkit';

const nightModeSlice = createSlice({
  name: 'nightMode',
  initialState: true,
  reducers: {
    toggleNightMode: (state) => !state,
  },
});

export const { toggleNightMode } = nightModeSlice.actions;
export default nightModeSlice.reducer;
