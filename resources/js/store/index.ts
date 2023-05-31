import {
    tabSlice,
    dataSlice,
    configureStore,
    registrationSlice,
} from "@/store/barrels";

const store = configureStore({
    reducer: {
        tab: tabSlice,
        data: dataSlice,
        registrationData: registrationSlice,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
