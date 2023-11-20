import React from "react";
import MainPic from "../../../public/media/india-1395.jpg";
import Login from "./Login";
import "../../css/BeforeLoginHomepage.scss";
import Header from "./Header";
import Footer from "./Footer";
import { Outlet, Route, Routes } from "react-router";

export default function BeforeLoginHomepage() {
    return (
        <>
            <Header />
            <div className="homepage">
                <div className="homepage__text-img">
                    <div className="homepage__text-login">
                        <div className="homepage__text">
                            <h1>MOST ProTibet Sponsorship</h1>
                        </div>
                        <div className="homepage__login">
                            <Login/>
                        </div>
                    </div>
                    <img
                        className="homepage__img"
                        src={MainPic}
                        alt="MOST ProTibet"
                    />
                </div>
            </div>
            <Footer />
        </>
    );
}
