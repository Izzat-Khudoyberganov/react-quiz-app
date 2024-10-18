import { createContext, useState } from "react";

export const ConfirmContext = createContext({
    confirm: false,
    handleConfirm: () => {},
});

export function ConfirmContextProvider({ children }) {
    const [confirm, setConfirm] = useState(false);

    function handleConfirm() {
        setConfirm((prev) => !prev);
        console.log("confirming");
    }

    const value = {
        confirm,
        handleConfirm,
    };

    return (
        <ConfirmContext.Provider value={value}>
            {children}
        </ConfirmContext.Provider>
    );
}
