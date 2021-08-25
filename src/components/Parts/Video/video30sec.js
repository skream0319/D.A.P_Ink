import React from "react"
import Dap30Video from "../../assets/videos/D.A.P_video_30sec.mp4"
import DapPoster from "../../assets/images/poster.png"

const Video30 = () => {
    return (
        <React.Fragment>
                <video controls loop muted playsInline
                    src={Dap30Video}
                    poster={DapPoster}
                    >
                </video>
        </React.Fragment>
    )
}

export default Video30