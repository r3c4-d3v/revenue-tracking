import { React } from "@/Barrels/App";
import { SVGAttributes } from "react";

export type LogoProps = SVGAttributes<SVGElement>;

export type ApplicationLogoSvg = React.JSX.Element;

export type TabPanelElement = React.JSX.Element;

export interface TabPanelProps {
    children?: React.ReactNode;
    index: number;
    value: number;
    others?: {};
}
