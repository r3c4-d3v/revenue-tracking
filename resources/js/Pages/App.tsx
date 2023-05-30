import "../../scss/app.scss";
import { Sx } from "./sxStyles";

import React from "react";

import {
    Box,
    Tab,
    Tabs,
    dayjs,
    Button,
    TabPanel,
    TextField,
    DateField,
    GridOnIcon,
    AddBoxIcon,
    AdapterDayjs,
    FavoriteIcon,
    EuroSymbolIcon,
    InputAdornment,
    ApplicationLogo,
    DescriptionIcon,
    useReactHookForm,
    CalendarMonthIcon,
    useTabChangeManager,
    DateValidationError,
    LocalizationProvider,
} from "@/Barrels/App";

const isRequired = { required: true };

const isDecimalRegex = /^[-+]?[0-9]*\.?[0-9]+(,[0-9]+)?$/;

const getError = (dateError: string | null) => {
    switch (dateError) {
        case "invalidDate": {
            return "Date is not valid";
        }

        default: {
            return " ";
        }
    }
};

const App: React.FC = () => {
    const { selectedTab, handleTabChange } = useTabChangeManager();

    const [dateError, setDateError] =
        React.useState<DateValidationError | null>(null);

    const [date, setDate] = React.useState<dayjs.Dayjs | null>(
        dayjs(new Date())
    );

    const {
        register,
        handleSubmit,
        formState: { errors },
        watch,
        setValue,
    } = useReactHookForm();

    const amount = watch("amount", "");

    const errorMessage = React.useMemo(() => getError(dateError), [dateError]);

    React.useEffect(() => setValue("date", date), [date]);

    const onSubmit = (data: any) => console.log(data);

    return (
        <React.Fragment>
            <section className="page-container">
                <div className="wrapper">
                    <ApplicationLogo className="logo" />
                    <h2 className="title">Revenue Tracking</h2>

                    <main className="content">
                        <div className="wrapper">
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
                                        noValidate
                                        sx={Sx.form}
                                        component="form"
                                        autoComplete="off"
                                        onSubmit={handleSubmit(onSubmit)}
                                    >
                                        <LocalizationProvider
                                            dateAdapter={AdapterDayjs}
                                        >
                                            <DateField
                                                label="Date"
                                                value={date}
                                                onChange={(newDate) => {
                                                    setDate(newDate);
                                                }}
                                                onError={(newError) =>
                                                    setDateError(newError)
                                                }
                                                slotProps={{
                                                    textField: {
                                                        helperText:
                                                            errorMessage,
                                                    },
                                                }}
                                                InputProps={{
                                                    startAdornment: (
                                                        <InputAdornment position="start">
                                                            <CalendarMonthIcon />
                                                        </InputAdornment>
                                                    ),
                                                }}
                                            />
                                        </LocalizationProvider>

                                        <TextField
                                            fullWidth
                                            value={amount}
                                            label="Amount"
                                            variant="outlined"
                                            id="outlined-amount"
                                            error={!!errors.amount}
                                            helperText={
                                                errors.amount
                                                    ? "Must be decimal"
                                                    : " "
                                            }
                                            {...register("amount", {
                                                ...isRequired,
                                                validate: {
                                                    isDecimal: (value) =>
                                                        isDecimalRegex.test(
                                                            value
                                                        ),
                                                },
                                            })}
                                            InputProps={{
                                                startAdornment: (
                                                    <InputAdornment position="start">
                                                        <EuroSymbolIcon />
                                                    </InputAdornment>
                                                ),
                                                inputMode: "numeric",
                                            }}
                                        />

                                        <TextField
                                            rows={4}
                                            multiline
                                            label="Description"
                                            id="outlined-description"
                                            error={!!errors.desc}
                                            {...register("desc", {
                                                ...isRequired,
                                            })}
                                            helperText={
                                                errors.desc
                                                    ? "Required field"
                                                    : " "
                                            }
                                            InputProps={{
                                                startAdornment: (
                                                    <InputAdornment position="start">
                                                        <DescriptionIcon />
                                                    </InputAdornment>
                                                ),
                                            }}
                                        />

                                        <Button
                                            type="submit"
                                            color="success"
                                            variant="outlined"
                                        >
                                            Submit
                                        </Button>
                                    </Box>
                                </TabPanel>

                                <TabPanel index={1} value={selectedTab}>
                                    Item Two
                                </TabPanel>
                            </Box>
                        </div>
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
            </section>
        </React.Fragment>
    );
};
export default App;
