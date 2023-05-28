import React from "react";
import { TabChangeManager } from "@/Barrels/types/hooks";

const useTabChangeManager = (): TabChangeManager => {
    const [selectedTab, setSelectedTab] = React.useState<number>(0);

    const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
        setSelectedTab(newValue);
    };

    return { selectedTab, handleTabChange };
};

export default useTabChangeManager;
