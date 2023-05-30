import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface TabProps {
    currentTab: any;
}

const initialState: TabProps = {
    currentTab: 0,
};

const tabSlice = createSlice({
    name: "tab",
    initialState,
    reducers: {
        setTab: (state, action: PayloadAction<number>) => {
            state.currentTab = action.payload;
        },
    },
});

export const { setTab } = tabSlice.actions;
export default tabSlice.reducer;
