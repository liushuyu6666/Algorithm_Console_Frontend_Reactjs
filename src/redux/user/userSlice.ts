import { createSlice } from "@reduxjs/toolkit";

export interface UserState {
    username: string;
}

export enum UserActionType {
    SET_USER,
    DELETE_USER,
}

const initialState: UserState = {
    username: '',
};

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUser: (state, action) => {
            state.username = action.payload
        },
        deleteUser: (state) => {
            state.username = '';
        }
    }
})

export const { setUser, deleteUser } = userSlice.actions

export default userSlice.reducer;