import { combineReducers } from "redux";
import channelsReducer from "./channels";
import usersReducer from "./users";
import videosReducer from "./videos";
import likesReducer from "./likes";

const entitiesReducer = combineReducers({
    users: usersReducer,
    channels: channelsReducer,
    videos: videosReducer,
    likes: likesReducer,
});

export default entitiesReducer;