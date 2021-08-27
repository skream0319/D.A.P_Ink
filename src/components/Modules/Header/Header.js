import React from "react"
import Logo from './parts/logo';
import Navbar from './parts/navbar';
import BurgerMenu from "../Burger/BurgerMenu";
import "./Header.scss"
import "./styles/logo.scss"
import "./styles/navbar.scss"


const Header = () => {
    return (
        <header>
            <Logo />
            <Navbar />
            <BurgerMenu />
        </header>
    )
}

export default Header
