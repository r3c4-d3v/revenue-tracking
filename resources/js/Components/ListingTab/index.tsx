import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "@/store";
import { DataGrid, GridColDef, GridValueGetterParams } from "@mui/x-data-grid";
import { Box } from "@mui/material";
import TabPanel from "@/Components/TabPanel";

interface RowsProps {
    lastName: string;
    firstName: string;
    id: number;
    age: number;
}

const ListingTab = () => {
    const currentTab = useSelector((state: RootState) => state.tab.currentTab);

    const [hasSelection, setHasSelection] = React.useState<boolean>(false);

    const rows: RowsProps[] = [
        { id: 1, lastName: "Snow", firstName: "Jon", age: 35 },
        { id: 2, lastName: "Lannister", firstName: "Cersei", age: 42 },
        { id: 3, lastName: "Lannister", firstName: "Jaime", age: 45 },
        { id: 4, lastName: "Stark", firstName: "Arya", age: 16 },
        { id: 5, lastName: "Targaryen", firstName: "Daenerys", age: 20 },
        { id: 6, lastName: "Melisandre", firstName: "Sansa", age: 150 },
        { id: 7, lastName: "Clifford", firstName: "Ferrara", age: 44 },
        { id: 8, lastName: "Frances", firstName: "Rossini", age: 36 },
        { id: 9, lastName: "Roxie", firstName: "Harvey", age: 65 },
    ];

    const columns: GridColDef[] = [
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
