import { useState } from "react";

function Skills(){
    const [skills,setskills]=useState([]);

    const handleSkills=(event)=>{
        console.log(event.target.value,event.target.checked);
        // 
        if (event.target.checked){
            setskills([...skills,event.target.value]);
        }else{
            setskills([...skills.filter((item)=>item!=event.target.value)])
        }
    }
    
    return(<>
        <form action="" style={{padding:"10px"}}>
            <input type="checkbox" onChange={handleSkills} id='php' value='php'/>
            <label htmlFor="php">PHP</label> <br /> <br />

            <input type="checkbox" onChange={handleSkills} id='c' value='c'/>
            <label htmlFor="c">C</label><br /> <br />

            <input type="checkbox" onChange={handleSkills} id='python' value='python'/>
            <label htmlFor="python">Python</label><br /> <br />

            <input type="checkbox" onChange={handleSkills} id="java" value='java'/>
            <label htmlFor="java">Java</label><br /> <br />

            {/* <button onClick={()=>{}}></button> */}
            <h1>{skills.toString()}</h1>
        </form>
    </>)
}

export default Skills;