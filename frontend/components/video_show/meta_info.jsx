import React from 'react'

export default (props) => {
    // debugger
    return (
        <div>
            <div className="primary-info">

                <h1>{props.videoTitle}</h1>
                <div >
                    <p id="views-and-date" className="subtext"># views • {props.uploadDate}</p>
                    <div>
                        {/* <LikeContainer />
                        <LikeContainer /> */}
                    </div>
                </div>
            </div>
            <div className="secondary-info">
                <div className="video-owner-info">
                    <div className="left-info">
                        <img src="https://4.bp.blogspot.com/-H232JumEqSc/WFKY-6H-zdI/AAAAAAAAAEw/DcQaHyrxHi863t8YK4UWjYTBZ72lI0cNACLcB/s1600/profile%2Bpicture.png" alt=""/>
                        <div className="video-owner-text">

                            <h3>{props.channelTitle}</h3>
                            <p className="subtext"># subscribers</p>
                        </div>
                    </div>
                    <button id="subscribe">SUBSCRIBE</button>
                </div>
                <div className="description">
                    <p>{props.description}</p>
                    {/* <button>SHOW MORE</button> */}
                    <p>profile pic, subscribe button, num views, and num subscribers still under construction</p>
                </div>

            </div>



        </div>
    )
}
