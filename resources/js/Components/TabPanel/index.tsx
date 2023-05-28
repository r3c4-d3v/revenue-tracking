import { TabPanelProps, TabPanelElement, Box } from "@/Barrels/TabPanel";

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
