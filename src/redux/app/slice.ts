import { createSlice } from '@reduxjs/toolkit';
import initialState from './state';

export const slice = createSlice({
  name: 'app',
  initialState,
  reducers: {
  },
});

export const {  } = slice.actions;

export default slice.reducer;
