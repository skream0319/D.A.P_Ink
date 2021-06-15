import React from "react"
import { Navbar,PageTitle,Footer } from "./index"
import "../scss/Layout.scss"

const Layout = ({ children }) => {
    return (
        <div className="container">
            <Navbar />
            <PageTitle />
            { children }
            <Footer />
        </div>
    )
}

export default Layout