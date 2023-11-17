import pic1 from '../../../public/media/TCV6.jpeg';
import React, { useContext } from "react";
import '../../css/MainContent.scss';
import Header from './Header';
import UserContext from './UserContext';
import { Link } from 'react-router-dom';
import Footer from './Footer';


export default function MainContent () {
    const { user } = useContext(UserContext);
    return (
     <>
     <Header/>
            <div className='main-content__content'>
                <div className='main-content__text'>
                    <h1>Welcome, {user ? user.username : 'Guest'}!</h1>
                    <p>Lorem ipsum  djnfhwfhpiwehbfpiwhebpiehwgfpihbdipcbsiocbfiobidobrfcibgfpig udhiefi feufheifhpeprf ferifhoiefhoierfg feriohfoierghfo eriofheoirfhoi ekfbierfgi jdhifhiorehf</p>
                    <p>Buddha</p>
                    <p><strong>Thank you for being here!</strong></p>
                </div>
        
                <div className='main-content__both-links'>
                    <div className='main-content-box beneficiaries'>
                        <h3><Link to="/list">My Beneficiaries</Link></h3>
                        <img src={pic1} alt="" />
                    </div>
                    <div className='main-content-box news'>
                        <h3><Link to="/news">News</Link></h3>
                        <img src={pic1} alt="" />
                    </div>
                </div>
            </div>
            <Footer/>
     </>
    )
}