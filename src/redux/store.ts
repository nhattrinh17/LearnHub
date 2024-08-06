import { configureStore } from '@reduxjs/toolkit';
import settingAppReduce from './system/settingSys';
import userInfoReduce from './app/user.slice';
import documentReduce from './app/document.slice';

export const store = configureStore({
  reducer: {
    settingApp: settingAppReduce,
    user: userInfoReduce,
    document: documentReduce,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
