import React from 'react';
import { Route, Switch, Redirect, Link } from "react-router-dom";
import ChannelShowContainer from "./channel/channel_show_container";
import NavBarContainer from "./nav_bar/nav_bar_container";
import UploadModalContainer from "./upload_modal/upload_modal_container";
import VideoShowContainer from "./video_show/video_show_container";


export default props => (
    <div>
        <NavBarContainer />
        <UploadModalContainer />

        <Switch>
            <Route path="/channel/:id" component={ChannelShowContainer} />
            <Route path="/video/:id" component={VideoShowContainer} />
            <Route path="/" component={() => <h1><Link to="/video/5">Video Link</Link></h1>} />
            <Redirect to="/" />
        </Switch>
    </div>
)
