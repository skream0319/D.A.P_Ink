import React from "react"
import { Helmet } from "react-helmet"

const Meta = ( props ) => {
    const baseTitle = "D.A.P - ダップ | 店舗デザイン"
    const title = props.title ? `${props.title} | ${baseTitle}` : baseTitle

    return (
    <Helmet>
        <html lang="ja" />
        <title>{title}</title>
        <meta name="description" content={props.desc} />
    </Helmet>
    )
}

export default Meta