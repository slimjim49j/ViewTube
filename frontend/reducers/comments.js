import { RECEIVE_COMMENT } from "../actions/comments";

const initialState = {

}

export default (state = initialState, action) => {
    Object.freeze(state);
    let nextState = Object.assign({}, state);
    
    switch (action.type) {

    case RECEIVE_COMMENT:
        nextState[action.comment.id] = action.comment;
        return nextState;
    default:
        return state
    }
}
