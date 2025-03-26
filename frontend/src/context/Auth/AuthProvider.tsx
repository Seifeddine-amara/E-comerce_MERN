import { FC, PropsWithChildren, useState } from "react";
import {AuthContext} from "./AuthContext";

const AuthProvider: FC<PropsWithChildren> = ({children}) => {

    const [username , setUserName] = useState<string | null>(localStorage.getItem("username"))
    const [token , setToken] = useState<string | null>(localStorage.getItem("token"))

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
        localStorage.setItem("username",username);
        localStorage.setItem("token",token);
    }

    return (
        <AuthContext.Provider value={{username , token, login}}>
            {children}
        </AuthContext.Provider>
    )

}

export default AuthProvider;