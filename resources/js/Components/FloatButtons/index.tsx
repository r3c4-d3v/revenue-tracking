import React from "react";
import {
    Fab,
    RootState,
    DeleteIcon,
    useSelector,
} from "@/Components/FloatButtons/barrel";

const FloatButtons = () => {
    const toBeDeleted = useSelector(
        (state: RootState) => state.data.toBeDeleted
    );

    return (
        <React.Fragment>
            {toBeDeleted.length > 0 && (
                <Fab
                    sx={{
                        bottom: "2rem",
                        right: "2rem",
                        position: "absolute",
                    }}
                    color="error"
                    aria-label="remove"
                >
                    <DeleteIcon />
                </Fab>
            )}
        </React.Fragment>
    );
};

export default FloatButtons;
