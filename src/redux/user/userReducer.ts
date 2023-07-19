export interface UserState {
    username: string;
}

export enum UserActionType {
    SET_USER,
    DELETE_USER,
}

interface UserAction {
    type: UserActionType;
    payload: UserState;
}

const initialState: UserState = {
    username: '',
};

export default function userReducer(state = initialState, action: UserAction): UserState {
    console.log(`action is ${JSON.stringify(action)}`);
    switch (action.type) {
        case UserActionType.SET_USER: {
            return action.payload;
        }
        case UserActionType.DELETE_USER: {
            return {
                username: '',
            };
        }
        default: {
            return state;
        }
    }
}
