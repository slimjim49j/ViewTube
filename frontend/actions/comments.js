import { postComment } from "../utils/comments"

export const RECEIVE_COMMENT = "RECEIVE_COMMENT";

const receiveComment = comment => ({
    type: RECEIVE_COMMENT,
    comment,
});

export const createComment = formComment => dispatch => postComment(formComment)
    .then(comment => dispatch(receiveComment(comment)));