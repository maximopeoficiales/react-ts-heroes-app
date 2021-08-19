export enum Action {
    LOGIN = "login",
    LOGOUT = "logout",
    DEFAULT = "",
}
export type User =
    {
        name?: string;
        logged?: boolean;
    }

export type ReducerUser = { type: Action, payload?: User };

export const authReducer = (state: User, action: ReducerUser): User => {
    switch (action.type) {
        case Action.LOGIN:
            return { ...action.payload, logged: true }
        case Action.LOGOUT:
            return { logged: false };
        default:
            return state;
    }

}