import Home from "../Home/Home";
import Login from "../Login/Login";
import QuizzResult from "../QuizzResult/Result";
import { BrowserRouter, Route, Routes } from 'react-router-dom'

function Router() {
    return (

            <BrowserRouter>
                <Routes>
                    <Route path={"/"} element={<Login />} />
                    <Route path={"/home"} element={<Home  />} />
                    <Route path={"/quizz.Result"} element={<QuizzResult />} />

                </Routes>
            </BrowserRouter>
    );
}

export default Router;

