import React, { Component } from 'react';
import CommentFormContainer from "./comment_form_container";
import CommentItem from "./comment_item";

class CommentIndex extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.fetchAllComments(this.props.videoId)
    }

    render() {

        let formattedComments = {};
        Object.values(this.props.comments).forEach(comment => {
            if (comment.parentCommentId) {
                formattedComments[comment.parentCommentId].replies.push(comment);
            } else {
                formattedComments[comment.id] = comment;
                formattedComments[comment.id].replies = [];
            }
        });
        
        return (
            <div>
                {
                    Object.values(formattedComments).map(comment => (
                        <div key={comment.id}>
                            <CommentItem
                                videoId={this.props.videoId}
                                parentCommentId={comment.id}
                                comment={comment}
                                commentType="Reply"
                            />
                            
                            <div>
                                {comment.replies.map(reply => (
                                    <div key={reply.id}>
                                        <CommentItem
                                            videoId={this.props.videoId}
                                            parentCommentId={comment.id}
                                            comment={reply}
                                            commentType="Reply"
                                        />
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))
                }
            </div>
        )
    }
}

export default CommentIndex;