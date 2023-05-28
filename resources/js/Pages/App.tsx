import "../../scss/app.scss";

import {
    React,
    Tabs,
    Tab,
    TabPanel,
    Box,
    ApplicationLogo,
    GridOnIcon,
    AddBoxIcon,
    useTabChangeManager,
} from "@/Barrels/App";
import BasicDatePicker from "@/Components/BasicDatePicker";

const App: React.FC = () => {
    const { selectedTab, handleTabChange } = useTabChangeManager();

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
                                    onChange={handleTabChange}
                                    aria-label="tabs"
                                >
                                    <Tab
                                        icon={<AddBoxIcon />}
                                        aria-label="New entry"
                                    />
                                    <Tab
                                        icon={<GridOnIcon />}
                                        aria-label="List entries"
                                    />
                                </Tabs>
                                <TabPanel index={0} value={selectedTab}>
                                    <BasicDatePicker label="Date" />
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
