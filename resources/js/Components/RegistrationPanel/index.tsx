import {
    Box,
    dayjs,
    React,
    setDate,
    TabPanel,
    TextField,
    setAmount,
    RootState,
    ErrorsList,
    DatePicker,
    floatRegex,
    useSelector,
    useDispatch,
    AppDispatch,
    SubmitButton,
    AdapterDayjs,
    OnChangeProps,
    setDateErrors,
    setDescription,
    amountAdorment,
    finalFloatRegex,
    OnChangeDateProps,
    DateValidationError,
    descriptionAdorment,
    LocalizationProvider,
} from "@/Components/RegistrationPanel/barrel";

const RegistrationPanel = () => {
    const dispatch = useDispatch<AppDispatch>();

    const currentTab = useSelector((state: RootState) => {
        return state.tab.currentTab;
    });

    const amount = useSelector((state: RootState) => {
        return state.registrationData.amount;
    });

    const date = useSelector((state: RootState) => {
        return state.registrationData.date;
    });

    const errors = useSelector((state: RootState) => {
        return state.registrationData.errors;
    });

    const description = useSelector((state: RootState) => {
        return state.registrationData.description;
    });

    const onChangeAmount = (event: OnChangeProps): void => {
        const { value } = event.target;
        dispatch(setAmount(value.replace(floatRegex, "$1")));
    };

    const onBlurAmount = (): void => {
        dispatch(setAmount(amount.replace(finalFloatRegex, "")));
    };

    const onDescriptionChange = (event: OnChangeProps): void => {
        const { value } = event.target;
        dispatch(setDescription(value));
    };

    const onDateChange = (newDate: OnChangeDateProps) => {
        dispatch(setDate(dayjs(newDate).format()));
    };

    const handleDateError = (newError: DateValidationError) => {
        dispatch(setDateErrors(newError));
    };

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        if (errors.length > 0) {
            console.log("error");
            return;
        }

        console.log("success");
    };

    return (
        <TabPanel index={0} value={currentTab}>
            <Box
                noValidate
                component="form"
                autoComplete="off"
                onSubmit={handleSubmit}
            >
                <div className="mt-3 flex flex-col gap-3">
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <DatePicker
                            label="Date*"
                            disableFuture
                            value={date ? dayjs(date) : dayjs(new Date())}
                            onChange={onDateChange}
                            onError={handleDateError}
                        />
                    </LocalizationProvider>

                    <TextField
                        fullWidth
                        id="amount"
                        label="Amount*"
                        value={amount}
                        name={"amount"}
                        variant="outlined"
                        onBlur={onBlurAmount}
                        onChange={onChangeAmount}
                        InputProps={amountAdorment}
                    />

                    <TextField
                        rows={4}
                        multiline
                        id="description"
                        name="description"
                        variant="outlined"
                        label="Description"
                        value={description}
                        onChange={onDescriptionChange}
                        InputProps={descriptionAdorment}
                    />

                    <ErrorsList />

                    <SubmitButton />
                </div>
            </Box>
        </TabPanel>
    );
};

export default RegistrationPanel;
