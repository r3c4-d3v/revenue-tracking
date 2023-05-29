import {
    DatePicker,
    DemoContainer,
    AdapterDateFns,
    LocalizationProvider,
    BasicDatePickerProps,
} from "@/Barrels/BasicDatePicker";

const BasicDatePicker = (props: BasicDatePickerProps) => {
    const { label} = props;

    return (
        <LocalizationProvider dateAdapter={AdapterDateFns}>
            <DemoContainer components={["DatePicker"]}>
                <DatePicker label={label} />
            </DemoContainer>
        </LocalizationProvider>
    );
};

export default BasicDatePicker;
