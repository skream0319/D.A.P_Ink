import React from "react"
import { Link } from "gatsby"
import "../scss/Navbar.scss"
import Logo from "./staticImage/Logo"

const Navbar = ( props ) => {
    //ナビメニューに表示するリンク
    const NavMenuItem = ["Home","About", "Project", "Contact"];

    //ナビメニューのデフォルトスタイル
    const LinkStyle = {
        background: '#808080',
        color: 'white',
        fontWeight: "normal"        
    }

    //ナビメニューのアクティブスタイル
    const ActiveStyle = {
        background: 'white',
        color: '#808080',
        fontWeight: "normal"
    }

    //ナビメニューのリンク作成
    const NaviMenuLink = NavMenuItem.map((item) => {
        let page_link = "";
        if (item === "Home") {
            page_link = "/";
        }
        else page_link = "/" + item.toLowerCase() + "/";

        return (
            <li key={page_link}>
                <Link to={page_link} 
                    style={LinkStyle}
                    activeStyle={ActiveStyle}
                    className="link_tag"
                >
                    { item }
                </Link>
            </li>
        )
    });

    return(
        <div className="nav_all_container">
            <nav className="nav_bar_wrapper">
                <ul className="nav_bar_item">
                    { NaviMenuLink }
                </ul>
            </nav>
            <div className="nav_logo_wrapper">
                    <Link to="/"><Logo/></Link>
            </div>
        </div>
    )
}

export default Navbar
