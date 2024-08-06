import { createSlice } from '@reduxjs/toolkit';
const settingAppSlice = createSlice({
  name: 'settingApp',
  initialState: {
    // mood: 'dark',
    mood: 'light',
  },
  reducers: {
    setMoodApp: (state, action) => {
      state.mood = action.payload;
    },
  },
});

export const { setMoodApp } = settingAppSlice.actions;

export default settingAppSlice.reducer;
