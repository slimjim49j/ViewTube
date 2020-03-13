import { RECEIVE_ALL_USER_LIKES, RECEIVE_LIKE, REMOVE_LIKE } from "../actions/likes";

const initialState = {

}

export default (state = initialState, action) => {
    Object.freeze(state);
    let nextState = Object.assign({}, state);
    
    switch (action.type) {
        case RECEIVE_ALL_USER_LIKES:
            return action.likes;
        case RECEIVE_LIKE:
            nextState[action.like.id] = action.like;
            return nextState;
        case REMOVE_LIKE:
            delete nextState[action.like.id];
            return nextState;
        default:
            return state;
    }
}
