import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import "./TopTitle.scss"



const TopTitle = () => {
    return (
        <div className="wrp">
            <StaticImage 
                src="../../../images/name_logo.png"
                alt="D.A.P"
                layout="fullWidth"
                className="logo_wrp"
            />
            <div className="text_wrp">
                <p className="text_1">あなたの隣に並ぶ。</p>
                <p className="text_2">Line up next to You.</p>
                <p className="text_3"> D . A . P では対面ではなく、
                <br/>あなたの隣に並び同じビジョンを持った寄り添ったサービスを提供します。</p>
                <p className="text_4">代表取締役</p>
                <p className="text_5">TaichiTobika</p>
            </div>
        </div>
    ) 
}

export default TopTitle