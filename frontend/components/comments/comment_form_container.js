import { connect } from "react-redux";
import { createComment } from "../../actions/comments";
import { receiveErrorPopupStatus } from "../../actions/ui";
import CommentForm from "./comment_form";

const mapStateToProps = (state) => {
    return {
        signedIn: !!state.session.id,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        createComment: comment => dispatch(createComment(comment)),
        receiveErrorPopupStatus: status => dispatch(receiveErrorPopupStatus(status)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(CommentForm);
