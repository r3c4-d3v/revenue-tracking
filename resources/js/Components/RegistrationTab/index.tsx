import React from "react";
import { Sx } from "@/Pages/sxStyles";
import { useSelector } from "react-redux";
import { RootState } from "@/store";
import TabPanel from "@/Components/TabPanel";
import TextField from "@mui/material/TextField";
import {
    DateValidationError,
    LocalizationProvider,
    DateField,
} from "@mui/x-date-pickers";
import { Box } from "@mui/material";
import { Button } from "@mui/material";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import EuroSymbolIcon from "@mui/icons-material/EuroSymbol";
import InputAdornment from "@mui/material/InputAdornment";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import DescriptionIcon from "@mui/icons-material/Description";
import { useForm as useReactHookForm } from "react-hook-form";
import dayjs from "dayjs";

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

const RegistrationTab = () => {
    const currentTab = useSelector((state: RootState) => state.tab.currentTab);
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

    const onSubmit = (data: any) => console.log(data);

    const errorMessage = React.useMemo(() => getError(dateError), [dateError]);

    const amount = watch("amount", "");

    React.useEffect(() => setValue("date", date), [date]);

    return (
        <TabPanel index={0} value={currentTab}>
            <Box
                noValidate
                sx={Sx.form}
                component="form"
                autoComplete="off"
                onSubmit={handleSubmit(onSubmit)}
            >
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DateField
                        label="Date"
                        value={date}
                        onChange={(newDate) => {
                            setDate(newDate);
                        }}
                        onError={(newError) => setDateError(newError)}
                        slotProps={{
                            textField: {
                                helperText: errorMessage,
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
                    helperText={errors.amount ? "Must be decimal" : " "}
                    {...register("amount", {
                        ...isRequired,
                        validate: {
                            isDecimal: (value) => isDecimalRegex.test(value),
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
                    helperText={errors.desc ? "Required field" : " "}
                    InputProps={{
                        startAdornment: (
                            <InputAdornment position="start">
                                <DescriptionIcon />
                            </InputAdornment>
                        ),
                    }}
                />

                <Button type="submit" color="success" variant="outlined">
                    Submit
                </Button>
            </Box>
        </TabPanel>
    );
};

export default RegistrationTab;
