import { combineReducers } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import userReducer, { UserState } from './user/userSlice';
import authReducer, { AuthState } from './auth/authSlice';

export interface RootState {
    user: UserState;
    auth: AuthState;
}

const rootReducer = combineReducers({
    user: userReducer,
    auth: authReducer
});

export const store = configureStore({
    reducer: rootReducer
});

// Adds a change listener. It will be called any time an action is dispatched, and some part of the state tree may potentially have changed.
store.subscribe(() => {})