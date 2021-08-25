import React from "react"
import Dap15Video from "../../assets/videos/D.A.P_video_15sec.mp4"
import DapPoster from "../../assets/images/poster.png"

const Video15 = () => {
    return (
        <React.Fragment>
                <video controls loop autoPlay muted playsInline
                    src={Dap15Video}
                    poster={DapPoster}
                    >
                </video>
        </React.Fragment>
    )
}

export default Video15