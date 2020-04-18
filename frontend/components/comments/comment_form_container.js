import { createComment } from "../../actions/comments";
import { connect } from "react-redux";
import CommentForm from "./comment_form";

const mapStateToProps = (state) => {
    return {
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        createComment: comment => dispatch(createComment(comment)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(CommentForm);
