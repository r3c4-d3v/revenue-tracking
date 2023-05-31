import React from "react";

export interface TabChangeManager {
    selectedTab: number;
    handleTabChange: (event: React.SyntheticEvent, newValue: number) => void;
}
