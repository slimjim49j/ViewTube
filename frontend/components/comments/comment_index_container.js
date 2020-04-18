import { fetchAllComments } from "../../actions/comments";
import { connect } from "react-redux";
import CommentIndex from "./comment_index";

const mapStateToProps = (state) => {
    return {
        comments: state.entities.comments,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        fetchAllComments: videoId => dispatch(fetchAllComments(videoId)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(CommentIndex);
