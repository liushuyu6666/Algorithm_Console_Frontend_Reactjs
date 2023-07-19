import { UserActionType, UserState } from "./userReducer";

export const setProfile = (profile: UserState) => (
    { type: UserActionType.SET_USER, payload: profile}
)