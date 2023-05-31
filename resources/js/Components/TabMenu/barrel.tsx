import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/store";
import { setTab } from "@/slices/tabSlice";
import Tab from "@mui/material/Tab";
import Tabs from "@mui/material/Tabs";
import AddBoxIcon from "@mui/icons-material/AddBox";
import GridOnIcon from "@mui/icons-material/GridOn";

export { useDispatch, useSelector, Tabs, setTab, Tab, AddBoxIcon, GridOnIcon };

export type { RootState, AppDispatch };
