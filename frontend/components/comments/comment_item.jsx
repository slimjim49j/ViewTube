import React, { Component } from 'react';
import CommentFormContainer from "./comment_form_container";

class CommentItem extends Component {
    constructor(props) {
        super(props);
    }

    handleClick(e) {
        const replyForm = document.querySelector(e.target.dataset.target);
        replyForm.classList.remove("hidden");
    }

    render() {
        return (
            <div className="comment-item">
                <div>
                    <span className="comment-channel-title">{this.props.comment.channelTitle}</span>
                    <span className="comment-created-at">{this.props.comment.createdAt.slice(0, 10)}</span>
                </div>
                <p className="comment-body">
                    {this.props.comment.body}
                </p>   
                <button
                    className="show-reply-btn"
                    onClick={this.handleClick}
                    data-target={".reply-form-" + this.props.comment.id}
                >
                    Reply
                </button>
                <CommentFormContainer
                    className={ "reply-form-" + this.props.comment.id }
                    videoId={this.props.videoId}
                    parentCommentId={this.props.parentCommentId}
                    commentType={this.props.commentType}
                />
            </div>
        )
    }
}

export default CommentItem;