import { Button, Card, CardActions, CardContent, makeStyles } from "@material-ui/core";
import { useEffect, useState } from "react";
import { getTaskList } from '../../api/TasksApi';

const useStyles = makeStyles({
    card: {
        marginTop: 10
    }
});

function TaskList() {
    const classes = useStyles();
    const [taskList, setTaskList] = useState([]);

    useEffect(() => {
        (async () => {
            let result = await getTaskList();
            setTaskList(result);
            console.log(result);
        })()
    }, []);
    // [] - means that effect works once

    return (
        <div>
            {taskList.map((task) =>
                <div key={task.id}>
                    <Card className={classes.card}>
                        <CardContent>
                            {task.title}
                        </CardContent>
                        <CardActions>
                            <Button size="small">Open</Button>
                        </CardActions>
                    </Card>
                </div>)}
        </div>
    )
}

export default TaskList;
