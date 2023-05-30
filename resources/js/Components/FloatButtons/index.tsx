import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "@/store";
import DeleteIcon from "@mui/icons-material/Delete";
import { Fab } from "@mui/material";

const FloatButtons = () => {
    const list = useSelector((state: RootState) => state.listing.list);

    return (
        <React.Fragment>
            {list.length > 0 && (
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
