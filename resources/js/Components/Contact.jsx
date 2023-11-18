import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";

export default function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
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

        console.log('Form data submitted:', formData);
  };

    return (
        <>
            <Header />
            <div>
                <h1>Contact</h1>
            </div>
            <h3>Jana</h3>
            <div className="contact__person">
                <img src="" alt="" />
                <div className="contact__name-position">
                    <h5>Jana Ďásková Neboráková</h5>
                    <p>CEO</p>
                </div>
                <p>phone: +420 774 899 242</p>
                <p>email: jana@protibet.cz</p>
            </div>
            <h3>Gabriela</h3>
            <div className="contact__person">
                <img src="" alt="" />
                <div className="contact__name-position">
                    <h5>Gabriela Šmídová</h5>
                    <p>Projects, Sponsorship, Fundraising</p>
                </div>
                <p>phone: +420 774 899 242</p>
                <p>email: gabriela@protibet.cz</p>
            </div>
            <h3>Zuzka</h3>
            <div className="contact__person">
                <img src="" alt="" />
                <div className="contact__name-position">
                    <h5>Zuzana Kiková</h5>
                    <p>Sponsorship, Eshop</p>
                </div>
                <p>phone: +420 774 899 242</p>
                <p>email: zuzana@protibet.cz</p>
            </div>
            <div>
                <h2>Billing data and bank transfer data</h2>
                <h4>MOST ProTibet, o.p.s.</h4>
                <p>
                    Sídlo: Tilschové 5, 709 00 Ostrava, Česká republika ID:
                    26672740 Jsme plátci DPH
                </p>
            </div>
            <div>
                <h2>Account information</h2>
                <p>
                    Název účtu: MOST ProTibet, o.p.s. Adresa: Tilschové 5,
                    Ostrava, 709 00 Číslo účtu: 2201657032/2010 IBAN: CZ04 2010
                    0000 0022 0165 7032 BIC: FIOBCZPPXXX
                </p>
            </div>
            <div>
      <h1>Contact Us</h1>
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
          style={{ resize: 'vertical' }} // Allow vertical resizing
          required
        ></textarea>

        <button type="submit">Submit</button>
      </form>
    </div>
            <Footer />
        </>
    );
}
