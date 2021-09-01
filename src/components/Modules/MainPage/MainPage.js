import React from "react"
import { Header,Footer,BurgerMenu } from "../index"
import TopTitle from "../../Parts/TopTitle/TopTitle"
import Video15 from "../../Parts/Video/video15sec"
import "./MainPage.scss"
 



const MainPage = () => {
    return (
        <div className="main_wrp">
            <Header />
            <BurgerMenu />
            <TopTitle />
            <div className="bg-video__wrp">
                <Video15 />
                <div className="gradient"></div>
            </div>
            <Footer />
        </div>
    )
}

export default MainPage



