import { Box } from "@mui/material";
import { TabPanelProps } from "@/types/components";
import React from "react";
type TabPanelElement = React.JSX.Element;

const TabPanel = (props: TabPanelProps): TabPanelElement => {
    const { value, index, others, children } = props;
    return (
        <div
            {...others}
            role="tabpanel"
            hidden={value !== index}
            id={`tab-panel-${index}`}
            aria-labelledby={`tab-${index}`}
        >
            {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
        </div>
    );
};

export default TabPanel;
