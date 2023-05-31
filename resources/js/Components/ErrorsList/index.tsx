import React from "react";
import { Alert, useSelector, RootState } from "@/Components/ErrorsList/barrel";

const ErrorsList = () => {
    const errors = useSelector(
        (state: RootState) => state.registrationData.errors
    );

    const dateErrorMessage = useSelector(
        (state: RootState) => state.registrationData.dateErrorMessage
    );

    return (
        <React.Fragment>
            {errors.map((error) => (
                <Alert severity="error" sx={{ width: "100%" }}>
                    {error.message}
                </Alert>
            ))}

            {dateErrorMessage === "Date is not valid" && (
                <Alert severity="error" sx={{ width: "100%" }}>
                    Date is not valid
                </Alert>
            )}
        </React.Fragment>
    );
};

export default ErrorsList;
