import React, { useState, useEffect } from "react";
import SearchBarUsers from "./SearchBarUsers";
import CreateNewUser from "./CreateNewUser"
import "../../../../css/AdminUsers.scss";

export default function AdminUsers() {
    const [users, setUsers] = useState([]);
    const [filteredUsers, setFilteredUsers] = useState([]);
    const [isFiltering, setIsFiltering] = useState(false);

    useEffect(() => {
        fetch("/api/users")
            .then((response) => {
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
                return response.json();
            })
            .then((data) => {
                const usersData = data.users.filter(
                    (item) => item.type === "sponsor"
                );
                setUsers(usersData);
            })
            .catch((error) => {
                console.error("Error fetching users:", error);
            });
    }, []);

    const handleSearch = (filteredUsers) => {
        setFilteredUsers(filteredUsers);
        setIsFiltering(filteredUsers.length > 0);
    };

    return (
        <>
            <div className="users-list">
                <CreateNewUser/>
                <div className="users-list__heading">
                    <h1>The list of sponsors</h1>
                </div>
                {/* <SearchBarUsers onSearch={handleSearch} /> */}

                

                <div className={`users-list__filtered ${isFiltering ? "" : "hidden"}`}>
                    {/* Display filtered users above the full list */}
                    {filteredUsers.map((filteredUser) => (
                        <div key={filteredUser.id}>
                            <span>{filteredUser.first_name} {filteredUser.last_name}</span>
                            {/* Additional information about the filtered user */}
                        </div>
                    ))}
                </div>

                <div className={`users-list__table ${isFiltering ? "hidden" : ""}`}>
                    <table>
                        {/* Render the full list below the filtered users */}
                        <thead>
                            <tr>
                                <th>First Name</th>
                                <th>Last Name</th>
                                <th>Receivers</th>
                            </tr>
                        </thead>
                        <tbody>
                            {users.map((user) => (
                                <tr key={user.id}>
                                    <td>{user.first_name}</td>
                                    <td>{user.last_name}</td>
                                    <td>
                                        {user.receivers &&
                                        user.receivers.length > 0
                                            ? user.receivers.map(
                                                  (receiver) => (
                                                      <div
                                                          key={receiver.id}
                                                      >
                                                          <span
                                                              style={{
                                                                  padding:
                                                                      "3em",
                                                              }}
                                                          >
                                                              Name:{" "}
                                                              {
                                                                  receiver.name
                                                              }
                                                          </span>
                                                          <span
                                                              style={{
                                                                  padding:
                                                                      "3em",
                                                              }}
                                                          >
                                                              Institution:{" "}
                                                              {
                                                                  receiver.institution
                                                              }
                                                          </span>
                                                          <span
                                                              style={{
                                                                  padding:
                                                                      "3em",
                                                              }}
                                                          >
                                                              VS:{" "}
                                                              {
                                                                  receiver.VS_receiver
                                                              }
                                                          </span>
                                                      </div>
                                                  )
                                              )
                                            : "N/A"}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    );
}
