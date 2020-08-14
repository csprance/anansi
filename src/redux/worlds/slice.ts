import { createSlice } from '@reduxjs/toolkit';
import initialState from './state';

export const slice = createSlice({
  name: 'worlds',
  initialState,
  reducers: {
    setActiveWorld(state, action) {
      state.activeWorld = action.payload;
    },
  },
});

export const { setActiveWorld } = slice.actions;

export default slice.reducer;
