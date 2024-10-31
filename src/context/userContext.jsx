import { createContext, useState } from "react";

export const UserContext = createContext({
    user: false,
    userHandler: () => {},
});

export function UserContextProvider({ children }) {
    const [user, setUser] = useState(!!sessionStorage.getItem("user") || false);

    function userHandler(isLoggedIn) {
        if (isLoggedIn) {
            sessionStorage.setItem("user", "true");
            setUser(true);
        } else {
            sessionStorage.removeItem("user");
            setUser(false);
        }
    }

    const value = {
        user,
        userHandler,
    };
    return (
        <UserContext.Provider value={value}>{children}</UserContext.Provider>
    );
}
