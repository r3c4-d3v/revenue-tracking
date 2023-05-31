import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { DateValidationError } from "@mui/x-date-pickers";

type DateErrorProps = DateValidationError | null;

interface ErrorsProps {
    errors: any;
    dateErrors: DateErrorProps | string;
    dateErrorMessage: string;
}

const initialState: ErrorsProps = {
    errors: [],
    dateErrors: null,
    dateErrorMessage: "",
};

const ThrownErrors = createSlice({
    name: "thrownErrors",
    initialState,
    reducers: {
        setErrors: (state, action: PayloadAction<[]>) => {
            state.errors = action.payload;
        },
        setDateErrors: (state, action: PayloadAction<DateErrorProps>) => {
            switch (action.payload) {
                case "invalidDate": {
                    state.dateErrorMessage = "Date is not valid";
                    break;
                }
                default: {
                    state.dateErrorMessage = "";
                    break;
                }
            }
        },
    },
});

export const { setErrors, setDateErrors } = ThrownErrors.actions;
export default ThrownErrors.reducer;
