import { getVideo, postVideo, getAllVideos } from "../utils/videos";

export const RECEIVE_VIDEO = "RECEIVE_VIDEO";
export const RECEIVE_ALL_VIDEOS ="RECEIVE_ALL_VIDEOS";

export const ADD_LIKE_COUNT = "ADD_LIKE_COUNT";
export const ADD_DISLIKE_COUNT = "ADD_DISLIKE_COUNT";

const receiveVideo = video => ({
    type: RECEIVE_VIDEO,
    video,
});

const receiveAllVideos = videos => ({
    type: RECEIVE_ALL_VIDEOS,
    videos,
});

export const addLikeCount = (videoId, amount) => ({
    type: ADD_LIKE_COUNT,
    videoId,
    amount
});

export const addDislikeCount = (videoId, amount) => ({
    type: ADD_DISLIKE_COUNT,
    videoId,
    amount,
});

export const fetchVideo = id => dispatch => getVideo(id)
    .then( video => dispatch(receiveVideo(video)))

export const fetchAllVideos = search => dispatch => getAllVideos(search)
    .then(videos => dispatch(receiveAllVideos(videos)))

export const createNewVideo = formVideo => dispatch => postVideo(formVideo)
    .then( video => dispatch(receiveVideo(video)))