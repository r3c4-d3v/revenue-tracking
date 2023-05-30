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
    DeleteIcon,
    LocalizationProvider,
    DataGrid,
    columns,
    rows,
    Fab,
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

export const App: React.FC = () => {
    const { selectedTab, handleTabChange } = useTabChangeManager();

    const [dateError, setDateError] =
        React.useState<DateValidationError | null>(null);
    const [hasSelection, setHasSelection] = React.useState<boolean>(false);

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
                                            id="amount"
                                            value={amount}
                                            label="Amount"
                                            variant="outlined"
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
                                    <Box sx={{ gap: "1rem" }}>
                                        <DataGrid
                                            rows={rows}
                                            columns={columns}
                                            onRowSelectionModelChange={() =>
                                                setHasSelection(!hasSelection)
                                            }
                                            initialState={{
                                                pagination: {
                                                    paginationModel: {
                                                        page: 0,
                                                        pageSize: 5,
                                                    },
                                                },
                                            }}
                                            pageSizeOptions={[5, 10]}
                                            checkboxSelection
                                        />
                                    </Box>
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
                {hasSelection && (
                    <Fab
                        sx={{
                            bottom: "2rem",
                            right: "2rem",
                            position: "absolute",
                        }}
                        color="error"
                        aria-label="remove"
                    >
                        <DeleteIcon />
                    </Fab>
                )}
            </section>
        </React.Fragment>
    );
};
