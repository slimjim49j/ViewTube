import React, { Component } from "react";

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
                
            </div>
        )
    }
}

export default Home;