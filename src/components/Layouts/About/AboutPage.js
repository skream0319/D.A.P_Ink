import React from "react"
import { AboutTop,AboutLead} from "../../Modules/index"
import { Header } from "../../Modules/index"
import "./AboutPage.scss"
 
const AboutPage = ({ children }) => {
    return (
        <div className="a-containar">
            <Header/>
            <AboutTop/>
            <AboutLead/>
            { children }
        </div>
    )
}

export default AboutPage