import { CaseReducer, PayloadAction, SliceCaseReducers } from '@reduxjs/toolkit';

export type User = {
  id: number;
  userId: string;
};

export type CaseReducers = SliceCaseReducers<User> & {
  reset: CaseReducer;
  setUser: CaseReducer<User, PayloadAction<User>>;
};
