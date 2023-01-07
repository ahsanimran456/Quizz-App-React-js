import Home from "../Home/Home";
import Login from "../Login/Login";
import { BrowserRouter, Route, Routes } from 'react-router-dom'
// import { Dataitems } from "../Context/Context";
import { createContext, useState } from "react";
const Dataitems = createContext()
const QuizzObj = [
    {
        Question: "What is computer",
       a: 'device',
        b: "input device ",
        c: 'Machine',
        Correct: 'c'
    },
    {
        Question: "What is Keyboard",
        a: 'output device',
        b: "input device ",
        c: 'Machine',
        Correct: 'b'
    }
]
function Router({ items }) {

    const [list, setlist] = useState(QuizzObj)
    return (
        <Dataitems.Provider value={list} >
            <BrowserRouter>
                <Routes>
                    <Route path={"/"} element={<Login />} />
                    <Route path={"/home"} element={<Home ajao={items} />} />
                </Routes>
            </BrowserRouter>
        </Dataitems.Provider>
    );
}

export{Router,Dataitems};

