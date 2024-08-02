import { configureStore } from '@reduxjs/toolkit';
import settingAppReduce from './system/settingSys';
import userInfoReduce from './app/userSlice';
import searchUserReduce from './app/searchSlice';
import homeReduce from './app/homeSlice';
import detailChatReduce from './app/detailChatSlice';

export const store = configureStore({
  reducer: {
    detailChat: detailChatReduce,
    home: homeReduce,
    settingApp: settingAppReduce,
    user: userInfoReduce,
    searchUser: searchUserReduce,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
