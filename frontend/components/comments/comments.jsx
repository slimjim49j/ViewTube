import React, { Component } from 'react';
import { getComments, postComment } from "../../utils/comments";

class Comments extends Component {
    constructor(props) {
        super(props)
        this.state = {
            commentForm: "",
            comments: {},
            replies: {},
        }

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleReplyInput = this.handleReplyInput.bind(this);
    }

    componentDidMount() {
        debugger
        getComments(this.props.videoId)
            .then(comments => this.setState({comments}));
    }

    handleSubmit(e) {
        e.preventDefault();

        // make sure to set parentCommentId to data atribut of currentTarget
        if (e.target.id.includes("reply-form")) {
            var parentCommentId = parseInt(e.target.dataset.id);
            var body = this.state.replies[parentCommentId];
        } else {
            var parentCommentId = null;
            var body = this.state.commentForm;
        }
        console.log(body);
        debugger
        postComment({
            comment: {
                body,
                videoId: this.props.videoId,
                parentCommentId,
            }
        }).then(comment => {
            debugger
            this.setState({
                commentForm: "",
                comments: { 
                    [comment.id]: comment,
                    ...this.state.comments,
                }
            })
            debugger
        });
    }

    handleInput(field) {
        return e => {
            this.setState({
                [field]: e.currentTarget.value
            })
        }
    }

    handleReplyInput(e) {
        debugger
        if (e.target.tagName.toLowerCase() === "textarea") {
            const replyTextarea = e.target;
            const commentId = replyTextarea.dataset.id;
            
            this.setState({
                replies: {
                    ...this.state.replies,
                    [commentId]: replyTextarea.value,
                }
            })
        }
    }

    handleClick(e) {
        const elClasses = Array.from(e.target.classList);
        if (elClasses.includes("reply-new")) {
            const replyBtn = e.target;
            const replyForm = document.getElementById(replyBtn.dataset.target);
            replyForm.classList.remove("hidden")
        } else if (elClasses.includes("reply-cancel")) {
            e.preventDefault();
            const replyForm = e.target.parentElement;
            replyForm.classList.add("hidden");
        }
    }

    render() {
        console.log(this.state)
        return (
        <div>
            <form onSubmit={this.handleSubmit} >
                <textarea cols="30" rows="1"
                    onChange={this.handleInput("commentForm")}
                    value={this.state.commentForm}
                ></textarea>
                <input type="submit" value="Comment"/>
            </form>
            {/* comment index */}
            <div
                onClick={this.handleClick}
                onChange={this.handleReplyInput}
                onSubmit={this.handleSubmit}
            >
                {Object.values(this.state.comments).map(comment => {
                    const targetId = comment.parentCommentId ? comment.parentCommentId : comment.id;
                    return (
                    <div data-id={targetId} key={targetId}>
                        {comment.body}

                        {/* 
                        reply form is hidden by default,
                        clicking the reply button removes the hidden class from
                        the form
                        hidden class style is in home.scss 

                        replies are identified by the comment they're replying to
                        */}
                        <button 
                            className="reply-new" 
                            data-target={"reply-form-" + targetId} 
                        >Reply</button>
                        <form
                            id={"reply-form-"+ targetId}
                            className="hidden"
                            data-id={targetId}
                            // onSubmit={this.handleSubmit}
                        >
                            <textarea cols="30" rows="1"
                                value={this.state.replies[targetId]}
                                data-id={targetId} //little repetetive
                            ></textarea>
                            <input className="reply-cancel" type="button" value="Cancel" />
                            <input type="submit" value="Reply"/>
                        </form>
                    </div>
                    )
                })}
            </div>
        </div>
        )
    }
}

export default Comments;