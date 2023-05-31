import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface RowsProps {
    id: number;
    lastName: string;
    firstName: string;
    age: number;
}

interface ListingProps {
    rows: RowsProps[];
    toBeDeleted: RowsProps[];
}

const initialState: ListingProps = {
    rows: [
        { id: 1, lastName: "Snow", firstName: "Jon", age: 35 },
        { id: 2, lastName: "Lannister", firstName: "Cersei", age: 42 },
        { id: 3, lastName: "Lannister", firstName: "Jaime", age: 45 },
        { id: 4, lastName: "Stark", firstName: "Arya", age: 16 },
        { id: 5, lastName: "Targaryen", firstName: "Daenerys", age: 20 },
        { id: 6, lastName: "Melisandre", firstName: "Sansa", age: 150 },
        { id: 7, lastName: "Clifford", firstName: "Ferrara", age: 44 },
        { id: 8, lastName: "Frances", firstName: "Rossini", age: 36 },
        { id: 9, lastName: "Roxie", firstName: "Harvey", age: 65 },
    ],
    toBeDeleted: [],
};

const dataSlice = createSlice({
    name: "data",
    initialState,
    reducers: {
        setData: (state, action: PayloadAction<RowsProps[]>) => {
            state.rows = action.payload;
        },
    },
});

export const { setData } = dataSlice.actions;
export default dataSlice.reducer;
