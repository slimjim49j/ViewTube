import { RECEIVE_VIDEO, RECEIVE_ALL_VIDEOS } from "../actions/videos";
import { RECEIVE_ALL_USER_LIKES, RECEIVE_LIKE, REMOVE_LIKE } from "../actions/likes";

export default (state = {}, action) => {
    Object.freeze(state);
    let nextState = Object.assign({}, state);
    switch (action.type) {
        case RECEIVE_ALL_VIDEOS:
            return action.videos;

        case RECEIVE_VIDEO:
            nextState[action.video.id] = action.video;
            return nextState;

        // case RECEIVE_ALL_USER_LIKES:
        //     debugger
        //     Object.values(action.likes).forEach(like => {
        //         if (like.likableType === "Video" && nextState[like.likableId]) {
        //             nextState[like.likableId].userLikeId = like.id;
        //         }
        //     });
        //     return nextState;
            
        case RECEIVE_LIKE:
            if (action.like.likableType === "Video") {
                const videoId = action.like.likableId;
                nextState[videoId].userLikeId = action.like.id;
            }
            return nextState;

        case REMOVE_LIKE:
            if (action.like.likableType === "Video") {
                const videoId = action.like.likableId;
                nextState[videoId].userLikeId = null;
            }
            return nextState;

        default:
            return state;
    }
}