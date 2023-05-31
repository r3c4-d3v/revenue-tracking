import React from "react";
import { Alert, useSelector, RootState } from "@/Components/ErrorsList/barrel";

const ErrorsList = () => {
    const errors = useSelector((state: RootState) => state.thrownErrors.errors);
    const dateErrorMessage = useSelector(
        (state: RootState) => state.thrownErrors.dateErrorMessage
    );

    return (
        <React.Fragment>
            {errors.desc && (
                <Alert severity="error" sx={{ width: "100%" }}>
                    Description field is required
                </Alert>
            )}

            {errors.amount && (
                <Alert severity="error" sx={{ width: "100%" }}>
                    Amount field is required
                </Alert>
            )}

            {errors.amount?.type === "isDecimal" && (
                <Alert severity="error" sx={{ width: "100%" }}>
                    Amount must be decimal
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
