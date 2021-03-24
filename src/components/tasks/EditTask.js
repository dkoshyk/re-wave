import { Button, Card, CardContent, Grid, makeStyles, MenuItem, TextField, Typography } from "@material-ui/core";
import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router";
import { getTask, updateTask } from "../../api/TasksApi";
import { taskTypes } from "../../constants/TaskType";
import { Link } from 'react-router-dom';
import { SnackbarContext } from "../shared/SnackbarContext";

const useStyles = makeStyles(() => ({
    textField: {
        'marginBottom': 10
    },
    cardTitle: {
        marginBottom: 10
    }
}));

export function EditTask() {
    const params = useParams();
    const classes = useStyles();
    const taskId = params.id;
    const [name, setName] = useState('');
    const [type, setType] = useState('task');
    const [description, setDescription] = useState('');
    const { showErrors, showSuccess } = useContext(SnackbarContext);

    async function handleSubmit(e) {
        e.preventDefault();

        try {
            await updateTask({ id: taskId, name, description, type });
            showSuccess("Updated!");
        } catch (error) {
            showErrors(error.response);
        }
    }

    useEffect(() => {
        (async () => {
            let task = await getTask(taskId);

            if (task) {
                setName(task.title);
                setType(task.type);
                setDescription(task.description);
            }
        })()
    }, [taskId])

    return (
        <Card>
            <CardContent>
                <Typography className={classes.cardTitle}>Create Task</Typography>
                <form onSubmit={e => handleSubmit(e)}>
                    <div>
                        <TextField label='Title' variant="outlined" className={classes.textField}
                            onChange={e => setName(e.target.value)}
                            value={name}
                            fullWidth>
                        </TextField>
                        <TextField label="Type" variant="outlined" className={classes.textField}
                            select
                            fullWidth
                            value={type}
                            onChange={e => setType(e.target.value)}
                        >
                            {
                                taskTypes.map((option) => (
                                    <MenuItem key={option.value} value={option.value}>
                                        {option.label}
                                    </MenuItem>
                                ))
                            }
                        </TextField>
                        <TextField label="Description" variant="outlined" className={classes.textField} fullWidth
                            multiline
                            rowsMax={4}
                            onChange={e => setDescription(e.target.value)}
                            value={description}
                        >
                        </TextField>
                    </div>
                    <div>
                        <Grid container justify="space-between">
                            <Button type='submit' variant='contained' color='primary'>
                                Update
                            </Button>
                            <Button component={Link} to={'/tasks'} variant='outlined' color='primary'>
                                Cancel
                            </Button>
                        </Grid>
                    </div>
                </form>
            </CardContent>
        </Card>
    );
}

