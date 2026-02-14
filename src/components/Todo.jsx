function Todo() {
    // button call
    function callMe() {

        alert("button called");
 
    }

    return (
        <>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWYOrgR1Q1OT6spNnn3FaU2T8uFpXwF7APAg&s"
                alt="flower_photo"></img>

            <ul>
                <li>Rose</li>
                <li>Jasmine</li>
                <li>Zendu</li>
            </ul>

            <button onClick={callMe}>Click me</button>
        </>)
}
export default Todo