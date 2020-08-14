import { createSlice } from '@reduxjs/toolkit';
import initialState from './state';

export const slice = createSlice({
  name: 'items',
  initialState,
  reducers: {
    addItem(state, action) {
      state[action.payload.id] = action.payload;
    },
  },
});

export const {} = slice.actions;

export default slice.reducer;
