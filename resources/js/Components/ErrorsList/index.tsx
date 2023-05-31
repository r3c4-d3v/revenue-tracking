import React from "react";
import { Alert, useSelector, RootState } from "@/Components/ErrorsList/barrel";
import { Snackbar, Stack } from "@mui/material";
import {
    AppDispatch,
    useDispatch,
} from "@/Components/RegistrationPanel/barrel";
import { setSuccess } from "@/slices/registrationSlice";

const ErrorsList = () => {
    const dispatch = useDispatch<AppDispatch>();

    const errors = useSelector(
        (state: RootState) => state.registrationData.errors
    );

    const dateErrorMessage = useSelector(
        (state: RootState) => state.registrationData.dateErrorMessage
    );

    const amount = useSelector((state: RootState) => {
        return state.registrationData.amount;
    });

    const date = useSelector((state: RootState) => {
        return state.registrationData.date;
    });

    const description = useSelector((state: RootState) => {
        return state.registrationData.description;
    });

    const success = useSelector((state: RootState) => {
        return state.registrationData.success;
    });

    const isValidForm = amount && date && description;

    const handleClose = () => {
        dispatch(setSuccess(false));
    };

    return (
        <React.Fragment>
            {errors.map((error, index) => (
                <Alert key={index} severity="error" sx={{ width: "100%" }}>
                    {error.message}
                </Alert>
            ))}

            {errors.length <= 0 && isValidForm && (
                <Alert severity="success" sx={{ width: "100%" }}>
                    Everything seems correct.
                </Alert>
            )}

            <Stack spacing={1} sx={{ width: "100%" }}>
                <Snackbar
                    open={success}
                    onClose={handleClose}
                    autoHideDuration={3000}
                >
                    <Alert severity="success" onClose={handleClose}>
                        Entry added!
                    </Alert>
                </Snackbar>
            </Stack>

            {!success && !isValidForm && errors.length <= 0 && (
                <Alert severity="info" sx={{ width: "100%" }}>
                    Please fill in all the fields and then click on submit!
                </Alert>
            )}

            {dateErrorMessage === "Date is not valid" && (
                <Alert severity="error" sx={{ width: "100%" }}>
                    Date is not valid
                </Alert>
            )}
        </React.Fragment>
    );
};

export default ErrorsList;
