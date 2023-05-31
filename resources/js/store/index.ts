import { configureStore } from "@reduxjs/toolkit";
import tabSlice from "@/slices/tabSlice";
import dataSlice from "@/slices/dataSlice";
import thrownErrorsSlice from "@/slices/thrownErrorsSlice";
import registrationSlice from "@/slices/registrationSlice";

const store = configureStore({
    reducer: {
        tab: tabSlice,
        data: dataSlice,
        thrownErrors: thrownErrorsSlice,
        registrationData: registrationSlice,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
