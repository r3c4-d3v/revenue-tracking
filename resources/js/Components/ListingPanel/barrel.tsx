import { useSelector } from "react-redux";
import { RootState } from "@/store";
import { Box } from "@mui/material";
import TabPanel from "@/Components/TabPanel";
import { DataGrid, GridValueGetterParams } from "@mui/x-data-grid";

const columns = [
    { field: "id", headerName: "ID", width: 70 },
    { field: "firstName", headerName: "First name", width: 130 },
    { field: "lastName", headerName: "Last name", width: 130 },
    {
        field: "age",
        headerName: "Age",
        type: "number",
        width: 90,
    },
    {
        field: "fullName",
        headerName: "Full name",
        description: "This column has a value getter and is not sortable.",
        sortable: false,
        width: 160,
        valueGetter: (params: GridValueGetterParams) =>
            `${params.row.firstName || ""} ${params.row.lastName || ""}`,
    },
];

export { useSelector, DataGrid, TabPanel, Box, columns };

export type { RootState, GridValueGetterParams };
