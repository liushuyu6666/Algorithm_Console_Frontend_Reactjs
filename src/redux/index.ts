import { combineReducers } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import userReducer, { UserState } from './user/userSlice';

export interface RootState {
    user: UserState;
}

const rootReducer = combineReducers({
    user: userReducer
});

export const store = configureStore({
    reducer: rootReducer
});

// Adds a change listener. It will be called any time an action is dispatched, and some part of the state tree may potentially have changed.
store.subscribe(() => {})