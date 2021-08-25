import React from "react"
import AboutTop from "../../Modules/AboutTop/AboutTop"
import { Header } from "../../Modules/index"
import "./AboutPage.scss"
 
const AboutPage = ({ children }) => {
    return (
        <div className="a-containar">
            <Header/>
            <AboutTop/>
            { children }
        </div>
    )
}

export default AboutPage