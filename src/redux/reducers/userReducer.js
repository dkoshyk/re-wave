import { USER_LOG_IN } from "../actions/actionTypes";

export default function userReducer(state = {}, action) {
    switch (action.type) {
        case USER_LOG_IN:
            return { ...action.user }
        default:
            return state;
    }
}