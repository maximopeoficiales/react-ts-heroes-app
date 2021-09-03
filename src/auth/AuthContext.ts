import { createContext } from "react";
import { ReducerUser, User } from "./authReducer";

export interface UserProvider {
    user?: User,
    dispatch: React.Dispatch<ReducerUser>
}
export const AuthContext = createContext<UserProvider>({ dispatch: () => { } });