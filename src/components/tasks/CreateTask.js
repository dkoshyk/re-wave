import { Button, makeStyles, TextField } from "@material-ui/core";
import { useState } from "react";

const useStyles = makeStyles(() => ({
    textFiled: {
        'marginBottom': 10,
    },
}));

export function CreateTask() {
    const classes = useStyles();
    const [name, setName] = useState('default task');

    function handleSubmit(e) {
        e.preventDefault();

        //addEntryToItems({ name });
    }

    return (
        <div>
            Create Task

            <form noValidate autoComplete="off" onSubmit={e => handleSubmit(e)}>
                <div>
                    <TextField id="outlined-basic" label="Name" variant="outlined" className={classes.textFiled}
                        onChange={e => setName(e.target.value)}
                        value={name} />
                </div>
                <div>
                    <Button type="submit" variant="contained" color="primary">
                        Create
                    </Button>
                </div>
            </form>
        </div>
    );
}