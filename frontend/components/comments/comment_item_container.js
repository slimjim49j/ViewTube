import { connect } from 'react-redux';
import CommentItem from './comment_item';
import { updateComment, destroyComment } from '../../actions/comments';

const mapStateToProps = (state) => ({
    currentUserId: state.session.id,
});

const mapDispatchToProps = dispatch => {
    return {
        updateComment: (commentId, comment) => dispatch(updateComment(commentId, comment)),
        destroyComment: commentId => dispatch(destroyComment(commentId)),
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(CommentItem);
