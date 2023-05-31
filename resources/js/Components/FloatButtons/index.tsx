import React from "react";
import { RootState } from "@/store";
import { Fab } from "@mui/material";
import { useSelector } from "react-redux";
import DeleteIcon from "@mui/icons-material/Delete";

const FloatButtons = () => {
    const list = useSelector((state: RootState) => state.data.rows);

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
