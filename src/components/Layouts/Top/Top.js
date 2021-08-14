import React from "react"
import { Header,Footer,BurgerMenu } from "../../Modules/index"
import TopTitle from "../../Parts/TopTitle/TopTitle"
import "./Top.scss"

const Top = ({ children }) => {
    return (
        <div className="container">
            <Header />
            <BurgerMenu />
            <TopTitle />
            { children }
            <Footer />
        </div>
    )
}

export default Top