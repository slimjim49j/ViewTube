import { getComments, postComment } from "../utils/comments"

export const RECEIVE_ALL_COMMENTS = "RECEIVE_ALL_COMMENTS";
export const RECEIVE_COMMENT = "RECEIVE_COMMENT";

const receiveAllComments = comments => ({
    type: RECEIVE_ALL_COMMENTS,
    comments,
});

const receiveComment = comment => ({
    type: RECEIVE_COMMENT,
    comment,
});

export const fetchAllComments =  videoId => dispatch => getComments(videoId)
    .then(comments => dispatch(receiveAllComments(comments)));

export const createComment = formComment => dispatch => postComment(formComment)
    .then(comment => dispatch(receiveComment(comment)));