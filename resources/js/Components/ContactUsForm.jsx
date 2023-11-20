import React, { useState } from "react";

export default function ContactUsForm(){
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        console.log("Form data submitted:", formData);
    };
return(
    <div className="contact-form__content">
                    <div className="contact-form__heading">
                        
                    </div>
                    <div className="contact__form">
                        <h1>Contact Us</h1>
                        <p>Have questions, suggestions, or just want to say hello? We'd love to hear from you! Please fill out the form below, and we'll get back to you as soon as possible. Your feedback is important to us.</p>
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
                                rows={6} // Set the number of visible rows
                                cols={30} // Set the number of visible columns
                                style={{ resize: "vertical" }} // Allow vertical resizing
                                required
                            ></textarea>
    
                            <button type="submit">Submit</button>
                        </form>
                    </div>
                </div>
)
}