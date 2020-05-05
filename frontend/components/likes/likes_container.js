import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { createLike, destroyLike, fetchAllUserLikes } from "../../actions/likes";
import { addDislikeCount, addLikeCount } from "../../actions/videos";
import { selectVideo } from "../../reducers/selectors";
import Likes from "./likes";
import { receiveErrorPopupStatus } from "../../actions/ui";

const mapStateToProps = (state, { match }) => {
    // debugger
    // like count necessary? already passed into container
    // clean up other stuff
    const videoId = parseInt(match.params.id);
    const video = selectVideo(state.entities.videos, videoId);
    const userLikeId = video.userLikeId;
    return {
        userLikeId,
        videoId,
        likeCount: video.likeCount,
        likes: state.entities.likes,
        signedIn: !!state.session.id,
    }
}

const mapDispatchToProps = dispatch => ({
    fetchAllUserLikes: () => dispatch(fetchAllUserLikes()),
    createLike: like => dispatch(createLike(like)),
    destroyLike: likeId => dispatch(destroyLike(likeId)),
    addLikeCount: (videoId, amount) => dispatch(addLikeCount(videoId, amount)),
    addDislikeCount: (videoId, amount) => dispatch(addDislikeCount(videoId, amount)),
    receiveErrorPopupStatus: status => dispatch(receiveErrorPopupStatus(status)),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Likes));