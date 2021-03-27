import { TASKS_ADDED_ACTION } from "../actions/actiouTypes";

export default function tasksReducer(state = [], action) {
    switch (action.type) {
        case TASKS_ADDED_ACTION:
            return [...state, action.task]
        default:
            return state;
    }
}