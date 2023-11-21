import React, { useState, useEffect, useContext } from "react";
import UserContext from "../UserContext";

export default function AdminUsers() {
    const { user } = useContext(UserContext);
    const [users, setUsers] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");

    useEffect(() => {
        console.log("Ahoj Katuš");

        fetch("/api/users")
            .then((response) => {
                console.log("Response status:", response.status);

                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }

                return response.json();
            })
            .then((data) => {
                console.log("fetched data:", data);

                const usersData = data.users.filter(
                    (item) => item.type === "sponsor"
                );

                setUsers(usersData);
            })
            .catch((error) => {
                console.error("Error fetching users:", error);
            });
    }, []);

    // Filter users based on the search term
    const filteredUsers = users.filter((user) =>
        `${user.first_name} ${user.last_name}`
            .toLowerCase()
            .includes(searchTerm.toLowerCase())
    );

    return (
        <>
            <div>
                {/* Search bar */}
                <input
                    type="text"
                    placeholder="Search by name"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />

                {/* Display filtered users */}
                {filteredUsers.map((user) => (
                    <div key={user.id}>
                        {/* Your user rendering logic here */}
                    </div>
                ))}
            </div>
            <div className="users-list">
                <div className="users-list__heading">
                    <h1>The list of sponsors</h1>
                </div>
                <div className="users-list__table">
                    <table>
                        <thead>
                            <tr>
                                <th>First Name</th>
                                <th>Last Name</th>
                                <th>Receivers</th>
                            </tr>
                        </thead>
                        <tbody>
                            {users && users.length > 0 ? (
                                users.map((user) => (
                                    <tr key={user.id}>
                                        <td>{user.first_name}</td>
                                        <td>{user.last_name}</td>
                                        <td>
    {user.receivers && user.receivers.length > 0
        ? user.receivers.map((receiver) => (
            <div key={receiver.id}>
                <span style={{padding:"3em"}}>Name: {receiver.name}</span>
                <span style={{padding:"3em"}}>Institution: {receiver.institution}</span>
                <span style={{padding:"3em"}}>VS: {receiver.VS_receiver}</span>
            </div>
          ))
        : "N/A"}
</td>
                                    </tr>
                                ))
                            ) : (
                                <tr>
                                    <td colSpan="5">No users found.</td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    );
}
