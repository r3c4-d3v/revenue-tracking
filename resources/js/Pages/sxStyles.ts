export const Sx = {
    tabsContainer: {
        "& .MuiTextField-root": {
            m: 1,
            width: "6ch",
        },
    },
    form: {
        display: "flex",
        flexDirection: "column",
        padding: 0,
        gap: "1rem",
        "& .MuiFormControl-root": {
            width: "100%",
            margin: 0,
        },
    },
    amountContainer: {
        flexDirection: "row",
        display: "flex",
        gap: "1rem",
        "& > :first-of-type": {
            maxWidth: "12ch",
        },
    },
    buttonsContainer: {
        display: "flex",
        justifyContent: "flex-end",
    },
};
