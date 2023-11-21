import React, { useState } from "react";
import axios from "axios";

export default function ContactUsForm() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
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
            const response = await axios.post("/api/contact", formData);
            const data = response.data.message;
            setFormData({
                name: "",
                email: "",
                message: "",
            });
            setSuccessMessage("Message sent successfully!");

            setTimeout(() => {
                setSuccessMessage(null);
            }, 5000);

        } catch (error) {
            if (error.response && error.response.status === 422) {
                // handle validation errors here
                console.log("VALIDATION FAILED:", error.response.data.errors);
                // setErrors(error.response.data.errors);
            } else {
                console.log("UNKNOWN ERROR", error.message);
            }
        }
    };

    return (
        <div className="contact-form__content">
            <div className="contact-form__heading"></div>
            <div className="contact__form">
                <h1>Contact Us</h1>
                <p>
                    Have questions, suggestions, or just want to say hello? We'd love to hear from you! Please fill out
                    the form below, and we'll get back to you as soon as possible. Your feedback is important to us.
                </p>
                <form onSubmit={handleSubmit}>
                    <label htmlFor="name">Name:</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                    />

                    <label htmlFor="email">Email:</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                    />

                    <label htmlFor="message">Message:</label>
                    <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        rows={6}
                        cols={30}
                        style={{ resize: "vertical" }}
                        required
                    ></textarea>

                    <button type="submit">Submit</button>
                </form>
                {successMessage && <p className="success-message">{successMessage}</p>}
            </div>
        </div>
    );
}
