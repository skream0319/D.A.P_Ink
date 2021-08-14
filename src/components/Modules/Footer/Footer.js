import React from "react"
import "./Footer.scss"

const Footer = () => {
    return (
        <footer>
            <div className="inner">&copy; D.A.P_Ink design works { (new Date()).getFullYear() }</div>
        </footer>
    )
}

export default Footer