import React from "react"
import { Header,Footer,BurgerMenu } from "../../Modules/index"
import TopTitle from "../../Parts/TopTitle/TopTitle"
import Video15 from "../../Parts/Video/video15sec"
import "./Top.scss"

const Top = ({ children }) => {
    return (
        <div className="c-top">
            <Header />
            <BurgerMenu />
            <TopTitle />
            <div className="bg-video__wrp">
                <Video15 />
                <div className="gradient"></div>
            </div>
            { children }
            <Footer />
        </div>
    )
}

export default Top