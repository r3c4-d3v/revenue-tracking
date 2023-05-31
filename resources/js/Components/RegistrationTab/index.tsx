import React from "react";
import {
    Sx,
    Box,
    dayjs,
    Button,
    TabPanel,
    TextField,
    setAmount,
    DateField,
    RootState,
    useSelector,
    useDispatch,
    AppDispatch,
    AdapterDayjs,
    setDateErrors,
    setDescription,
    EuroSymbolIcon,
    InputAdornment,
    DescriptionIcon,
    CalendarMonthIcon,
    RegistrationErrors,
    DateValidationError,
    LocalizationProvider,
} from "@/Components/RegistrationTab/barrel";

const floatRegex: RegExp = /\b([a-zA-Z]+|[.,])\1+\b/g;

const finalFloatRegex: RegExp = /^([.,]+)|([.,]+)$|(?<!\d)[.,]|[.,](?!\d)/g;

type OnChangeProps = React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>;

type OnChangeDateProps = string | dayjs.Dayjs | null;

const SubmitButton = (): React.JSX.Element => (
    <Button type="submit" color="success" variant="outlined">
        Submit
    </Button>
);

interface StartAdornmentProps {
    startAdornment: React.JSX.Element;
}

const amountAdorment: StartAdornmentProps = {
    startAdornment: (
        <InputAdornment position="start">
            <EuroSymbolIcon />
        </InputAdornment>
    ),
};

const descriptionAdorment: StartAdornmentProps = {
    startAdornment: (
        <InputAdornment position="start">
            <DescriptionIcon />
        </InputAdornment>
    ),
};

const RegistrationPanel = () => {
    const dispatch = useDispatch<AppDispatch>();

    const [date, setDate] = React.useState<dayjs.Dayjs | string | null>(
        dayjs(new Date())
    );

    const currentTab = useSelector((state: RootState) => state.tab.currentTab);

    const amount = useSelector(
        (state: RootState) => state.registrationData.amount
    );

    const description = useSelector(
        (state: RootState) => state.registrationData.description
    );

    const onChangeAmount = (event: OnChangeProps): void => {
        const { value } = event.target;
        dispatch(setAmount(value.replace(floatRegex, "$1")));
    };

    const onBlurAmount = (): void => {
        dispatch(setAmount(amount.replace(finalFloatRegex, "")));
    };

    const onChangeDescription = (event: OnChangeProps): void => {
        const { value } = event.target;
        dispatch(setDescription(value));
    };

    const handleDateError = (newError: DateValidationError) => {
        dispatch(setDateErrors(newError));
    };

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        const { target } = event;
        const formData = new FormData(target as HTMLFormElement);

        console.log(formData.get("amount"));
        console.log(formData.get("description"));
        console.log(formData.get("date"));
    };

    return (
        <TabPanel index={0} value={currentTab}>
            <Box
                sx={Sx.form}
                component="form"
                autoComplete="off"
                onSubmit={handleSubmit}
            >
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DateField
                        label="Date"
                        name="date"
                        value={date}
                        onChange={(newDate: OnChangeDateProps) => {
                            setDate(newDate);
                        }}
                        onError={handleDateError}
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
                    required
                    fullWidth
                    id="amount"
                    label="Amount"
                    value={amount}
                    name={"amount"}
                    variant="outlined"
                    onBlur={onBlurAmount}
                    onChange={onChangeAmount}
                    InputProps={amountAdorment}
                />

                <TextField
                    required
                    rows={4}
                    multiline
                    id="description"
                    name="description"
                    label="Description"
                    value={description}
                    onChange={onChangeDescription}
                    InputProps={descriptionAdorment}
                />

                <RegistrationErrors />

                <SubmitButton />
            </Box>
        </TabPanel>
    );
};

export default RegistrationPanel;
