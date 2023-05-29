import { React } from "@/Barrels/App";
import { SVGAttributes } from "react";

export type LogoProps = SVGAttributes<SVGElement>;

export type ApplicationLogoSvg = React.JSX.Element;

export type TabPanelElement = React.JSX.Element;

export interface TabPanelProps {
    value: number;
    index: number;
    children: React.ReactNode;
}

export interface BasicDatePickerProps {
    label: string;
    others?: {};
}
