import { createContext } from "react";
import { ReducerUser, User } from "./authReducer";

interface UserProvider {
    user?: User,
    dispatch: React.Dispatch<ReducerUser>
}
export const AuthContext = createContext<UserProvider>({ dispatch: () => { } });