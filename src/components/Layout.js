import React from "react"
import { Header,PageTitle,Footer,BurgerMenu } from "./index"
import "../scss/Layout.scss"

const Layout = ({ children }) => {
    return (
        <div className="container">
            <Header />
            <BurgerMenu />
            <PageTitle />
            { children }
            <Footer />
        </div>
    )
}

export default Layout