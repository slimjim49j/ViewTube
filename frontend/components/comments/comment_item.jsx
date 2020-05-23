import React, { Component } from 'react';
import CommentFormContainer from "./comment_form_container";

class CommentItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            edit: false,
        }

        this.handleEditClick = this.handleEditClick.bind(this);
        this.handleDeleteClick = this.handleDeleteClick.bind(this);
        this.handleInput = this.handleInput.bind(this);
        this.handleEditSubmit = this.handleEditSubmit.bind(this);
        this.handleCancelClick = this.handleCancelClick.bind(this);
    }

    handleReplyClick(e) {
        const replyForm = document.querySelector(e.target.dataset.target);
        replyForm.classList.remove("hidden");
    }

    handleEditClick(e) {
        this.setState({ edit: true });
    }

    handleDeleteClick(e) {
        this.props.destroyComment(this.props.comment.id);
    }

    handleInput(field) {
        return e => this.setState({ [field]: e.target.value });
    }

    handleEditSubmit(e) {
        e.preventDefault();
        this.props.updateComment(
            this.props.comment.id,
            { comment: { body: this.state.editText } }
        ).then(() => this.setState({ edit: false }));
    }

    handleCancelClick() {
        this.setState({ edit: false });
    }

    render() {
        const comment = this.props.comment;
        return (
            <div className="comment-item">
                { this.state.edit ? (
                    <form onSubmit={this.handleEditSubmit}>
                        <textarea
                            name=""
                            id=""
                            cols="30"
                            rows="10"
                            onChange={this.handleInput("editText")}
                            value={this.state.editText}
                            defaultValue={comment.body}
                        ></textarea>
                        <button onClick={this.handleCancelClick}>Cancel</button>
                        <input type="submit" value="Save"/>
                    </form>
                ) : (
                    <>
                    <div>
                        <span className="comment-channel-title">{comment.channelTitle}</span>
                        <span className="comment-created-at">{comment.createdAt.slice(0, 10)}</span>
                    </div>
                    <p className="comment-body">
                        {comment.body}
                    </p>
                    <div>
                        <button
                            className="show-reply-btn"
                            onClick={this.handleReplyClick}
                            data-target={".reply-form-" + comment.id}
                        >
                            Reply
                        </button>
                        { comment.userId === this.props.currentUserId ? (
                            <>
                            <button onClick={this.handleEditClick}>Edit</button>
                            <button onClick={this.handleDeleteClick}>Delete</button>
                            </>
                        ) : null }
                    </div>
                    <CommentFormContainer
                    className={"reply-form-" + comment.id}
                    videoId={this.props.videoId}
                    parentCommentId={this.props.parentCommentId}
                    commentType={this.props.commentType}
                    />
                    </>
                )}
            </div>
        )
    }
}

export default CommentItem;