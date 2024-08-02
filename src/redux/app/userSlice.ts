import { createSlice } from '@reduxjs/toolkit';

export interface UserInfo {
  _id: string;
  id: string;
  avatar: string;
  email: string;
  name: string;
  phone: string;
  status: string;
  username: string;
}

interface UserState {
  getUser: {
    currentUser: UserInfo | null;
  };
}

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    getUser: {
      currentUser: null,
    },
  } as UserState,
  reducers: {
    setCurrentUser: (state, action) => {
      state.getUser.currentUser = action.payload;
    },
  },
});

export const { setCurrentUser } = userSlice.actions;

export default userSlice.reducer;
