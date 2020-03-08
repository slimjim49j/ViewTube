const _nullVideo = {
    id: null,
    title: "",
    description: "",
    video: "",
    channel_id: null,
    created_at: "",
};

const _nullChannel = {
    id: null,
    title: "",
    description: "",
    user_id: null,
}

export const selectVideo = (videos, videoId) => {
    // debugger
    return videos[videoId] || _nullVideo;

};

export const selectChannel = (channels, channelId) => {
    return channels[channelId] || _nullChannel;
};