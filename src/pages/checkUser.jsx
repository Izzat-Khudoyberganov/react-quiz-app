import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import { UserContext } from "../context/userContext";

const CheckUser = () => {
    const { user } = useContext(UserContext);
    console.log(user);

    if (user) {
        return <Navigate to='/' replace />;
    }
    console.log("ProtectedRoute: Redirecting to /login");
    return <Navigate to='/login' replace />;
};

export default CheckUser;
