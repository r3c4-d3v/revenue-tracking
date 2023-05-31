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
    setErrors,
} from "@/Components/RegistrationPanel/barrel";
import { clearForm, setSuccess } from "@/slices/registrationSlice";

const AMOUNT_ERROR = "Amount field is required.";
const DESCRIPTION_ERROR = "Description field is required.";

const RegistrationPanel = () => {
    const dispatch = useDispatch<AppDispatch>();

    const currentTab = useSelector((state: RootState) => {
        return state.tab.currentTab;
    });

    const setDateToday = (): void => {
        if (!date) {
            dispatch(setDate(dayjs(new Date()).format()));
        }
    };

    const amount = useSelector((state: RootState) => {
        return state.registrationData.amount;
    });
    const errors = useSelector((state: RootState) => {
        return state.registrationData.errors;
    });

    const date = useSelector((state: RootState) => {
        return state.registrationData.date;
    });

    const description = useSelector((state: RootState) => {
        return state.registrationData.description;
    });

    const onChangeAmount = (event: OnChangeProps): void => {
        const { value } = event.target;

        setDateToday();

        dispatch(setAmount(value.replace(floatRegex, "$1")));
    };

    const onBlurAmount = (): void => {
        dispatch(setAmount(amount.replace(finalFloatRegex, "")));
    };

    const onDescriptionChange = (event: OnChangeProps): void => {
        const { value } = event.target;

        setDateToday();

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

        if (!date) {
            dispatch(setDate(dayjs(new Date()).format()));
        }

        if (!amount) {
            dispatch(
                setErrors({
                    message: "Amount field is required.",
                })
            );
            return;
        }

        if (!description) {
            dispatch(
                setErrors({
                    message: "Description field is required.",
                })
            );
            return;
        }

        if (!amount || !description) {
            return;
        }

        dispatch(clearForm());

        dispatch(setSuccess(true));

        console.log("success");
    };

    const amountStyle = {
        "& .MuiOutlinedInput-notchedOutline": {
            borderColor: errors.some((error) => error.message === AMOUNT_ERROR)
                ? "red"
                : "rgba(221, 0, 0, 0.23)",
        },
    };

    const descriptionStyle = {
        "& .MuiOutlinedInput-notchedOutline": {
            borderColor: errors.some(
                (error) => error.message === DESCRIPTION_ERROR
            )
                ? "red"
                : "rgba(221, 0, 0, 0.23)",
        },
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
                        sx={amountStyle}
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
                        sx={descriptionStyle}
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
