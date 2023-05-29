import { React } from "@/Barrels/App";

export type RootElementProps = HTMLElement | null;

export interface OptionsProps {
    value: string;
    label: string;
}

export type HandleAmountProps = React.ChangeEvent<HTMLInputElement>;
