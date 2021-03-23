import { Snackbar } from "@material-ui/core";
import { Alert } from "@material-ui/lab";
import { useState } from "react";
import { SnackbarContext } from "./ShackbarContext";

export const SnackbarProvider = ({ children }) => {
    const [snackbar, setSnackbar] = useState(
        {
            message: 'Success!',
            type: 'success',
            open: false
        });

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        setSnackbar({ open: false });
    };

    const showErrors = (errorResponse) => {
        if (errorResponse && errorResponse.data && errorResponse.data.errors) {
            Object.entries(errorResponse.data.errors).map((errors) => (
                errors.map((error) => (
                    setSnackbar({ message: error[0], type: 'error', open: true })
                ))
            ))
        }

        return false;
    };

    const showSuccess = (message) => {
        setSnackbar({ message: message, type: 'success', open: true })
    };

    return (
        <SnackbarContext.Provider value={{ snackbar, setSnackbar, showErrors, handleClose, showSuccess }}>
            {children}
            <Snackbar open={snackbar.open} autoHideDuration={6000} onClose={handleClose} anchorOrigin={{ vertical: 'top', horizontal: 'right' }}>
                <Alert onClose={handleClose} severity={snackbar.type} variant="filled">
                    {snackbar.message}
                </Alert>
            </Snackbar>
        </SnackbarContext.Provider>
    );
};