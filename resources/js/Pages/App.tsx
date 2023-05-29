import "../../scss/app.scss";
import { Sx } from "./sxStyles";

import React from "react";

import {
    Box,
    Tab,
    Tabs,
    Button,
    MenuItem,
    useMasks,
    TabPanel,
    TextField,
    currencies,
    GridOnIcon,
    AddBoxIcon,
    FavoriteIcon,
    OptionsProps,
    FormEventProps,
    BasicDatePicker,
    ApplicationLogo,
    HandleAmountProps,
    useTabChangeManager,
    InputBaseComponentProps,
} from "@/Barrels/App";

const amountFieldProps: InputBaseComponentProps = {
    inputMode: "numeric",
    pattern: "[0-9]*",
};

const App: React.FC = () => {
    const { money } = useMasks();
    const { selectedTab, handleTabChange } = useTabChangeManager();
    const [amount, setAmount] = React.useState<string>("");

    const handleAmountChange = (event: HandleAmountProps): void => {
        const { value } = event.target;

        setAmount(money(value));
    };

    return (
        <React.Fragment>
            <div className="page-container">
                <div className="wrapper">
                    <ApplicationLogo className="logo" />
                    <h2 className="title">Revenue Tracking</h2>

                    <main className="content">
                        <section className="wrapper">
                            <Box sx={Sx.tabsContainer}>
                                <Tabs
                                    aria-label="tabs"
                                    variant="fullWidth"
                                    value={selectedTab}
                                    onChange={handleTabChange}
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
                                    <Box
                                        sx={Sx.form}
                                        noValidate
                                        component="form"
                                        autoComplete="off"
                                        onSubmit={(e: FormEventProps): void => {
                                            e.preventDefault();
                                        }}
                                    >
                                        <BasicDatePicker label="Date" />

                                        <Box sx={Sx.amountContainer}>
                                            <TextField
                                                select
                                                helperText=" "
                                                defaultValue=""
                                                label="Currency"
                                                id="outlined-select-currency"
                                            >
                                                {currencies.map(
                                                    (option: OptionsProps) => (
                                                        <MenuItem
                                                            key={option.value}
                                                            value={option.value}
                                                        >
                                                            {option.label}
                                                        </MenuItem>
                                                    )
                                                )}
                                            </TextField>

                                            <TextField
                                                fullWidth
                                                value={amount}
                                                label="Amount"
                                                helperText=" "
                                                variant="outlined"
                                                id="outlined-controlled"
                                                inputProps={amountFieldProps}
                                                onChange={handleAmountChange}
                                            />
                                        </Box>

                                        <Box>
                                            <TextField
                                                rows={4}
                                                multiline
                                                helperText=" "
                                                label="Description"
                                                id="outlined-multiline-description"
                                            />
                                        </Box>

                                        <Box sx={Sx.buttonsContainer}>
                                            <Button
                                                type="submit"
                                                color="success"
                                                variant="outlined"
                                            >
                                                Submit
                                            </Button>
                                        </Box>
                                    </Box>
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
                                <FavoriteIcon className="icon" />
                                <span className="description">
                                    Made with love
                                </span>
                            </a>
                        </div>
                    </footer>
                </div>
            </div>
        </React.Fragment>
    );
};
export default App;
