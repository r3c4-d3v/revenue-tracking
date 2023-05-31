import React from "react";
import {
    Box,
    columns,
    DataGrid,
    TabPanel,
    RootState,
    useSelector,
    GridValueGetterParams,
} from "@/Components/ListingPanel/barrel";

const ListingPanel = () => {
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

export default ListingPanel;
