import { SliceSelectors, createSlice } from '@reduxjs/toolkit';

import { CaseReducers, User } from './types';

const initialState: User = {
  id: 0,
  userId: '',
};

export const user = createSlice<User, CaseReducers, 'user', SliceSelectors<User>>({
  name: 'user',
  initialState,
  reducers: {
    reset: () => initialState,
    setUser: (_state, action) => {
      return action.payload;
    },
  },
});

export const { reset, setUser } = user.actions;
export default user.reducer;
