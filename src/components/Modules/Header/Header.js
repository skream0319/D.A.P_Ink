import React from "react"
import Logo from './parts/logo';
import Navbar from './parts/navbar';
import "./Header.scss"
import "./styles/logo.scss"
import "./styles/navbar.scss"


const Header = () => {
    return (
        <header>
            <Logo />
            <Navbar />
        </header>
    )
}

export default Header
