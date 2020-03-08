import { getChannel, postChannel } from "../utils/channels";

export const RECEIVE_CHANNEL = "RECEIVE_CHANNEL";


const receiveChannel = channel => ({
    type: RECEIVE_CHANNEL,
    channel,
});

export const fetchChannel = id => dispatch => getChannel(id)
    .then(channel => dispatch(receiveChannel(channel)))

export const createChannel = newChannel => dispatch => postChannel(newChannel)
    .then(channel => dispatch(receiveChannel(channel)));