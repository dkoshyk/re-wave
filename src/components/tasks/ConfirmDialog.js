import { Button, Dialog, DialogActions, DialogTitle } from "@material-ui/core";
import React from "react";
import PropTypes from 'prop-types';

export default function ConfirmDialog({ buttonName, buttonColor, onAgreeAction, questionText }) {
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleAgree = () => {
        onAgreeAction();
        setOpen(false);
    }

    return (
        <div>
            <Button variant="outlined" color={buttonColor} onClick={handleClickOpen} size="small">
                {buttonName}
            </Button>
            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="dialog-title"
            >
                <DialogTitle id="dialog-title">{questionText}</DialogTitle>
                <DialogActions>
                    <Button autoFocus onClick={handleClose} color="primary">
                        Disagree
                    </Button>
                    <Button onClick={handleAgree} color="primary" autoFocus>
                        Agree
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}

ConfirmDialog.propTypes = {
    buttonName: PropTypes.string,
    buttonColor: PropTypes.string,
    questionText: PropTypes.string,
    onAgreeAction: PropTypes.func.isRequired,
};