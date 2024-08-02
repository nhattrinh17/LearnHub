import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState, store } from './store';

function dispatchRedux(action: any) {
  return store.dispatch(action);
}

function getStateRedux() {
  return store.getState();
}

// Use throughout your app instead of plain `useDispatch` and `useSelector`
const useAppDispatch: () => AppDispatch = useDispatch;
const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export { dispatchRedux, getStateRedux, useAppSelector, useAppDispatch };
