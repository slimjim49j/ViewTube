const _nullVideo = {
    id: null,
    title: "",
    description: "",
    video: "",
    channelId: null,
    createdAt: "",
};

const _nullChannel = {
    id: null,
    title: "",
    description: "",
    userId: null,
}

export const selectVideo = (videos, videoId) => {
    // debugger
    return videos[videoId] || _nullVideo;

};

export const selectChannel = (channels, channelId) => {
    return channels[channelId] || _nullChannel;
};