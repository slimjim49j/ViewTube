import React, { Component } from "react";
import Video from "./video";
import MetaInfo from "./meta_info";
import CommentsContainer from "../comments/comments_container";
import RecommendationsContainer from "../recommendations/recommendations_container";

class VideoShow extends Component {
    constructor(props) {
        super(props);
        this.checkVideoInfo = this.checkVideoInfo.bind(this);
    }

    checkVideoInfo() {
        if (!this.props.videos[this.props.videoId]) {
            this.props.fetchVideo(this.props.videoId)
        } else if (!this.props.channels[this.props.channelId]) {
            this.props.fetchChannel(this.props.channelId);
        }
    }

    render() {
        this.checkVideoInfo();

        return (
            <div className="video-show">
                <div className="video-content-wrapper">
                    <Video src={this.props.video.video} />
                    <MetaInfo
                        channelTitle={this.props.channel.title}
                        video={this.props.video}
                    />

                    <CommentsContainer videoId={this.props.videoId} />

                    <RecommendationsContainer/>
                </div>
            </div>
        )
    }
}

export default VideoShow;