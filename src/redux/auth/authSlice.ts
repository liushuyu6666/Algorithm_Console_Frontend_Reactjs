import { createSlice } from "@reduxjs/toolkit";

export interface AuthState {
    token: string;
}

const initialState: AuthState = {
    token: '',
};

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setAuth: (state, action) => {
            state.token = action.payload
        },
        deleteAuth: (state) => {
            state.token = '';
        }
    }
})

export const { setAuth, deleteAuth } = authSlice.actions

export default authSlice.reducer;