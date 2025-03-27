import { FC, PropsWithChildren, useState } from "react";
import {AuthContext} from "./AuthContext";

const USERNAME_KEY ="username";
const TOKEN_KEY ="token";

const AuthProvider: FC<PropsWithChildren> = ({children}) => {

    const [username , setUserName] = useState<string | null>(localStorage.getItem(USERNAME_KEY))
    const [token , setToken] = useState<string | null>(localStorage.getItem(TOKEN_KEY))

    //we use useEffect when the data from the net but here all the data set on the browser so we put it directly on useState
/*     useEffect(()=>{
        const localUsername = localStorage.getItem("username");
        const localToken = localStorage.getItem("token");
        setUserName(localUsername);
        setToken(localToken);
    }) */

    const login = (username: string, token: string) => {
        setUserName(username);
        setToken(token);
        localStorage.setItem(USERNAME_KEY,username);
        localStorage.setItem(TOKEN_KEY,token);
    }
    
    const logout = () => {
        localStorage.removeItem(USERNAME_KEY);
        localStorage.removeItem(TOKEN_KEY);
        setUserName(null);
        setToken(null);
    }

    const isAuthenticated = !!token;

    return (
        <AuthContext.Provider value={{username , token, isAuthenticated,login ,logout}}>
            {children}
        </AuthContext.Provider>
    )

}

export default AuthProvider;