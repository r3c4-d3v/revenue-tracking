import React from "react";
import { SVGAttributes } from "react";
import {dayjs} from "@/Components/RegistrationPanel/barrel";

export type LogoProps = SVGAttributes<SVGElement>;

export type ApplicationLogoSvg = React.JSX.Element;

export type TabPanelElement = React.JSX.Element;

export interface TabPanelProps {
    value: number;
    index: number;
    children: React.ReactNode;
}

type OnChangeProps = React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>;

type OnChangeDateProps = string | dayjs.Dayjs | null;

interface StartAdornmentProps {
    startAdornment: React.JSX.Element;
}
