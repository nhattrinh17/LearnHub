import { configureStore } from '@reduxjs/toolkit';
import settingAppReduce from './system/settingSys';
import userInfoReduce from './app/userSlice';

export const store = configureStore({
  reducer: {
    settingApp: settingAppReduce,
    user: userInfoReduce,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
