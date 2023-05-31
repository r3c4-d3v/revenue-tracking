interface SxProps {
    form: {};
    amountContainer: {};
    buttonsContainer: {};
}

export const Sx: SxProps = {
    form: {
        display: "flex",
        flexDirection: "column",
        padding: 0,
        marginTop: "10px",
        gap: "1rem",
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
