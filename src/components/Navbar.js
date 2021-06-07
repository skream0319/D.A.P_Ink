import React from "react"
import { Link } from "gatsby"

const Navbar = () => {
    return (
        <div className="navbar">
            <ul>
                <li className="nav_item">
                    <Link to="/about">About</Link>
                </li>
                <li className="nav_item">
                    <Link to="/project">Project</Link>
                </li>
                <li className="nav_item">
                    <Link to="/contact">Contact</Link>
                </li>
            </ul>
        </div>
    )
}

export default Navbar