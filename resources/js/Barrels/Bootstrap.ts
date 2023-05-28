import axios from "axios";
import App from "@/Pages/App";
import React, { StrictMode } from "react";
import { createRoot, Root } from "react-dom/client";
import { RootElementProps } from "@/Barrels/types/app";

export type { Root, RootElementProps };
export { App, React, StrictMode, createRoot, axios };
