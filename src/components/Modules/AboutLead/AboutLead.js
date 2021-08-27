import React from "react"
import LeadText from "./parts/leadText"
import NameLogo from "../../Parts/name_logo"
import "./AboutLead.scss"

const AboutLead = () => {
    return (
        <div className="a-lead">
            <NameLogo/>
            <LeadText/>
        </div>
    )
}

export default AboutLead

