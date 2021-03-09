import { USER_LOG_IN } from "./actionTypes";

export function userLogIn(user) {
    return { type: USER_LOG_IN, user };
}