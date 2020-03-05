import React from "react";
import { Route, Switch } from "react-router-dom";
import { 
    AuthRoute,
    ProtectedRoute 
} from "../utils/route_utils";

import SignupContainer from "./session/signup_container";
import NavBarContainer from "./nav_bar/nav_bar_container";
import LoginContainer from "./session/login_container";
import ChannelShowContainer from "./channel/channel_show_container";

const App = () => (
    <div className="app">
        <Switch>
            <AuthRoute path="/signup" component={SignupContainer} />
            <AuthRoute path="/login" component={LoginContainer} />
            <Route path="/" component={NavBarContainer} />
        </Switch>
        <Route path="/channel/:id" component={ChannelShowContainer} />
        
    </div>
)

export default App;