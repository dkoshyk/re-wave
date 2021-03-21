import { Button, Card, CardActions, CardContent, FormControl, InputLabel, makeStyles, MenuItem, Select, TextField, Typography } from "@material-ui/core";
import { useState } from "react";
import { useHistory } from "react-router";
import { createTask } from "../../api/TasksApi";
import { taskTypes } from '../../constants/TaskType';

const useStyles = makeStyles((theme) => ({
    textFiled: {
        'marginBottom': 10,
    },
    cardTitle: {
        marginBottom: 10
    }
}));

export function CreateTask() {
    const classes = useStyles();
    const history = useHistory();
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [type, setType] = useState('');

    async function handleSubmit(e) {
        e.preventDefault();

        try {
            await createTask({ title, description, type });
            history.push('/tasks');
        } catch (error) {
            console.log(error.response);
        }
    }

    return (
        <Card>
            <CardContent>
                <Typography variant="h5" component="h2" className={classes.cardTitle}>Create Task</Typography>
                <form noValidate autoComplete="off">
                    <div>
                        <TextField label="Title" variant="outlined" className={classes.textFiled}
                            onChange={e => setTitle(e.target.value)}
                            value={title} fullWidth />
                        <TextField label="Type" variant="outlined" className={classes.textFiled}
                            select
                            onChange={e => setType(e.target.value)}
                            value={type} fullWidth>
                            {
                                taskTypes.map((option) => (
                                    <MenuItem key={option.value} value={option.value}>
                                        {option.label}
                                    </MenuItem>
                                ))
                            }
                        </TextField>
                    </div>
                    <div>
                        <TextField label="Description" variant="outlined" className={classes.textFiled} fullWidth
                            onChange={e => setDescription(e.target.value)}
                            value={description}
                            multiline
                            rowsMax={4} />
                    </div>
                </form>
            </CardContent>
            <CardActions>
                <Button type="submit" variant="contained" color="primary" onClick={e => handleSubmit(e)}>Create</Button>
                <Button type="submit" variant="outlined" color="primary">Cancel</Button>
            </CardActions>
        </Card>
    );
}