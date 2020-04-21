import React, { Component } from 'react';
import { Link } from "react-router-dom";

class SearchResults extends Component {
    constructor(props) {
        super(props);
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
    
    render() {
        // debugger;
        return (
            <div className="home-vid-container">
                {/* <ul> */}
                    {
                        this.props.videos ? (
                            Object.values(this.props.videos).map(video => (
                                <Link to={`video/${video.id}`} className="home-vid" key={video.id}>
                                    <video 
                                        src={video.video}
                                        preload="metadata"
                                        muted={true}
                                        onMouseOver={e => e.currentTarget.play()}
                                        onMouseOut={e => e.currentTarget.pause()}
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