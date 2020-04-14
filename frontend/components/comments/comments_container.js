import { createComment } from "../../actions/comments";
import { connect } from "react-redux";
import Comments from "./comments"

const mapStateToProps = (state) => {
    return {
        comments: state.entities.comments,
    }
};

const mapDispatchToProps = dispatch => {
    return {
        createComment: comment => dispatch(createComment(comment)),
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Comments);