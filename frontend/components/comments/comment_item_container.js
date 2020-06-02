import { connect } from 'react-redux';
import CommentItem from './comment_item';
import { updateComment, destroyComment } from '../../actions/comments';
import { receiveErrorPopupStatus } from "../../actions/ui";

const mapStateToProps = (state) => ({
    currentUserId: state.session.id,
    signedIn: !!state.session.id,
});

const mapDispatchToProps = dispatch => {
    return {
        updateComment: (commentId, comment) => dispatch(updateComment(commentId, comment)),
        destroyComment: commentId => dispatch(destroyComment(commentId)),
        receiveErrorPopupStatus: status => dispatch(receiveErrorPopupStatus(status)),
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(CommentItem);
