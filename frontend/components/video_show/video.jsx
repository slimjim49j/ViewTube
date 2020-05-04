import React from 'react'

export default (props) => {
    return (
        <div className="video-wrapper">
            <video src={props.src} autoPlay={true} controls></video>
        </div>
    )
}
