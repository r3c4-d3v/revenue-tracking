import axios from "axios";
import { App } from "@/Pages/App";
import { createRoot, Root } from "react-dom/client";
import { RootElementProps } from "@/Barrels/types/app";
import { Provider } from "react-redux";
import store from "@/store";

export type { Root, RootElementProps };
export { App, createRoot, axios, Provider, store };
