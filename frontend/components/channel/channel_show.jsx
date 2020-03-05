import React from "react";
import { Link } from "react-router-dom";
import {
    ProtectedRoute
} from "../../utils/route_utils";

import DashboardContainer from "./dashboard_container";

class ChannelShow extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        const channelId = this.props.match.params.id;
        return(
            <div>
                <ul>
                    <li><Link to={`/channel/${channelId}/dashboard`}>dashboard</Link></li>
                </ul>
                <ProtectedRoute path="/channel/:id/dashboard" component={DashboardContainer} />
            </div>
        )
    }
}

export default ChannelShow;