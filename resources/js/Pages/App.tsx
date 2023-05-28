import "../../scss/app.scss";
import React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import AddBoxIcon from "@mui/icons-material/AddBox";
import GridOnIcon from "@mui/icons-material/GridOn";

import ApplicationLogo from "@/Components/ApplicationLogo";
import { Box } from "@mui/material";
import TabPanel from "@/Components/TabPanel";

const App: React.FC = () => {
    const [selectedTab, setSelectedTab] = React.useState<number>(0);

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setSelectedTab(newValue);
    };

    return (
        <React.Fragment>
            <div className="page-container">
                <div className="wrapper">
                    <ApplicationLogo className="logo" />
                    <h2 className="title">Revenue Tracking Web Application</h2>

                    <main className="content">
                        <section className="wrapper">
                            <Box>
                                <Tabs
                                    value={selectedTab}
                                    variant="fullWidth"
                                    onChange={handleChange}
                                    aria-label="tabs"
                                >
                                    <Tab
                                        aria-label="New entry"
                                        icon={<AddBoxIcon />}
                                    />
                                    <Tab
                                        aria-label="List entries"
                                        icon={<GridOnIcon />}
                                    />
                                </Tabs>
                                <TabPanel index={0} value={selectedTab}>
                                    Item One
                                </TabPanel>
                                <TabPanel index={1} value={selectedTab}>
                                    Item Two
                                </TabPanel>
                            </Box>
                        </section>
                    </main>
                    <footer className="footer">
                        <div className="copyright">
                            <a
                                className="link"
                                href="https://github.com/r3c4-d3v"
                            >
                                <span className="icon">&hearts;</span>

                                <span className="text">Made with love</span>
                            </a>
                        </div>
                    </footer>
                </div>
            </div>
        </React.Fragment>
    );
};
export default App;
