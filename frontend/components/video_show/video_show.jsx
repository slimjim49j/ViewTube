import React, { Component } from "react";
import Video from "./video";
import MetaInfo from "./meta_info";
import Comments from "../comments/comments";
import RecommendationsContainer from "../recommendations/recommendations_container";

class VideoShow extends Component {
    constructor(props) {
        super(props);
    }

    updateState(slice, id, fetchItem) {
        // if specific item isn't in global state, fetch item
        if (!slice[id]) {
            // debugger
            fetchItem(id);
        }
        // abstraction for:
        // if(!this.props.channels[this.props.channelId]) {
        //     // debugger
        //     this.props.fetchChannel(this.props.channelId);
        // }
    }

    componentDidMount() {
        // debugger
        this.updateState(this.props.videos, this.props.videoId, this.props.fetchVideo);
        this.updateState(this.props.channels, this.props.channelId, this.props.fetchChannel);
    }

    componentDidUpdate() {
        this.updateState(this.props.videos, this.props.videoId, this.props.fetchVideo);
        this.updateState(this.props.channels, this.props.channelId, this.props.fetchChannel);
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