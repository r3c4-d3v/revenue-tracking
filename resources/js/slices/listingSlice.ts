import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ListingProps {
    list: [{}];
}

const initialState: ListingProps = {
    list: [{}],
};

const listingSlice = createSlice({
    name: "listing",
    initialState,
    reducers: {
        setSelecteds: (state, action: PayloadAction<Array<{}>>) => {
            state.list = [{}];
        },
    },
});

export const { setSelecteds } = listingSlice.actions;
export default listingSlice.reducer;
