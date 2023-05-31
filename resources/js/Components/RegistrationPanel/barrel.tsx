import React from "react";
import dayjs from "dayjs";
import { Box } from "@mui/material";
import { Button } from "@mui/material";
import ErrorsList from "../ErrorsList";
import TabPanel from "@/Components/TabPanel";
import { DateField } from "@mui/x-date-pickers";
import TextField from "@mui/material/TextField";
import { AppDispatch, RootState } from "@/store";
import { DatePicker } from "@mui/x-date-pickers";
import { useDispatch, useSelector } from "react-redux";
import { StartAdornmentProps } from "@/types/components";
import InputAdornment from "@mui/material/InputAdornment";
import { setDescription } from "@/slices/registrationSlice";
import EuroSymbolIcon from "@mui/icons-material/EuroSymbol";
import { CustomError, DateErrorProps } from "@/types/global";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import DescriptionIcon from "@mui/icons-material/Description";
import { setAmount, setDate } from "@/slices/registrationSlice";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import { setErrors, setDateErrors } from "@/slices/registrationSlice";
import { OnChangeProps, OnChangeDateProps } from "@/types/components";
import { DateValidationError, LocalizationProvider } from "@mui/x-date-pickers";

const floatRegex: RegExp = /\b([a-zA-Z]+|[.,])\1+\b/g;

const finalFloatRegex: RegExp = /^([.,]+)|([.,]+)$|(?<!\d)[.,]|[.,](?!\d)/g;

const SubmitButton = (): React.JSX.Element => (
    <Button type="submit" color="success" variant="outlined">
        Submit
    </Button>
);

const amountAdorment: StartAdornmentProps = {
    endAdornment: (
        <InputAdornment position="end">
            <EuroSymbolIcon />
        </InputAdornment>
    ),
};

const descriptionAdorment: StartAdornmentProps = {
    endAdornment: (
        <InputAdornment position="end">
            <DescriptionIcon />
        </InputAdornment>
    ),
};

export {
    Box,
    dayjs,
    React,
    Button,
    setDate,
    TabPanel,
    setAmount,
    DateField,
    TextField,
    setErrors,
    ErrorsList,
    DatePicker,
    floatRegex,
    createSlice,
    useSelector,
    useDispatch,
    SubmitButton,
    AdapterDayjs,
    setDateErrors,
    setDescription,
    EuroSymbolIcon,
    InputAdornment,
    amountAdorment,
    DescriptionIcon,
    finalFloatRegex,
    CalendarMonthIcon,
    descriptionAdorment,
    LocalizationProvider,
};

export type {
    RootState,
    AppDispatch,
    CustomError,
    OnChangeProps,
    PayloadAction,
    DateErrorProps,
    OnChangeDateProps,
    DateValidationError,
    StartAdornmentProps,
};
