import { useState } from "react";

function Events(){
    const [val,setval] = useState();
    return(<>
        <input type="text" value={val} onChange={(event)=>{setval(event.target.value)}}
        placeholder="enter your name?"/>

        <h1>hello {val}</h1>
        <button onClick={()=>{setval("")}}>Reset</button>

    </>)
}

export default Events;