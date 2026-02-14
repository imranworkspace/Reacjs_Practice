import { useState } from "react";

function HandleMultipleState(){
    const [count,setcount]=useState(0);
    const [rcount,setrcount]=useState(10);

    return(<>
        <h1>{count}</h1>
        <button onClick={()=>{setcount(count+1)}}>Increment</button>
        <h1>{rcount}</h1>
        <button onClick={()=>{setrcount(rcount-2)}}>Decrement</button>
        </>)
}

export default HandleMultipleState;