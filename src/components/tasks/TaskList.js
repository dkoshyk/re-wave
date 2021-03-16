import { Button, Card, CardActions, CardContent, Grid, makeStyles, TextField } from "@material-ui/core";
import { useEffect, useState } from "react";
import { getTaskList } from '../../api/TasksApi';
import { Link } from 'react-router-dom';
import Pagination from '@material-ui/lab/Pagination';

const useStyles = makeStyles({
    card: {
        marginTop: 10
    }
});

function TaskList() {
    const classes = useStyles();
    const [pageSize] = useState(5);
    const [page, setPage] = useState(1);
    const [containsTitle, setContainsTitle] = useState('');
    const [taskList, setTaskList] = useState([]);
    const [count, setCount] = useState(0);

    const handlePageChange = (event, value) => {
        setPage(value);
    };

    useEffect(() => {
        (async () => {
            let result = await getTaskList({ pageSize, page, containsTitle });
            setTaskList(result.items);
            setCount(result.count)
            console.log(result);
        })()
    }, [containsTitle, page, pageSize]);
    // [] - means that effect works once

    return (
        <div>
            <Grid container direction="row" justify="space-between" alignItems="baseline">
                <Button component={Link} to="/tasks/create" variant="contained" color="primary">Create</Button>
                <TextField size="small" label="search title" variant="outlined" onChange={e => setContainsTitle(e.target.value)} />
                <Pagination count={Math.ceil(count / pageSize)} page={page} onChange={handlePageChange} />
            </Grid>
            {taskList.map((task) =>
                <div key={task.id}>
                    <Card className={classes.card}>
                        <CardContent>
                            {task.title}
                        </CardContent>
                        <CardActions>
                            <Button variant="outlined" color="primary" size="small">Edit</Button>
                            <Button variant="outlined" color="secondary" size="small">Delete</Button>
                        </CardActions>
                    </Card>
                </div>)}
        </div>
    )
}

export default TaskList;
