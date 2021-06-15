import React , {useContext} from "react"
import { HeaderTitle } from "../pages/index"
import "../scss/PageTitle.scss"


const PageTitle = () => {
    const headertitle = useContext(HeaderTitle)
    return (
        <div className="page_title_wrapper">
            <h1 className="page_title">{ headertitle }</h1>
        </div>
    ) 
}

export default PageTitle