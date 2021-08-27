import React from "react"
import { StaticImage } from "gatsby-plugin-image"

const NameLogo = () => {
    return (
            <StaticImage
                    src="../assets/images/name_logo.png"
                    alt="Name_Logo"
                    layout="fullWidth"
                    className="name-logo img"
                />
    )
}

export default NameLogo