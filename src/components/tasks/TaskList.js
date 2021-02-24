import { useEffect } from "react";
import { getTaskList } from '../../api/TasksApi';

function TaskList() {
    useEffect(() => {
        (async () => {
            let result = await getTaskList();
            console.log(result);
        })()
    }, []);
    // [] - means that effect works once

    return (
        <div>

        </div>
    )
}

export default TaskList;
