import React, { Component } from 'react';
import CommentIndexContainer from "./comment_index_container";
import CommentFormContainer from "./comment_form_container";

class Comments extends Component {
    constructor(props) {
        super(props);
    }

    
    render() {
        return (
            <div>
                {/* <CommentFormContainer videoId={this.props.videoId} parentCommentId={null} /> */}
                <CommentFormContainer
                    className={"comment-form"}
                    videoId={this.props.videoId}
                    parentCommentId={null}
                    commentType={"Comment"}
                />
                <CommentIndexContainer videoId={this.props.videoId} />
            </div>
        )
    }
}

export default Comments;