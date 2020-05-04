import React, { Component } from 'react';
import { Link } from "react-router-dom";

class SearchResults extends Component {
    constructor(props) {
        super(props);

        this.state = {};
        Object.values(this.props.videos).forEach(video => this.state[video.id] = false)

        this.play = this.play.bind(this);
        this.pause = this.pause.bind(this);
    }

    componentDidMount() {
        this.props.fetchAllVideos(this.props.search);
    }

    componentDidUpdate() {
        if (this.props.searchBarStatus) {
            this.props.receiveSearchBarStatus(false);
            this.props.fetchAllVideos(this.props.search);
        }
    }

    play(e) {
        const link = e.currentTarget;
        const video = link.querySelector("video");
        video.play()
            .then(() => {
                if (this.state[parseInt(link.dataset.id)]) {
                    video.pause();

                    this.setState({
                        [parseInt(link.dataset.id)]: false
                    });
                }
            });
    }

    pause(e) {
        const video = e.currentTarget.querySelector("video")
        if (video.currentTime > 0 && !video.paused && !video.ended
            && video.readyState > 2) {
            video.pause();
        } else {
            this.setState({
                [parseInt(e.currentTarget.dataset.id)]: true
            });
        }
    }
    
    render() {
        // debugger;
        return (
            <div className="home-vid-container">
                {/* <ul> */}
                    {
                        this.props.videos ? (
                            Object.values(this.props.videos).map(video => (
                                <Link
                                    to={`video/${video.id}`}
                                    className="home-vid"
                                    key={video.id}
                                    onMouseOver={this.play}
                                    onMouseOut={this.pause}
                                    data-id={video.id}
                                >
                                    <video 
                                        src={`${video.video}#t=5`}
                                        preload="metadata"
                                        muted={true}
                                    >
                                    </video>
                                    <div className="video-preview-info">
                                        <div>
                                            <img
                                                src="https://4.bp.blogspot.com/-H232JumEqSc/WFKY-6H-zdI/AAAAAAAAAEw/DcQaHyrxHi863t8YK4UWjYTBZ72lI0cNACLcB/s1600/profile%2Bpicture.png"
                                                className="channel-img"
                                            />
                                        </div>
                                        <div>
                                            <h4>{video.title}</h4>
                                            <p className="subtext">{video.channelTitle}</p>
                                            <p className="subtext">{video.createdAt.slice(0, 10)}</p>
                                        </div>


                                    </div>
                                </Link>
                            ))
                        ) : <p>no videos</p>
                    }
                {/* </ul> */}
            </div>
        )
    }
}

export default SearchResults;