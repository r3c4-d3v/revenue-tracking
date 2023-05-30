import { configureStore } from "@reduxjs/toolkit";
import tabSlice from "@/Pages/tabSlice";

const store = configureStore({
    reducer: {
        tab: tabSlice,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
