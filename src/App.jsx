import { useContext } from "react";
import ConfirmUser from "./components/confirm";
import Header from "./components/header";
import Quiz from "./components/quiz";
import { ConfirmContext } from "./context/useConfirmContext";

function App() {
    const { confirm } = useContext(ConfirmContext);
    return (
        <>
            <Header />
            <main>{confirm ? <Quiz /> : <ConfirmUser />}</main>
        </>
    );
}

export default App;
