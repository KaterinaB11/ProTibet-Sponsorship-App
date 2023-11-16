import React from "react";
import MainPic from '../../../public/media/india-0558.jpg';
import Logo from '../../../public/graphic/logo.png';
import Login from "./Login";
import '../../css/BeforeLoginHomepage.scss';
import Header from "./Header";

export default function BeforeLoginHomepage(){
    return (
        <>
            <Header/>
            <div className="homepage">
                <div className="homepage__text-img">
                    <div className="homepage__text">
                        <h1>MOST ProTibet Sponsorship</h1>
                    </div>
                    <img className="homepage__img" src={MainPic} alt="MOST ProTibet" />
                </div>
                <div className="homepage__login"><Login/></div>
                
            </div>
        </>
    )

}