import React from "react"
import { StaticImage } from "gatsby-plugin-image"

const Logo = () => {
    return (
        <StaticImage
            src="../../images/logo.png"
            alt="Company Logo"
            imgClassName="logo_img"
        />
    )  
}

export default Logo
