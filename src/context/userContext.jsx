import { createContext, useState } from "react";

export const UserContext = createContext({
    user: false,
    userHandler: () => { }
})

export function UserContextProvider({ children }) {
    const [user, setUser] = useState(false)

    function userHandler() {
        setUser(prev => !prev)
    }

    const value = {
        user,
        userHandler
    }
    return <UserContext.Provider value={value}>{children}</UserContext.Provider>
}