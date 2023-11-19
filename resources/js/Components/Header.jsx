import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../../../public/graphic/logo.png";
import "../../css/Header.scss";

export default function Header() {
    return (
        <header>
            <img src={logo} alt="MOST ProTibet" width="143" height="70" />
            <nav>
                <NavLink exact to="/home" activeClassName="active">
                    Home
                </NavLink>
                <NavLink to="/list" activeClassName="active">
                    People I support
                </NavLink>
                <NavLink to="/news" activeClassName="active">
                    News
                </NavLink>
                <NavLink to="/faq" activeClassName="active">
                    FAQ
                </NavLink>
                <NavLink to="/contact" activeClassName="active">
                    Contact
                </NavLink>
            </nav>
        </header>
    );
}