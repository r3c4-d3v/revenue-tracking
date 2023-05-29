import React from "react";
import { Box } from "@mui/material";
import Tab from "@mui/material/Tab";
import Tabs from "@mui/material/Tabs";
import { Button } from "@mui/material";
import useMasks from "@/Hooks/useMasks";
import TabPanel from "@/Components/TabPanel";
import MenuItem from "@mui/material/MenuItem";
import TextField from "@mui/material/TextField";
import { OptionsProps } from "@/Barrels/types/app";
import AddBoxIcon from "@mui/icons-material/AddBox";
import GridOnIcon from "@mui/icons-material/GridOn";
import { FormEventProps } from "@/Barrels/types/app";
import { HandleAmountProps } from "@/Barrels/types/app";
import { InputBaseComponentProps } from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import BasicDatePicker from "@/Components/BasicDatePicker";
import ApplicationLogo from "@/Components/ApplicationLogo";
import useTabChangeManager from "@/Hooks/useTabChangeManager";

const currencies: OptionsProps[] = [
    {
        value: "USD",
        label: "$",
    },
    {
        value: "EUR",
        label: "€",
    },
    {
        value: "BTC",
        label: "฿",
    },
    {
        value: "JPY",
        label: "¥",
    },
    {
        value: "BRL",
        label: "R$",
    },
];

export {
    Box,
    Tab,
    Tabs,
    React,
    Button,
    MenuItem,
    TabPanel,
    TextField,
    useMasks,
    currencies,
    GridOnIcon,
    AddBoxIcon,
    FavoriteIcon,
    ApplicationLogo,
    BasicDatePicker,
    useTabChangeManager,
};

export type {
    OptionsProps,
    FormEventProps,
    HandleAmountProps,
    InputBaseComponentProps,
};
