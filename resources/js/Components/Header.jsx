import React from 'react';
import logo from '../../../public/graphic/logo.png';

export default function Header(){
    return (
        
            <header>
                <img src={logo} alt="MOST ProTibet" width="143" height="70"/>
                <nav>
                    <a href="/">Home</a>
                    <a href="/">My beneficiaries</a>
                    <a href="/">News</a>
                    <a href="/">FAQ</a>
                    <a href="/">Contact</a>
                </nav>
            </header>
    )
}