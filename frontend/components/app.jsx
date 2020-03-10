import React from "react";
import { Route, Switch } from "react-router-dom";
import { 
    AuthRoute,
    ProtectedRoute 
} from "../utils/route_utils";

import SignupContainer from "./session/signup_container";
import Main from "./main";
import LoginContainer from "./session/login_container";

const App = () => (
    <div className="app">
        <Switch>
            <AuthRoute path="/signup" component={SignupContainer} />
            <AuthRoute path="/login" component={LoginContainer} />
            <Route path="/" component={Main} />
        </Switch>
        
    </div>
)

export default App;