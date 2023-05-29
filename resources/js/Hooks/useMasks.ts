import React from "react";

const useMasks = () => {
    const money = (value: any) => {
        let newValue = value.replace(/\D/g, "");
        newValue = newValue.replace(/^(\d+)(\d{2})$/, "$1.$2");
        newValue = newValue.replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.");

        if (newValue === "NaN") {
            return "";
        }

        return newValue;
    };

    return { money };
};

export default useMasks;
