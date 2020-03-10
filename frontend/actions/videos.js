import { getVideo, postVideo, getAllVideos } from "../utils/videos";

export const RECEIVE_VIDEO ="RECEIVE_VIDEO";
export const RECEIVE_ALL_VIDEOS ="RECEIVE_ALL_VIDEOS";

const receiveVideo = video => ({
    type: RECEIVE_VIDEO,
    video,
});

const receiveAllVideos = videos => ({
    type: RECEIVE_ALL_VIDEOS,
    videos,
});

export const fetchVideo = id => dispatch => getVideo(id)
    .then( video => dispatch(receiveVideo(video)))

export const fetchAllVideos = () => dispatch => getAllVideos()
    .then(videos => dispatch(receiveAllVideos(videos)))

export const createNewVideo = formVideo => dispatch => postVideo(formVideo)
    .then( video => dispatch(receiveVideo(video)))