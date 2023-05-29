import {
    DatePicker,
    DemoContainer,
    AdapterDateFns,
    LocalizationProvider,
    BasicDatePickerProps,
} from "@/Barrels/BasicDatePicker";
import React from "react";
import { DateValidationError } from "@mui/x-date-pickers";

type ErrorProps = DateValidationError;

const BasicDatePicker = (props: BasicDatePickerProps) => {
    const { label } = props;
    const [error, setError] = React.useState<DateValidationError | null>(null);

    const errorMessage = React.useMemo(() => {
        switch (error) {
            case "invalidDate": {
                return "Invalid date";
            }
            default: {
                return "";
            }
        }
    }, [error]);

    return (
        <LocalizationProvider dateAdapter={AdapterDateFns}>
            <DatePicker
                label={label}
                disableFuture
                onError={(err: ErrorProps): void => setError(err)}
                slotProps={{
                    textField: {
                        helperText: errorMessage || " ",
                    },
                }}
            />
        </LocalizationProvider>
    );
};

export default BasicDatePicker;
