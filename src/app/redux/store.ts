import { configureStore } from '@reduxjs/toolkit';

import { middleware, reducer } from '.';

export const store = configureStore({
  reducer,
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(middleware),
  devTools: process.env.NODE_ENV !== 'production',
});
