import React from 'react'

export default (props) => {
    return (
        <div>
            <video src={props.src} autoPlay={true} controls></video>
        </div>
    )
}
