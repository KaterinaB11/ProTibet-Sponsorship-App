import React, { useContext } from "react";
import UserContext from "./UserContext";
import { useNavigate } from "react-router";
import axios from "axios";

export default function Logout(){
    const {setUser} = useContext(UserContext);
    const navigate = useNavigate();

    const handleLogout = async () => {
        try{
            await axios.post("/logout");
            setUser(null);
            navigate("/");
        }catch(error){
            console.log("LOGOUT FAILED", error.message);
        }

    };

    return(
        <div className="logout-button">
            <button onClick={handleLogout}>Logout</button>
        </div>
    )
 
}