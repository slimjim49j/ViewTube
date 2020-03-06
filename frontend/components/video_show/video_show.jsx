import React, { Component } from "react";

class VideoShow extends Component {
    constructor(props) {
        super(props);
        this.state = {
            videoTitle: "",
            videoDescription: "",
            videoUrl: "",
        }
    }

    componentDidMount() {
        // debugger
        this.props.findVideo(this.props.videoId)
            .then( (action) => this.setState({
                videoId: action.video.id, 
                videoTitle: action.video.title,
                videoDescription: action.video.description,
                videoUrl: action.video.video,
            }) );
    }

    componentDidUpdate() {
        // if video isn't in global state, fetch video
        if (!this.props.videos[this.props.videoId]) {
            this.props.findVideo(this.props.videoId)
                .then((action) => this.setState({
                    videoId: action.video.id,
                    videoTitle: action.video.title,
                    videoDescription: action.video.description,
                    videoUrl: action.video.video,
                }));

        } else if (this.state.videoId !== this.props.videoId) {
            this.setState({
                videoId: this.props.videoId,
                videoTitle: this.props.videos[this.props.videoId].title,
                videoDescription: this.props.videos[this.props.videoId].description,
                videoUrl: this.props.videos[this.props.videoId].video,
            });
        }
    }
    
    render() {
        // debugger
        
        return (
            <div className="video-show">
                <video src={this.state.videoUrl} autoPlay={true} controls></video>
                <h1>{ this.state.videoTitle}</h1>
                <p>{this.state.videoDescription}</p>
            </div>
        )
    }
}

export default VideoShow;