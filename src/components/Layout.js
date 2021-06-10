import React from "react"
import Navbar from "./Navbar"
import Footer from "./Footer"
import PageTitle from "./PageTitle"

const Layout = ({ children }) => {
    return (
        <React.Fragment>
            <Navbar />
            <PageTitle />
            { children }
            <Footer />
        </React.Fragment>
    )
}

export default Layout