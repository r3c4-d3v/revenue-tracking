import "../../scss/app.scss";

import {
    Box,
    Tab,
    Tabs,
    React,
    Button,
    MenuItem,
    TabPanel,
    TextField,
    GridOnIcon,
    AddBoxIcon,
    BasicDatePicker,
    ApplicationLogo,
    useTabChangeManager,
} from "@/Barrels/App";

import FavoriteIcon from "@mui/icons-material/Favorite";

// @todo Separating inline props from components
const formatMoney = (value: any) => {
    let newValue = value.replace(/\D/g, "");
    newValue = newValue.replace(/^(\d+)(\d{2})$/, "$1.$2");
    newValue = newValue.replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.");

    if (newValue === "NaN") {
        return "";
    }

    return newValue;
};

const currencies = [
    {
        value: "USD",
        label: "$",
    },
    {
        value: "EUR",
        label: "€",
    },
    {
        value: "BTC",
        label: "฿",
    },
    {
        value: "JPY",
        label: "¥",
    },
    {
        value: "BRL",
        label: "R$",
    },
    {
        value: "BRL",
        label: "RTESP",
    },
];

const App: React.FC = () => {
    const { selectedTab, handleTabChange } = useTabChangeManager();
    const [amount, setAmount] = React.useState();

    const handleAmountChange = (event: any) => {
        setAmount(formatMoney(event.target.value));
    };

    return (
        <React.Fragment>
            <div className="page-container">
                <div className="wrapper">
                    <ApplicationLogo className="logo" />
                    <h2 className="title">Revenue Tracking</h2>

                    <main className="content">
                        <section className="wrapper">
                            <Box
                                component="form"
                                sx={{
                                    "& .MuiTextField-root": {
                                        m: 1,
                                        width: "6ch",
                                    },
                                }}
                                noValidate
                                autoComplete="off"
                            >
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
                                    <Box
                                        sx={{
                                            display: "flex",
                                            flexDirection: "column",
                                            padding: 0,
                                            gap: "1rem",
                                            "& .MuiFormControl-root": {
                                                width: "100%",
                                                margin: 0,
                                            },
                                        }}
                                    >
                                        <BasicDatePicker label="Date" />
                                        <Box
                                            sx={{
                                                flexDirection: "row",
                                                display: "flex",
                                                gap: "1rem",
                                                "& > :first-of-type": {
                                                    maxWidth: "12ch",
                                                },
                                            }}
                                        >
                                            <TextField
                                                id="outlined-select-currency"
                                                select
                                                label="Currency"
                                            >
                                                {currencies.map((option) => (
                                                    <MenuItem
                                                        key={option.value}
                                                        value={option.value}
                                                    >
                                                        {option.label}
                                                    </MenuItem>
                                                ))}
                                            </TextField>

                                            <TextField
                                                onChange={handleAmountChange}
                                                inputProps={{
                                                    inputMode: "numeric",
                                                    pattern: "[0-9]*",
                                                }}
                                                fullWidth
                                                id="outlined-amount"
                                                label="Amount"
                                                value={amount}
                                                variant="outlined"
                                            />
                                        </Box>
                                        <Box>
                                            <TextField
                                                id="outlined-multiline-description"
                                                label="Description"
                                                multiline
                                                rows={4}
                                                defaultValue=""
                                            />
                                        </Box>
                                        <Box
                                            sx={{
                                                display: "flex",
                                                justifyContent: "flex-end",
                                            }}
                                        >
                                            <Button
                                                variant="outlined"
                                                color="success"
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
                                <span className="description">Made with love</span>
                            </a>
                        </div>
                    </footer>
                </div>
            </div>
        </React.Fragment>
    );
};
export default App;
