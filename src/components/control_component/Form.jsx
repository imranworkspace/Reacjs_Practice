import { useState } from "react";


function Form(){
    // control component
    const [name,setname]=useState("");
    const [password,setpassword]=useState("");
    const [email,setemail]=useState("");

    return(<>
    {/* control component */}
    <div>
        <form action="" method="get" style={{color:"green",padding:"10px"}}>
        <input type="text" onChange={(event)=>{setname(event.target.value)}} value={name} placeholder="enter name"/> <br /> <br />
        <input type="password" onChange={(event)=>{setpassword(event.target.value)}} value={password} placeholder="enter password"/> <br /> <br />
        <input type="email" onChange={(event)=>{setemail(event.target.value)}} value={email} placeholder="enter email"/> <br /> <br />
        <button onClick={()=>{}}>Register</button>
        <button onClick={()=>{setname(""),setemail(""),setpassword("")}}>Reset</button>
        <h2>{name}</h2>
        <h2>{password}</h2>
        <h2>{email}</h2>
        </form>
    </div>
    </>)
}

export default Form;