import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/store";
import { setTab } from "@/slices/tabSlice";
import Tab from "@mui/material/Tab";
import Tabs from "@mui/material/Tabs";
import AddBoxIcon from "@mui/icons-material/AddBox";
import GridOnIcon from "@mui/icons-material/GridOn";

const TabMenu = () => {
    const dispatch = useDispatch<AppDispatch>();
    const currentTab = useSelector((state: RootState) => state.tab.currentTab);
    const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
        dispatch(setTab(newValue));
    };

    return (
        <Tabs
            aria-label="tabs"
            variant="fullWidth"
            value={currentTab}
            onChange={handleTabChange}
        >
            <Tab icon={<AddBoxIcon />} aria-label="New entry" />
            <Tab icon={<GridOnIcon />} aria-label="List entries" />
        </Tabs>
    );
};

export default TabMenu;
