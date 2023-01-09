// import Home from "../Home/Home";
// import Login from "../Login/Login";
import Login from '../Screens/Login'
import Dashboard from '../Screens/Dashboard'
import Quizz from '../Screens/Quizz'
import QuizzResult from '../Screens/Results'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

function Router() {
    return (

            <BrowserRouter>
                <Routes>
                    <Route path={"/"} element={<Login />} />
                    <Route path={"/dashboard"} element={<Dashboard  />} />
                    <Route path={"/quizz"} element={<Quizz />} />
                    <Route path={"/Quizz.Result"} element={<QuizzResult />} />
                </Routes>
            </BrowserRouter>
    );
}

export default Router;

