import { combineReducers } from "redux";
import channelsReducer from "./channels";
import usersReducer from "./users";
import videosReducer from "./videos";

const entitiesReducer = combineReducers({
    users: usersReducer,
    channels: channelsReducer,
    videos: videosReducer,
});

export default entitiesReducer;