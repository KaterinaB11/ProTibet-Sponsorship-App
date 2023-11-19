import React from "react";
import logo from "../../../public/graphic/logo.png";
import "../../css/Header.scss";
import { Link } from "react-router-dom";

export default function Header() {
    return (
        <header>
            <img src={logo} alt="MOST ProTibet" width="143" height="70" />
            <nav>
                <Link to="/home">Home</Link>
                <Link to="/list">People I support</Link>
                <Link to="/news">News</Link>
                <Link to="/faq">FAQ</Link>
                <Link to="/contact">Contact</Link>
            </nav>
        </header>
    );
}
