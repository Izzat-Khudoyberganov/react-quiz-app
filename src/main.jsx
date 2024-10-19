import React from "react";
import ReactDOM from "react-dom/client";
import { ConfirmContextProvider } from "./context/confirmContext.jsx";
import { UserContextProvider } from "./context/userContext.jsx";
import App from "./App.jsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <UserContextProvider>
            <ConfirmContextProvider>
                <App />
            </ConfirmContextProvider>
        </UserContextProvider>
    </React.StrictMode>
);
