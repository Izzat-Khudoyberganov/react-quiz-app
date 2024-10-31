import { Navigate, Route, Routes } from "react-router-dom";
import {
    CheckUser,
    ConfirmUser,
    Login,
    Quiz,
    Register,
    Summary,
} from "./pages";
import PageChanger from "./pages/pageChanger";
import { useContext } from "react";
import { UserContext } from "./context/userContext";

function App() {
    const { user } = useContext(UserContext);
    return (
        <Routes>
            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<Register />} />

            <Route path='/' element={<PageChanger />} />

            <Route path='/quiz' element={<Quiz />} />

            <Route path='/summary' element={<Summary />} />

            {!user && (
                <Route path='*' element={<Navigate to='/login' replace />} />
            )}

            <Route path='/' element={<Navigate to='/quiz' replace />} />
        </Routes>
    );
}

export default App;
