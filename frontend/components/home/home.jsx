import React, { Component } from "react";
import { Link } from "react-router-dom";

class Home extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.fetchAllVideos();
    }

    render() {
        return(
            <div>
                <ul>
                    {this.props.videos ? (
                        Object.values(this.props.videos).map( video => <li key={video.id}><Link to={`video/${video.id}`}>{video.title}</Link></li>) 
                    ) : <p>no videos</p>
                    }

                </ul>
            </div>
        )
    }
}

export default Home;