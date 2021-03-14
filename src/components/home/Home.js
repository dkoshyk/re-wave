import { Button, List, ListItem, ListItemText, makeStyles, TextField } from "@material-ui/core";
import { useState } from "react";

export function Home() {
    return (
        <>
            <TodoApplication />
        </>
    );
}

function TodoApplication() {
    const [items, setItems] = useState([{ name: 'c' }, { name: 'b' }, { name: 'a' }]);

    function addEntryToItems(newItem) {
        setItems([...items, newItem])
    }

    return (
        <>
            <CreateTodoItem addEntryToItems={addEntryToItems} />
            <TodoList items={items} />
        </>
    );
}

const useStyles = makeStyles((theme) => ({
    textFiled: {
        'marginBottom': 10,
    },
}));

function CreateTodoItem({ addEntryToItems }) {
    const classes = useStyles();
    const [name, setName] = useState('default task');

    function handleSubmit(e) {
        e.preventDefault();

        addEntryToItems({ name });
    }

    return (
        <>
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
        </>
    );
}

function TodoList(props) {
    let items = props.items;

    items.sort((x, y) => x.name > y.name ? 1 : -1);

    let listContent = items.map((item, index) =>
        <ListItem key={index}>
            <ListItemText>
                {item.name}
            </ListItemText>
        </ListItem>
    );

    return (
        <div>
            <List>
                {listContent}
            </List>
        </div>
    );
}