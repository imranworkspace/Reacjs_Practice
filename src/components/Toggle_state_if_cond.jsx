import { useState } from "react"

function ToggleEx(){
    const [display,setdisplay] = useState(true);

    return(<>
        <h1>Toggle example in React</h1>
        <button onClick={()=>setdisplay(false)}>Toggle</button>
        {
            display? <h1>Imran Shaikh</h1>:<h1>no user found!!!</h1>
        }

        {/*  */}
        
    </>)
}
export default ToggleEx