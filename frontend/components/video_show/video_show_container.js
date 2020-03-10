import { connect } from "react-redux";
import { fetchChannel } from "../../actions/channels";
import { fetchVideo } from "../../actions/videos";
import { selectChannel, selectVideo } from "../../reducers/selectors";
import VideoShow from "./video_show";


const mapStateToProps = (state, { match }) => {
    // debugger
    const videoId = parseInt(match.params.id);
    const video = selectVideo(state.entities.videos, videoId);

    const channelId = video.channelId;
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
