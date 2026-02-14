import { useState } from "react";

function StateEx(){
    const [fruit,setfruit] = useState("Apple");

    const changeFruit=()=>{
        setfruit("Banana");
    }
    return(<>
        <h1>{fruit}</h1>
        <button onClick={changeFruit}>Change Fruit</button>
    </>)
}

export default StateEx;