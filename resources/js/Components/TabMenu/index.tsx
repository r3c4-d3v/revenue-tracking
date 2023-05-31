import React from "react";
import {
    Tab,
    Tabs,
    setTab,
    RootState,
    AddBoxIcon,
    GridOnIcon,
    useSelector,
    useDispatch,
    AppDispatch,
} from "@/Components/TabMenu/barrel";

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
