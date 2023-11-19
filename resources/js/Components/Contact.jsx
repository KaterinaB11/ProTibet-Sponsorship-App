import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import "../../css/Contact.scss";
import Jana from "../../../public/media/jana-daskova.jpg";
import Gabka from "../../../public/media/Gabka.jpeg";
import Zuzka from "../../../public/media/Zuzka.png";

export default function Contact() {
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

    return (
        <>
            <Header />
            <div className="contact__content">
                
                    <div className="contact__heading">
                        <h1>Contact</h1>
                    </div>
                
                <div className="contact__people">
                    <div className="contact__person-container">
                        <h3>Jana</h3>
                        <div className="contact__person-box">
                            <img src={Jana} alt="" />
                            <div className="contact__name-position">
                                <h5>Jana Ďásková</h5>
                                <p><strong>CEO</strong></p>
                            </div>
                            <p>phone: +420 774 899 242</p>
                            <p>email: jana@protibet.cz</p>
                        </div>
                    </div>
                    <div className="contact__person-container">
                        <h3>Gabriela</h3>
                        <div className="contact__person-box">
                            <img src={Gabka} alt="" />
                            <div className="contact__name-position">
                                <h5>Gabriela Šmídová</h5>
                                <p><strong>Projects, Sponsorship, Fundraising</strong></p>
                            </div>
                            <p>phone: +420 774 899 242</p>
                            <p>email: gabriela@protibet.cz</p>
                        </div>
                    </div>
                    <div className="contact__person-container">
                        <h3>Zuzka</h3>
                        <div className="contact__person-box">
                            <img src={Zuzka} alt="" />
                            <div className="contact__name-position">
                                <h5>Zuzana Kiková</h5>
                                <p><strong>Sponsorship, Eshop</strong></p>
                            </div>
                            <p>phone: +420 774 899 242</p>
                            <p>email: zuzana@protibet.cz</p>
                        </div>
                    </div>
                </div>
                <div className="contact__text">
                    <h2>Billing data and bank transfer data</h2>
                    <h4>MOST ProTibet, o.p.s.</h4>
                    <p>
                        Sídlo: Tilschové 5, 709 00 Ostrava, Česká republika ID:
                        26672740 Jsme plátci DPH
                    </p>

                    <hr />
               
                
                    <h2>Account information</h2>
                    <p>
                        Název účtu: MOST ProTibet, o.p.s. Adresa: Tilschové 5,
                        Ostrava, 709 00 Číslo účtu: 2201657032/2010 IBAN: CZ04
                        2010 0000 0022 0165 7032 BIC: FIOBCZPPXXX
                    </p>
                 </div>
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
            </div>
            <Footer />
        </>
    );
}
