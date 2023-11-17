import React from "react";
import MainPic from '../../../public/media/india-0497.jpg';
import Logo from '../../../public/graphic/logo.png';
import Login from "./Login";
import '../../css/BeforeLoginHomepage.scss';
import Header from "./Header";
import Footer from "./Footer";
import { Outlet, Route, Routes } from "react-router";

export default function BeforeLoginHomepage(){

    return (
<>
            <Header/>
            <div className="homepage">
                <img className="homepage__logo" src={Logo} alt="MOST ProTibet" />
                <div className="homepage__text-img">
                    <div className="homepage__text">
                        <h1>MOST ProTibet Sponsorship</h1>
                    </div>
                    <img className="homepage__img" src={MainPic} alt="MOST ProTibet" />
                </div>
                <div className="homepage__login">
                    <Routes>
                        <Route path="/login" element={<Login />} />
                    </Routes>
                </div>
            </div>
            <Footer/>
        </>
    )

}
