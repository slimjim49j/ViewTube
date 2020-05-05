import React, { Component } from 'react'

// expects videoId, parentCommentId, className, commentType to be passed as props
class CommentForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            body: "",
        }

        this.handleClick = this.handleClick.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleInput(field) {
        return e => {
            this.setState({
                [field]: e.target.value
            })
        }
    }

    handleClick(e) {
        // refactor to seperate cancel click and textarea clikc functions
        e.stopPropagation();
        if (this.props.commentType === "Reply" && e.target.tagName.toLowerCase() !== "textarea") {
            const replyForm = document.querySelector("." + this.props.className);
            if (replyForm) replyForm.classList.add("hidden");
        } else {
            if (e.target.tagName.toLowerCase() === "textarea") {
                // if user not signed in redirect to signin
                if (!this.props.signedIn) {
                    this.props.receiveErrorPopupStatus(true);
                    return;
                }
                
                const commentBtnWrapper = document.querySelector(`.${this.props.className} .comment-btn-wrapper`);
                commentBtnWrapper.classList.remove("hidden");
            } else {
                // cancel button clicked
                const commentBtnWrapper = document.querySelector(`.${this.props.className} .comment-btn-wrapper`);
                commentBtnWrapper.classList.add("hidden");
            }
        }

    }
    
    handleSubmit(e) {
        e.preventDefault();
        this.props.createComment({
            comment: {
                body: this.state.body,
                videoId: this.props.videoId,
                parentCommentId: this.props.parentCommentId,
            }
        }).then(() => this.setState({body: ""}))
    }
    
    render() {
        return (
            <div className={(this.props.commentType === "Comment" ? "" : "hidden ") + this.props.className}>
                <form onSubmit={this.handleSubmit}>
                    <textarea
                        className="comment-textarea"
                        cols="30" rows="1" 
                        onChange={this.handleInput("body")}
                        onClick={this.handleClick}
                        value={this.state.body}
                        placeholder={`Add a public ${this.props.commentType.toLowerCase()}...`}
                    >
                    </textarea>
                    <div className={"comment-btn-wrapper" + (this.props.commentType === "Comment" ? " hidden" : "") }>
                        <p onClick={this.handleClick}>Cancel</p>
                        <input type="submit" value={this.props.commentType}/>
                    </div>
                </form>
            </div>
        )
    }
}

export default CommentForm;