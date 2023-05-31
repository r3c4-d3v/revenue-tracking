import {
    TabPanelProps,
    TabPanelElement,
    Box,
} from "@/Components/TabPanel/barrel";

const TabPanel = (props: TabPanelProps): TabPanelElement => {
    const { value, index, children } = props;
    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`tab-panel-${index}`}
            aria-labelledby={`tab-${index}`}
        >
            {value === index && <Box sx={{ pt: "1rem" }}>{children}</Box>}
        </div>
    );
};

export default TabPanel;
