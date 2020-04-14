import { combineReducers } from "redux";
import channelsReducer from "./channels";
import commentsReducer from "./comments";
import likesReducer from "./likes";
import usersReducer from "./users";
import videosReducer from "./videos";

const entitiesReducer = combineReducers({
    users: usersReducer,
    channels: channelsReducer,
    videos: videosReducer,
    likes: likesReducer,
    comments: commentsReducer,
});

export default entitiesReducer;