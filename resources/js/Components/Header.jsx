import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../../../public/graphic/logo.png";
import "../../css/Header.scss";
import Logout from "./Logout";

export default function Header() {
    const location = useLocation();
    const [open, setOpen] = useState(false);

    const toggleMenu = () => {
        setOpen(!open);
    };

    return (
        <div className="header">
            <img src={logo} alt="MOST ProTibet" width="143" height="70" />

            <nav className={open ? "show" : ""}>
                <Link
                    to="/home"
                    className={location.pathname === "/home" ? "active" : ""}
                >
                    Home
                </Link>
                <Link
                    to="/list"
                    className={location.pathname === "/list" ? "active" : ""}
                >
                    People I support
                </Link>
                <Link
                    to="/news"
                    className={location.pathname === "/news" ? "active" : ""}
                >
                    News
                </Link>
                <Link
                    to="/faq"
                    className={location.pathname === "/faq" ? "active" : ""}
                >
                    FAQ
                </Link>
                <Link
                    to="/contact"
                    className={location.pathname === "/contact" ? "active" : ""}
                >
                    Contact
                </Link>
                <Logout />
            </nav>

            <div className={`burger-menu ${open ? "open" : ""}`} onClick={toggleMenu}>
                <div className="div"></div>
                <div className="div"></div>
                <div className="div"></div>
            </div>
        </div>
    );

}
