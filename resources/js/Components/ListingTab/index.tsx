import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "@/store";
import { DataGrid, GridValueGetterParams } from "@mui/x-data-grid";
import { Box } from "@mui/material";
import TabPanel from "@/Components/TabPanel";

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

const ListingTab = () => {
    const currentTab = useSelector((state: RootState) => state.tab.currentTab);
    const rows = useSelector((state: RootState) => state.data.rows);

    const [hasSelection, setHasSelection] = React.useState<boolean>(false);

    return (
        <TabPanel index={1} value={currentTab}>
            <Box sx={{ gap: "1rem" }}>
                <DataGrid
                    rows={rows}
                    columns={columns}
                    onRowSelectionModelChange={() =>
                        setHasSelection(!hasSelection)
                    }
                    initialState={{
                        pagination: {
                            paginationModel: {
                                page: 0,
                                pageSize: 5,
                            },
                        },
                    }}
                    pageSizeOptions={[5, 10]}
                    checkboxSelection
                />
            </Box>
        </TabPanel>
    );
};

export default ListingTab;
