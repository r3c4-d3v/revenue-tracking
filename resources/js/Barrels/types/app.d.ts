import React from "react";
export type RootElementProps = HTMLElement | null;

export interface OptionsProps {
    value: string;
    label: string;
}

export type HandleAmountProps = React.ChangeEvent<HTMLInputElement>;

export type FormEventProps = React.FormEvent<HTMLFormElement>;
