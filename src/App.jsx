import { useContext } from "react";
import { Login, SwitchUserRoute } from "./pages";
import { UserContext } from "./context/usercontext";

function App() {
    const { user } = useContext(UserContext);
    return user ?  <SwitchUserRoute /> : <Login/>
}

export default App;
