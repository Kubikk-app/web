import { createSlice } from '@reduxjs/toolkit';
import { Theme } from './types/Theme';

const initialState: Theme = {
  palette: {},
  typography: {},
};

const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    changedThemeToOpposite: (state) => {
      state.palette!.mode = 'dark';
    },
  },
});

export const { changedThemeToOpposite } = themeSlice.actions;

export default themeSlice.reducer;
