import React from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import logo from "../../../public/graphic/logo.png";
import "../../css/Header.scss";
import Logout from "./Logout";

export default function Header() {
    const location = useLocation();

    return (
        <header>
            <img src={logo} alt="MOST ProTibet" width="143" height="70" />
            <nav>
            <Link to="/home" className={location.pathname === "/home" ? "active" : ""}>
                    Home
                </Link>
                <Link to="/list" className={location.pathname === "/list" ? "active" : ""}>
                    People I support
                </Link>
                <Link to="/news" className={location.pathname === "/news" ? "active" : ""}>
                    News
                </Link>
                <Link to="/faq" className={location.pathname === "/faq" ? "active" : ""}>
                    FAQ
                </Link>
                <Link to="/contact" className={location.pathname === "/contact" ? "active" : ""}>
                    Contact
                </Link>
                <Logout />
            </nav>
        </header>
    );
}