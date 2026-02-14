const fruits=(name)=>{
        console.log('outside');
        alert(name);
    }

function JSX_operations(){
    const userName = "Imran Shaikh"
    let x=10;
    let y=20;

    // object
    const userObj = {"name":"imran","mob":7710881086}

    // array
    const studArray = ["zunaisha","nuseba","praveen","irfan"]

    // pass name to function
    function getName(name){
        return name;
    }
    
    // pass multiple values to function
    function getValues(a,b,op){
        if(op=='+'){
            return a+b;
        }
        if(op=='*'){
            return a*b;
        }
        if(op=='-'){
            return a-b;
        }
    }
    
    const fruits=(name)=>{
        console.log('inside');
        alert(name);
    }

    return(
        <>  
            <h2>hello {userName}</h2>
            <h2>x+y</h2>
            <h3>10*60</h3>
            <button onClick={()=>alert('hello ')}>JSX button call</button> <br />

            {/* pass variables to function */}
            <h2>{getName("imran")}</h2>
            <h2>{getValues(10,20,"*")}</h2>
            
            {/* access object value */}
            <h2>{userObj.mob}</h2> 

            {/* access array values */}
            <h1>{studArray[0]}</h1>

            {/* pass value to arrow function, normal function */}
            <button onClick={()=>fruits("Apple")}>Apple</button>
            <button onClick={()=>fruits("Mango")}>Mango</button>
        </>
    )
}
export default JSX_operations;