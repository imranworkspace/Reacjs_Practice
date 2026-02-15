import { useState } from "react";

function Gender(){
    const [gender,setgender] = useState("female");
    const [city,setcity] = useState('pune');

    return(<>
        <h2>Select Gender</h2>
        <input type="radio" onChange={(event)=>{setgender(event.target.value)}} name='name' value='male' id="male" checked={gender==('male')}/>
        <label htmlFor="male" name='female'>Male</label> <br />
        <input type="radio" onChange={(event)=>{setgender(event.target.value)}} name="female"  value='female' checked={gender==('female')} id="female"/>
        <label htmlFor="female">Female</label> <br />
        <h2>{gender}</h2>
        <br /><br />

        <h1>Select City</h1>
        <select onChange={(event)=>{setcity(event.target.value)}} defaultValue={"pune"}>
            <option value="pune">Pune</option>
            <option value="surat">Surat</option>
            <option value="latur">Latur</option>
        </select>
        <br />
        <h2>{city}</h2>
    </>)
}

export default Gender;