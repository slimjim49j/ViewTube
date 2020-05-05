import React from 'react';
import { Route, Switch, Redirect, Link } from "react-router-dom";
import ChannelShowContainer from "./channel/channel_show_container";
import NavBarContainer from "./nav_bar/nav_bar_container";
import UploadModalContainer from "./upload_modal/upload_modal_container";
import VideoShowContainer from "./video_show/video_show_container";
import HomeContainer from "./home/home_container";
import SearchResultsContainer from "./search_results/search_results_container";
import ErrorPopupContainer from "./error_popup/error_popup_container";

export default props => (
    <div>
        <NavBarContainer />
        <UploadModalContainer />

        <Switch>
            <Route path="/channel/:id" component={ChannelShowContainer} />
            <Route path="/video/:id" component={VideoShowContainer} />
            <Route path="/search" component={SearchResultsContainer} />
            <Route path="/" component={HomeContainer} />
            <Redirect to="/" />
        </Switch>

        <ErrorPopupContainer />
    </div>
)
