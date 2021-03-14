import { useState } from "react";
import { removeAuthUser, saveAuthUser } from "./AuthService";
import { UserContext } from "./UserContext";

export const UserProvider = ({ children }) => {
    // User is the name of the "data" that gets stored in context
    const [user, setUser] = useState({});

    // Login updates the user data with a name parameter
    const loginUser = (user) => {
        setUser(user);
        saveAuthUser(user);
    };

    // Logout updates the user data to default
    const logoutUser = () => {
        setUser({});
        removeAuthUser();
    };

    return (
        <UserContext.Provider value={{ user, loginUser, logoutUser }}>
            {children}
        </UserContext.Provider>
    );
};