import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface RegistrationProps {
    amount: string;
    description: string;
}

const initialState: RegistrationProps = {
    amount: "",
    description: "",
};

const registrationSlice = createSlice({
    name: "registrationSlice",
    initialState,
    reducers: {
        setAmount: (state, action: PayloadAction<string>) => {
            state.amount = action.payload;
        },
        setDescription: (state, action: PayloadAction<string>) => {
            state.description = action.payload;
        },
    },
});

export const { setAmount, setDescription } = registrationSlice.actions;

export default registrationSlice.reducer;
