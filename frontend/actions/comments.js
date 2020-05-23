import { getComments, postComment, patchComment, deleteComment } from "../utils/comments"

export const RECEIVE_ALL_COMMENTS = "RECEIVE_ALL_COMMENTS";
export const RECEIVE_COMMENT = "RECEIVE_COMMENT";
export const REMOVE_COMMENT = "REMOVE_COMMENT";

const receiveAllComments = comments => ({
    type: RECEIVE_ALL_COMMENTS,
    comments,
});

const receiveComment = comment => ({
    type: RECEIVE_COMMENT,
    comment,
});

const removeComment = commentId => ({
    type: REMOVE_COMMENT,
    commentId,
});

export const fetchAllComments =  videoId => dispatch => getComments(videoId)
    .then(comments => dispatch(receiveAllComments(comments)));

export const createComment = formComment => dispatch => postComment(formComment)
    .then(comment => dispatch(receiveComment(comment)));

export const updateComment = (commentId, comment) => dispatch => patchComment(commentId, comment)
    .then(comment => dispatch(receiveComment(comment)));

export const destroyComment = commentId => dispatch => deleteComment(commentId)
    .then(comment => dispatch(removeComment(comment.id)));