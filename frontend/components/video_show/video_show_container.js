import { connect } from "react-redux";
import { fetchVideo } from "../../actions/videos";
import { selectVideo, selectChannel } from "../../reducers/selectors";
import { fetchChannel } from "../../actions/channels";

import VideoShow from "./video_show";

const mapStateToProps = (state, { match }) => {
    // debugger
    const videoId = parseInt(match.params.id);
    const video = selectVideo(state.entities.videos, videoId);

    const channelId = video.channel_id;
    const channel = selectChannel(state.entities.channels, channelId);
    return {
        videos: state.entities.videos,
        video,
        videoId,
        channels: state.entities.channels,
        channel,
        channelId,
    }
}

const mapDispatchToProps = dispatch => {
    // debugger
    return {
        fetchVideo: id => dispatch(fetchVideo(id)),
        fetchChannel: id => dispatch(fetchChannel(id)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(VideoShow)
