import React from "react";
import { getAuthUser } from "./AuthService";

const UserContext = React.createContext(getAuthUser());

export {
    UserContext
};