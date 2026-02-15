function Props({user}){
    return(<>
        <hr />
        <h1>Hi,{user.name} {user.email} {user.mob}</h1>
    </>)
}

export default Props;