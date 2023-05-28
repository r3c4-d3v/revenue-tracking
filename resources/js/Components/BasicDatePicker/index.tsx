import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

const BasicDatePicker = () => {
    return (
        <LocalizationProvider dateAdapter={AdapterDateFns}>
            <DemoContainer components={["DatePicker"]}>
                <DatePicker label="Basic date picker" />
            </DemoContainer>
        </LocalizationProvider>
    );
};

export default BasicDatePicker;
