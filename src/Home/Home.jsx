import { createContext, useState } from "react";
import { Dataitems } from "../Router/Router";
function Home({ajao}) {
    const abhoja = createContext(Dataitems)
    // const [current,setcurrent]= useState(0)
    // const items = createContext(dataitems)
    console.log(abhoja)
    return (
        <div>
            dgfd hello 
            {/* {console.log(ajao)} */}
        </div>
    );
}

export default Home;