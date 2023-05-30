import dayjs from "dayjs";
import { Box } from "@mui/material";
import Tab from "@mui/material/Tab";
import Tabs from "@mui/material/Tabs";
import { Button } from "@mui/material";
import TabPanel from "@/Components/TabPanel";
import MenuItem from "@mui/material/MenuItem";
import TextField from "@mui/material/TextField";
import { OptionsProps } from "@/Barrels/types/app";
import AddBoxIcon from "@mui/icons-material/AddBox";
import DeleteIcon from "@mui/icons-material/Delete";
import GridOnIcon from "@mui/icons-material/GridOn";
import { FormEventProps } from "@/Barrels/types/app";
import { HandleAmountProps } from "@/Barrels/types/app";
import { InputBaseComponentProps } from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ApplicationLogo from "@/Components/ApplicationLogo";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { DateErrorProps } from "@/Barrels/types/components";
import useTabChangeManager from "@/Hooks/useTabChangeManager";
import { useForm as useReactHookForm } from "react-hook-form";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import {
    DateValidationError,
    LocalizationProvider,
    DateField,
} from "@mui/x-date-pickers";
import EuroSymbolIcon from "@mui/icons-material/EuroSymbol";
import InputAdornment from "@mui/material/InputAdornment";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import DescriptionIcon from "@mui/icons-material/Description";
import { DataGrid, GridColDef, GridValueGetterParams } from "@mui/x-data-grid";
import { Fab } from "@mui/material";

interface RowsProps {
    lastName: string;
    firstName: string;
    id: number;
    age: number;
}
const rows: RowsProps[] = [
    { id: 1, lastName: "Snow", firstName: "Jon", age: 35 },
    { id: 2, lastName: "Lannister", firstName: "Cersei", age: 42 },
    { id: 3, lastName: "Lannister", firstName: "Jaime", age: 45 },
    { id: 4, lastName: "Stark", firstName: "Arya", age: 16 },
    { id: 5, lastName: "Targaryen", firstName: "Daenerys", age: 20 },
    { id: 6, lastName: "Melisandre", firstName: "Sansa", age: 150 },
    { id: 7, lastName: "Clifford", firstName: "Ferrara", age: 44 },
    { id: 8, lastName: "Frances", firstName: "Rossini", age: 36 },
    { id: 9, lastName: "Roxie", firstName: "Harvey", age: 65 },
];

const columns: GridColDef[] = [
    { field: "id", headerName: "ID", width: 70 },
    { field: "firstName", headerName: "First name", width: 130 },
    { field: "lastName", headerName: "Last name", width: 130 },
    {
        field: "age",
        headerName: "Age",
        type: "number",
        width: 90,
    },
    {
        field: "fullName",
        headerName: "Full name",
        description: "This column has a value getter and is not sortable.",
        sortable: false,
        width: 160,
        valueGetter: (params: GridValueGetterParams) =>
            `${params.row.firstName || ""} ${params.row.lastName || ""}`,
    },
];

export {
    Box,
    Fab,
    DataGrid,
    EuroSymbolIcon,
    InputAdornment,
    CalendarMonthIcon,
    DescriptionIcon,
    DateField,
    DeleteIcon,
    columns,
    rows,
    Tab,
    Tabs,
    dayjs,
    Button,
    MenuItem,
    TabPanel,
    TextField,
    GridOnIcon,
    DatePicker,
    AddBoxIcon,
    FavoriteIcon,
    AdapterDayjs,
    ApplicationLogo,
    useReactHookForm,
    useTabChangeManager,
    LocalizationProvider,
};

export type {
    OptionsProps,
    DateErrorProps,
    FormEventProps,
    HandleAmountProps,
    DateValidationError,
    InputBaseComponentProps,
    GridColDef,
    GridValueGetterParams,
};
