import { createSlice } from '@reduxjs/toolkit';
import initialState from './state';

export const slice = createSlice({
  name: 'places',
  initialState,
  reducers: {},
});

export const {} = slice.actions;

export default slice.reducer;
