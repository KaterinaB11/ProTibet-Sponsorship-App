import React, { useEffect, useState } from "react";


export default function SearchBarUsers({ onSearch }) {
    const [searchTerm, setSearchTerm] = useState("");
    const [users, setUsers] = useState([]);

    useEffect(() => {
        
            const apiUrl = `/api/users/search${searchTerm ? `?search=${searchTerm}` : ""}`;

            fetch(apiUrl)
                .then((response) => {
                    if (!response.ok) {
                        throw new Error(`HTTP error! Status: ${response.status}`);
                    }

                    return response.json();
                })
                .then((data) => {
                    const usersData = data.users && data.users.filter(
                        (item) => item.type === "sponsor"
                    );

                    setUsers(usersData || []);
                    onSearch(usersData || []);
                })
                .catch((error) => {
                    console.error("Error fetching users:", error);
                    setUsers([]);
                });
     
    }, [searchTerm]);


    return (
        <div className="users-list__searchbar">
        
            <input
                type="text"
                placeholder="Search by sponsor name"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
            />
        </div>
    );
}
