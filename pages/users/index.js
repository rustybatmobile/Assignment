

const UserList = ({users}) =>  {
    console.log(users);

    return (
        <div>
            {users.map(user => {
                return (
                    <div>
                        <span>{user.name}</span>
                    </div>
                )
            })}
        </div>
    )
}

export default UserList;


export async function getStaticProps() {

    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await res.json();
    console.log(data);

    return {
        props: {
            users: data
        }
    }

}