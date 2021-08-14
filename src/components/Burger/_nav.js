import React from 'react';
import { Link } from "gatsby";
import "./_nav.scss"


const Nav = ({ open, setOpen }) => {
    const LinkStyle = {
        background: 'white',
        color: 'black',
        fontWeight: "normal",
        textDecoration: 'none'     
    }
    return (
        <React.Fragment>
            <div
                className="drawerActive" 
                aria-expanded={open}>
                <ul className="m-list">
                    <li className="m-title">
                        <Link to="/" style={LinkStyle}>
                            Top
                        </Link>
                    </li>
                    <li className="m-title">
                        <Link to="/about" style={LinkStyle}>
                            About
                        </Link>
                    </li>
                    <li className="m-title">
                        <Link to="/project" style={LinkStyle}>
                            Project
                        </Link>
                    </li>
                    <li className="m-title">
                        <Link to="/contact" style={LinkStyle}>
                            Contact
                        </Link>
                    </li>
                </ul>
            </div>
        </React.Fragment>
    )
}

export default Nav