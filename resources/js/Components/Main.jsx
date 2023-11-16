import React from "react";
import { useState, useEffect } from "react";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import UserContext from "./UserContext";
import axios from "axios";

export default function Main() {
    const [user, setUser] = useState(null);

    const loadUser = async () => {
        const response = await axios.get("/api/user");
        if (response.status === 200) {
            const data = await response.data;
            setUser(data);
        } else if (response.status === 401) {
            setUser(false);
        }
    };
    useEffect(() => {
        if (user === null) {
            loadUser();
        }
    }, [user]);

    return (
        <UserContext.Provider value={{ user, setUser }}>
            <BrowserRouter>
                <App />
            </BrowserRouter>
        </UserContext.Provider>
    );
}
