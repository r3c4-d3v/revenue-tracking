import {
    createSlice,
    CustomError,
    PayloadAction,
    DateErrorProps,
} from "@/Components/RegistrationPanel/barrel";

const AMOUNT_ERROR = "Amount field is required.";
const DESCRIPTION_ERROR = "Description field is required.";

interface RegistrationProps {
    amount: string;
    success: boolean;
    description: string;
    date: string | null;
    errors: CustomError[];
    dateErrorMessage: string;
    dateErrors: null | DateErrorProps;
}

const initialState: RegistrationProps = {
    amount: "",
    date: null,
    errors: [],
    success: false,
    description: "",
    dateErrors: null,
    dateErrorMessage: "",
};

const registrationSlice = createSlice({
    name: "registrationSlice",
    initialState,
    reducers: {
        setAmount: (state, action: PayloadAction<string>): void => {
            state.amount = action.payload;
            state.success = false;

            if (state.amount.length > 0) {
                state.errors = state.errors.filter((error) => {
                    return error.message !== AMOUNT_ERROR;
                });
            } else {
                const hasInErrors = state.errors.some((error) => {
                    return error.message === AMOUNT_ERROR;
                });

                if (!hasInErrors) {
                    state.errors.push({
                        message: AMOUNT_ERROR,
                    });
                }
            }
        },
        setDescription: (state, action: PayloadAction<string>): void => {
            state.description = action.payload;
            state.success = false;

            if (state.description.length > 0) {
                state.errors = state.errors.filter((error) => {
                    return error.message !== DESCRIPTION_ERROR;
                });
            } else {
                const hasInErrors = state.errors.some((error) => {
                    return error.message === DESCRIPTION_ERROR;
                });
                if (!hasInErrors) {
                    state.errors.push({
                        message: DESCRIPTION_ERROR,
                    });
                }
            }
        },
        setDate: (state, action: PayloadAction<string>): void => {
            state.date = action.payload;
            state.success = false;
        },
        clearForm: (state): void => {
            state.date = null;
            state.amount = "";
            state.description = "";
            state.errors = [];
        },
        setSuccess: (state, action: PayloadAction<boolean>): void => {
            state.success = action.payload;
        },
        setErrors: (state, action: PayloadAction<CustomError>) => {
            const hasInErrors = state.errors.some((error) => {
                return error.message === action.payload.message;
            });

            if (!hasInErrors) {
                state.errors.push({ message: action.payload.message });
            }
        },
        setDateErrors: (state, action: PayloadAction<DateErrorProps>): void => {
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

export const {
    setDate,
    clearForm,
    setErrors,
    setAmount,
    setSuccess,
    setDateErrors,
    setDescription,
} = registrationSlice.actions;

export default registrationSlice.reducer;
