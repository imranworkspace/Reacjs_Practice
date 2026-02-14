import { useState } from "react";

function Conditions(){
    const [count,setcount]=useState(0);
    return(
    <>
    <h1>{count}</h1>
    <button onClick={()=>{setcount(count+1)}}>Increment</button>
    <button onClick={()=>{setcount(count-1)}}>Decrement</button>
    {
        count==0?<h1>conidition 0</h1>
        :count==1?<h1>conidition 1</h1>
        :count==2?<h1>conidition 2</h1>
        :count==3?<h1>conidition 3</h1>
        :<h1>false</h1>
    }
    
    </>)
}
export default Conditions;