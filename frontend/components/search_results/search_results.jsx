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
            <div>
                {/* <ul> */}
                    {
                        this.props.videos ? (
                            Object.values(this.props.videos).map(video => (
                                <Link to={`video/${video.id}`} className="home-vid" key={video.id}>
                                    <video 
                                        src={video.video}
                                        preload="metadata"
                                        onMouseOver={e => e.currentTarget.play()}
                                        onMouseOut={e => e.currentTarget.pause()}
                                    >
                                    </video>
                                    {video.title}
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