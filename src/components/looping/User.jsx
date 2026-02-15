function User() {
    const users_data = [
        {
            id: 1,
            name: "imran",
            email: "imran@gmail.com",
            mob: 771088
        },
        {
            id: 2,
            name: "zunnu",
            email: "zunnu@gmail.com",
            mob: 81018
        },
        {
            id: 3,
            name: "nussu",
            email: "nussu@gmail.com",
            mob: 989898
        },
        {
            id: 4,
            name: "vikcy",
            email: "vky@gmail.com",
            mob: 676879
        }
    ]

    return (<>
        <table border="2">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Mobile</th>
                </tr>
            </thead>
            <tbody>
                {users_data.map((user)=>{return(
                    <tr key={user.id}>
                        <td>{user.id}</td>
                        <td>{user.name}</td>
                        <td>{user.email}</td>
                        <td>{user.mob}</td>
                    </tr>
                )})}
            </tbody>
        </table>

    </>)
}

export default User;