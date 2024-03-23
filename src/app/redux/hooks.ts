import { TypedUseSelectorHook, useDispatch, useSelector, useStore } from 'react-redux';

import { AppDispatch, AppStore, RootState } from '.';

// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export const useAppStore: () => AppStore = useStore;
