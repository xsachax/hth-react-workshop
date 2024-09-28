import { useState } from "react";
import "./Users.css";

export default function Users() {
  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState("");
  const [sortByAge, setSortByAge] = useState(false);

  const fetchUsers = async () => {
    const users = await fetch("https://dummyjson.com/users")
      .then((res) => res.json())
      .catch((err) => {
        console.error(err);
      });

    setUsers(users);
    console.log(users);
  };

  return (
    <div>
      <button onClick={fetchUsers}>Fetch Users</button>
      <button onClick={() => setUsers([])}>Clear Users</button>
      <input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Search for users"
      />
      <button onClick={() => setSortByAge(!sortByAge)}>
        Ascending age {sortByAge ? "ON" : "OFF"}
      </button>

      <ul className="users-list">
        {users?.users
          ?.filter((user) => {
            if (!search) {
              return user;
            } else if (
              user.firstName.toLowerCase().includes(search.toLowerCase())
            ) {
              return user;
            }
          })
          .sort((a, b) => {
            if (sortByAge) {
              return a.age - b.age;
            }
          })
          .map((user) => (
            <li key={user.id}>
              <img src={user.image} alt={user.firstName} width="15px" />
              {user.firstName} {user.lastName} - {user.email} - {user.phone} -{" "}
              {user.age}
              {" years old"}
            </li>
          ))}
      </ul>
    </div>
  );
}
