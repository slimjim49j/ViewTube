import React from 'react'
import LikesContainer from "../likes/likes_container";

export default (props) => {
    // debugger
    const videoTitle = props.video.title,
        uploadDate = props.video.createdAt.slice(0, 10),
        description = props.video.description,
        userLikeId = props.video.userLikeId,
        likeCount = props.video.likeCount,
        dislikeCount = props.video.dislikeCount;

    return (
        <div>
            <div className="primary-info">

                <h1>{videoTitle}</h1>
                <div className="video-info">
                    <p id="views-and-date" className="subtext">{/*# views • */ uploadDate}</p>
                    <div>
                        <LikesContainer userLikeId={userLikeId} likeCount={likeCount} dislikeCount={dislikeCount} />
                        {/* <LikeContainer /> */}
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
                    {/* <button id="subscribe">SUBSCRIBE</button> */}
                </div>
                <div className="description">
                    <p>{description}</p>
                    {/* <button>SHOW MORE</button> */}
                    {/* <p>profile pic, subscribe button, num views, and num subscribers still under construction</p> */}
                </div>

            </div>



        </div>
    )
}
