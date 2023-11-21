import React, { useState } from "react";
import axios from "axios";

export default function CreateNewUser() {
    const [formData, setFormData] = useState({
        first_name: "",
        last_name: "",
        email: "",
        username: "",
        type: "",
    });

    const [successMessage, setSuccessMessage] = useState(null);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post("/api/users/create", formData);
            const data = response.data.message;
            setFormData({
                first_name: "",
                last_name: "",
                email: "",
                username: "",
                type: "",
            });
            setSuccessMessage("New user was made!");
            setTimeout(() => {
                setSuccessMessage(null);
            }, 5000);
        } catch (error) {
            console.error("Error creating user:", error); 
            console.log(error); // Add this line
            if (error.response && error.response.status === 422) {
                // handle validation errors here
                console.log("VALIDATION FAILED:", error.response.data.errors);
                // setErrors(error.response.data.errors);
            } else {
                console.log("UNKNOWN ERROR", error.message);
            }
        }
    };

    return(
        <div>
      <h2>Create a New User</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="first_name">First Name:</label>
          <input
            type="text"
            name="first_name"
            id="first_name"
            value={formData.first_name}
            onChange={handleInputChange}
            required
          />
        </div>

        <div>
          <label htmlFor="last_name">Last Name:</label>
          <input
            type="text"
            name="last_name"
            id="last_name"
            value={formData.last_name}
            onChange={handleInputChange}
            required
          />
        </div>

        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            name="email"
            id="email"
            value={formData.email}
            onChange={handleInputChange}
            required
          />
        </div>

        <div>
          <label htmlFor="username">Username:</label>
          <input
            type="username"
            name="username"
            id="username"
            value={formData.username}
            onChange={handleInputChange}
            required
          />
        </div>

        <div>
          <label htmlFor="type">Type:</label>
          <input
            type="type"
            name="type"
            id="type"
            value={formData.type}
            onChange={handleInputChange}
            required
          />
        </div>


        <button type="submit">Create User</button>
      </form>
    </div>
    )
}
