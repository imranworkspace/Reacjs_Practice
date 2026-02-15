function Wrapper({children,color="pink"}) // defult color  is pink
{
    return(<>
        <div style={{color:color,padding:"5px",margin:"10px"}}> 
            <hr/>
            {children}
        </div>
    </>)
}

export default Wrapper;