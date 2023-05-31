// import React from "react";
// import { useSelector } from "react-redux";
// import { RootState } from "@/store";
// import { DataGrid } from "@mui/x-data-grid";
// import { Box } from "@mui/material";
// import TabPanel from "@/Components/TabPanel";
//
// const ListingTab = () => {
//     const currentTab = useSelector((state: RootState) => state.tab.currentTab);
//     const rows = useSelector((state: RootState) => state.data.rows);
//     const columns = useSelector((state: RootState) => state.data.columns);
//
//     const [hasSelection, setHasSelection] = React.useState<boolean>(false);
//
//     return (
//         <TabPanel index={1} value={currentTab}>
//             <Box sx={{ gap: "1rem" }}>
//                 <DataGrid
//                     rows={rows}
//                     columns={columns}
//                     onRowSelectionModelChange={() =>
//                         setHasSelection(!hasSelection)
//                     }
//                     initialState={{
//                         pagination: {
//                             paginationModel: {
//                                 page: 0,
//                                 pageSize: 5,
//                             },
//                         },
//                     }}
//                     pageSizeOptions={[5, 10]}
//                     checkboxSelection
//                 />
//             </Box>
//         </TabPanel>
//     );
// };
//
// export default ListingTab;
