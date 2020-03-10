import React, { Component } from "react";
import Video from "./video";
import MetaInfo from "./meta_info";
import Comments from "../comments/comments";
import RecommendationsContainer from "../recommendations/recommendations_container";

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
                    <Video src={this.props.video.video} />
                    
                    <MetaInfo 
                        videoTitle={this.props.video.title}
                        uploadDate={this.props.video.createdAt.slice(0, 10)}
                        channelTitle={this.props.channel.title}
                        description={this.props.video.description}
                    />
                    
                    <Comments />

                    <RecommendationsContainer />
                </div>
            </div>
        )
    }
}

export default VideoShow;