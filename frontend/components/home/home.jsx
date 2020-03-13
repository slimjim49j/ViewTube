import React, { Component } from "react";
import { Link } from "react-router-dom";

class Home extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.fetchAllVideos();
    }

    play(e) {
        e.currentTarget.play();
    }

    pause(e) {
        e.currentTarget.pause();
    }

    render() {
        return(
            <div>
                <main className="home-vid-container">
                    {this.props.videos ? (
                        Object.values(this.props.videos).map( video => <Link to={`video/${video.id}`} className="home-vid" key={video.id}><video src={video.video} onMouseOver={this.play} onMouseOut={this.pause} ></video> {video.title}</Link>) 
                    ) : <p>no videos</p>
                    }

                </main>
            </div>
        )
    }
}

export default Home;