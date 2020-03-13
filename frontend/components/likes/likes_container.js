import { connect } from "react-redux"
import { withRouter } from "react-router-dom";
import { createLike, destroyLike } from "../../actions/likes";
import { selectVideo } from "../../reducers/selectors";
import { fetchAllUserLikes } from "../../actions/likes";

import Likes from "./likes"


const mapStateToProps = (state, { match }) => {
    // debugger
    const videoId = parseInt(match.params.id);
    const video = selectVideo(state.entities.videos, videoId);
    const userLikeId = video.userLikeId;
    return {
        userLikeId,
        videoId,
        likeCount: video.likeCount,
        likes: state.entities.likes,
    }
}
const mapDispatchToProps = dispatch => ({
    fetchAllUserLikes: () => dispatch(fetchAllUserLikes()),
    createLike: like => dispatch(createLike(like)),
    destroyLike: likeId => dispatch(destroyLike(likeId)),
});


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Likes));