import React from "react";
import dayjs from "dayjs";
import { SVGAttributes } from "react";

export type LogoProps = SVGAttributes<SVGElement>;

export type ApplicationLogoSvg = React.JSX.Element;

export type TabPanelElement = React.JSX.Element;

type OnChangeProps = React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>;

type OnChangeDateProps = string | dayjs.Dayjs | null;

export interface TabPanelProps {
    value: number;
    index: number;
    children: React.ReactNode;
}

interface StartAdornmentProps {
    endAdornment: React.JSX.Element;
}
