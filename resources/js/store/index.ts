import { configureStore } from "@reduxjs/toolkit";
import tabSlice from "@/slices/tabSlice";
import listingSlice from "@/slices/listingSlice";

const store = configureStore({
    reducer: {
        tab: tabSlice,
        listing: listingSlice,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
