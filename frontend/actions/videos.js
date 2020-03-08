import { getVideo, postVideo } from "../utils/videos";

export const RECEIVE_VIDEO ="RECEIVE_VIDEO";

const receiveVideo = video => ({
    type: RECEIVE_VIDEO,
    video,
});

export const fetchVideo = id => dispatch => getVideo(id)
    .then( video => dispatch(receiveVideo(video)))

export const createNewVideo = formVideo => dispatch => postVideo(formVideo)
    .then( video => dispatch(receiveVideo(video)))