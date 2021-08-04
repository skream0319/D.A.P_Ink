import React from "react"
import { Header,PageTitle,Footer } from "./index"
import "../scss/Layout.scss"

const Layout = ({ children }) => {
    return (
        <div className="container">
            <Header />
            <PageTitle />
            { children }
            <Footer />
        </div>
    )
}

export default Layout