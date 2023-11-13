import pic1 from '../../../public/media/TCV6.jpeg';
import React from "react";


export default function MainContent () {
    return (
     <>
            <div>
                <h1>Welcome, username!</h1>
                <p>Lorem ipsum  djnfhwfhpiwehbfpiwhebpiehwgfpihbdipcbsiocbfiobidobrfcibgfpig udhiefi feufheifhpeprf ferifhoiefhoierfg feriohfoierghfo eriofheoirfhoi ekfbierfgi jdhifhiorehf</p>
                <p><italic>Buddha</italic></p>
                <p><strong>Thank you for being here!</strong></p>
            </div>
    
            <div>
                <h3>My beneficiaries</h3>
                <img src={pic1} alt="" />
            </div>
            <div>
                <h3>News</h3>
                <img src={pic1} alt="" />
            </div>
     </>
    )
}