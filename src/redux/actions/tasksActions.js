import { TASKS_ADDED_ACTION } from "./actiouTypes";

export function taskAdded(task) {
    return { type: TASKS_ADDED_ACTION, task };
}