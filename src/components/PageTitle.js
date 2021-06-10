import React , {useContext} from "react"
import {HeaderTitle} from "../pages/index"

const PageTitle = () => {
    const headertitle = useContext(HeaderTitle)
    return (
        <h1>{headertitle}</h1>
    ) 
}

export default PageTitle