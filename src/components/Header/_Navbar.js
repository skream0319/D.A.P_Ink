import React from "react"
import { Link } from "gatsby"
import "./_Navbar.scss"

const Navbar = ( props ) => {
    //ナビメニューに表示するリンク
    const NavMenuItem = ["Top","About", "Project", "Contact"];

    //ナビメニューのデフォルトスタイル
    const LinkStyle = {
        background: 'white',
        color: 'black',
        fontWeight: "normal",
        textDecoration: 'none'      
    }

    //ナビメニューのリンク作成
    const NaviMenuLink = NavMenuItem.map((item) => {
        let page_link = "";
        if (item === "Top") {
            page_link = "/";
        }
        else page_link = "/" + item.toLowerCase() + "/";

        return (
            <li key={page_link}>
                <Link to={page_link} 
                    style={LinkStyle}
                    className="link_tag"
                >
                    { item }
                </Link>
            </li>
        )
    });

    return(
            <nav className="nav_bar_wrapper">
                <ul className="nav_bar_item">
                    { NaviMenuLink }
                </ul>
            </nav>
    )
}

export default Navbar
