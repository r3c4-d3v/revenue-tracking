import React from "react";
import { TabChangeManager } from "@/Barrels/types/hooks";

const useTabChangeManager = (): TabChangeManager => {
    const [currentTab, setCurrentTab] = React.useState<number>(0);

    const handleTabChange = (
        event: React.SyntheticEvent,
        newValue: number
    ): void => setCurrentTab(newValue);

    return { selectedTab: currentTab, handleTabChange };
};

export default useTabChangeManager;
