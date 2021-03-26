import { useEffect, useState } from "react";
import { removeApiToken, setApiToken } from "../../api/HttpCommon";
import { getAuthUser, removeAuthUser, saveAuthUser } from "./AuthService";
import { UserContext } from "./UserContext";

//https://reactjs.org/docs/composition-vs-inheritance.html
export const UserProvider = ({ children }) => {
    const [user, setUser] = useState(getAuthUser());

    useEffect(() => {
        if (user) {
            saveAuthUser(user);
            setApiToken(user.token);
        } else {
            removeAuthUser();
            removeApiToken();
        }

        console.log('useEffect', user);
    }, [user])

    const loginUser = (user) => {
        setUser(user);
    };

    const logoutUser = () => {
        setUser(null);
    };

    const isAuth = () => {
        return user && user.result;
    };

    return (
        <UserContext.Provider value={{ user, isAuth, loginUser, logoutUser }}>
            {children}
        </UserContext.Provider>
    );
};