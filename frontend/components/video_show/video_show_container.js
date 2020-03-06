import { connect } from "react-redux";
import { findVideo } from "../../actions/videos";

import VideoShow from "./video_show";

const mapStateToProps = (state, { match }) => {
        // debugger
    return {
        videos: state.entities.videos,
        videoId: parseInt(match.params.id),
    }
}

const mapDispatchToProps = dispatch => {
    // debugger
    return {
        findVideo: id => dispatch(findVideo(id)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(VideoShow)
