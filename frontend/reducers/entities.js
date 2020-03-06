import { combineReducers } from "redux";
import usersReducer from "./users";
import videosReducer from "./videos";

const entitiesReducer = combineReducers({
    users: usersReducer,
    videos: videosReducer,
});

export default entitiesReducer;