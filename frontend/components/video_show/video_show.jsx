import React, { Component } from "react";

class VideoShow extends Component {
    constructor(props) {
        super(props);
    }

    updateVideo() {
        // if video isn't in global state, fetch video
        if (!this.props.videos[this.props.videoId]) {
            // debugger
            this.props.fetchVideo(this.props.videoId)
                .then(() => this.props.fetchChannel(this.props.channelId));
        }
    }

    componentDidMount() {
        // debugger
        this.updateVideo();
    }

    componentDidUpdate() {
        this.updateVideo();
    }

    render() {
        // debugger

        return (
            <div className="video-show">
                <div className="video-content-wrapper">
                    <video src={this.props.video.video} autoPlay={true} controls></video>
                    <h1>{this.props.video.title}</h1>
                    <p>{this.props.video.created_at.slice(0, 10)}</p>
                    <h3>{this.props.channel.title}</h3>
                    <p>{this.props.video.description}</p>
                </div>
            </div>
        )
    }
}

export default VideoShow;