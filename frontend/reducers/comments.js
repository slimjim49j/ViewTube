import { RECEIVE_ALL_COMMENTS, RECEIVE_COMMENT, REMOVE_COMMENT } from "../actions/comments";

const initialState = {

}

export default (state = initialState, action) => {
    Object.freeze(state);
    let nextState = Object.assign({}, state);
    
    switch (action.type) {

    case RECEIVE_ALL_COMMENTS:
        return action.comments;

    case RECEIVE_COMMENT:
        nextState[action.comment.id] = action.comment;
        return nextState;

    case REMOVE_COMMENT:
        
        // get rid of replies to the soon to be deleted comment
        if (!nextState[action.commentId].parentCommentId) {
            for (let key in nextState) {
                if (nextState[key].parentCommentId === action.commentId) {
                    delete nextState[key];
                }
            }
        }
        
        delete nextState[action.commentId];
        return nextState;

    default:
        return state;
    }
}
