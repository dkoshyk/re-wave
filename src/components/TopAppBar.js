import {
    AppBar,
    Badge,
    Box,
    Button,
    IconButton,
    List,
    ListItem,
    ListItemText,
    makeStyles,
    Popover,
    Toolbar,
    Typography
} from '@material-ui/core'
import React, { useContext, useState } from 'react'
import MenuIcon from '@material-ui/icons/Menu';
import clsx from 'clsx';
import { Link } from 'react-router-dom';
import { useHistory } from "react-router";
import { UserContext } from './auth/UserContext';
import { connect } from "react-redux";

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexGrow: 1,
    },
    appBar: {
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
    },
    appBarShift: {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: drawerWidth,
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    hide: {
        display: 'none',
    },
    rightButton: {
        marginLeft: 'auto'
    }
}));

const TopAppBar = ({ open, handleDrawerOpen, tasks }) => {
    const classes = useStyles();
    const history = useHistory();
    const [isTaskPopoverOpen, setIsTaskPopoverOpen] = useState(false);
    const [popoverAnchor, setPopoverAnchor] = useState(null);

    const { user, logoutUser, isAuth } = useContext(UserContext);

    const onLogout = () => {
        logoutUser();
        history.push('/login');
    }

    function onPopoverButtonClick(event) {
        if (!popoverAnchor)
            setPopoverAnchor(event.currentTarget);
        setIsTaskPopoverOpen(true);
    }

    const loginLogoutContent = isAuth() ?
        <div className={classes.rightButton}>
            <Badge badgeContent={tasks.length} color="secondary">
                <Button onClick={onPopoverButtonClick} variant="contained"> Open tasks </Button>
            </Badge>
            <Popover anchorEl={popoverAnchor}
                open={isTaskPopoverOpen}
                onClose={() => setIsTaskPopoverOpen(false)}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'center',
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'center',
                }}>
                {tasks && tasks.length
                    ?
                    <List>
                        {tasks.map(task =>
                            <ListItem key={task.id}>
                                <ListItemText primary={task.title} secondary={task.description} />
                            </ListItem>
                        )}
                    </List>
                    :
                    <Box p={1}>
                        <Typography>Task notification list is empty</Typography>
                    </Box>
                }
            </Popover>
            ({user.fullName})
            <Button onClick={onLogout} color="inherit">Logout</Button>
        </div> :
        <Button className={classes.rightButton} component={Link} to="/login" color="inherit">Login</Button>;

    return (
        <div className={classes.root}>
            <AppBar
                position="fixed"
                className={clsx(classes.appBar, {
                    [classes.appBarShift]: open,
                })}
            >
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        onClick={handleDrawerOpen}
                        edge="start"
                        className={clsx(classes.menuButton, open && classes.hide)}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" noWrap>Boot Wave</Typography>
                    {loginLogoutContent}
                </Toolbar>
            </AppBar>
        </div>
    )
}

export default connect(({ tasks }) => ({ tasks }))(TopAppBar);