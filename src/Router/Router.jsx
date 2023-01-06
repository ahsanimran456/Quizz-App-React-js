import Home from "../Home/Home";
import Login from "../Login/Login";
import { BrowserRouter,Route,Routes} from 'react-router-dom'
function Router() {
    return (  
        <BrowserRouter>
            <Routes>
                <Route path={"/"} element={<Login/>}  />
                <Route path={"/home"} element={<Home/>}  />
            </Routes>
        </BrowserRouter>
    );
}

export default Router;