import Router from "../Router/Router";
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

function Context() {
const [list, setlist] = useState(QuizzObj)
const [name, setname] = useState('ahsan')

    return (
        <>
            {console.log(name)}
            <Dataitems.Provider value={name} >
                <Router items={list} />
            </Dataitems.Provider>
        </>
    );
}
export  {Context}; 
export {Dataitems}


