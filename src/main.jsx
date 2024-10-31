import React from "react";
import ReactDOM from "react-dom/client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ConfirmContextProvider } from "./context/confirmContext.jsx";
import { UserContextProvider } from "./context/userContext.jsx";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";

const query = new QueryClient({
    defaultOptions: {
        queries: {
            staleTime: Infinity,
        },
    },
});
ReactDOM.createRoot(document.getElementById("root")).render(
    <QueryClientProvider client={query}>
        <BrowserRouter>
            <UserContextProvider>
                <ConfirmContextProvider>
                    <App />
                </ConfirmContextProvider>
            </UserContextProvider>
        </BrowserRouter>
    </QueryClientProvider>
);
