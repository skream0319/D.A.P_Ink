import React , {useContext} from "react"
import {Title} from "../pages/index"

const PageTitle = () => {
    const title = useContext(Title)
    return (
        <h1>{title}</h1>
    ) 
}

export default PageTitle