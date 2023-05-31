import { AxiosInstance } from "axios";
import { DateValidationError } from "@mui/x-date-pickers";

declare global {
    interface Window {
        axios: AxiosInstance;
    }
}

export interface CustomError {
    message: string;
}

export interface CustomErrorsProps {
    errors: CustomError[];
    dateErrors: DateErrorProps | string;
    dateErrorMessage: string;
}

export type DateErrorProps = DateValidationError | null;
