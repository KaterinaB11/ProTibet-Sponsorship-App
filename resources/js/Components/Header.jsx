import React from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../../../public/graphic/logo.png";
import "../../css/Header.scss";
import Logout from "./Logout";

export default function Header() {
    return (
        <header>
            <img src={logo} alt="MOST ProTibet" width="143" height="70" />
            <nav>
                <Link to="/home" activeclassname="active">
                    Home
                </Link>
                <Link to="/list" activeclassname="active">
                    People I support
                </Link>
                <Link to="/news" activeclassname="active">
                    News
                </Link>
                <Link to="/faq" activeclassname="active">
                    FAQ
                </Link>
                <Link to="/contact" activeclassname="active">
                    Contact
                </Link>
                <Logout/>
            </nav>
        </header>
    );
}