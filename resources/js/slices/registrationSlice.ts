import {
    createSlice,
    CustomError,
    PayloadAction,
    DateErrorProps,
} from "@/Components/RegistrationPanel/barrel";

interface RegistrationProps {
    amount: string;
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

            if (state.amount.length > 0) {
                state.errors = state.errors.filter((error) => {
                    return error.message !== "Amount field is required.";
                });
            } else {
                state.errors.push({
                    message: "Amount field is required.",
                });
            }
        },
        setDescription: (state, action: PayloadAction<string>): void => {
            state.description = action.payload;

            if (state.description.length > 0) {
                state.errors = state.errors.filter((error) => {
                    return error.message !== "Description field is required.";
                });
            } else {
                state.errors.push({
                    message: "Description field is required.",
                });
            }
        },
        setDate: (state, action: PayloadAction<string>): void => {
            state.date = action.payload;
        },
        setErrors: (state, action: PayloadAction<CustomError>) => {
            state.errors.push({ message: action.payload.message });
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

export const { setDateErrors, setErrors, setAmount, setDescription, setDate } =
    registrationSlice.actions;

export default registrationSlice.reducer;
