import { useContext } from "react";
import { Login, SwitchUserRoute } from "./pages";
import { UserContext } from "./context/userContext";

function App() {
    const { user } = useContext(UserContext);
    return user ?  <SwitchUserRoute /> : <Login/>
}

export default App;
