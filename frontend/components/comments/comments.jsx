import React, { Component } from 'react';
import { getComments, postComment } from "../../utils/comments"

class Comments extends Component {
    constructor(props) {
        super(props)
        this.state = {
            commentForm: "",
            comments: {},
        }

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount() {
        debugger
        getComments(this.props.videoId)
            .then(comments => this.setState({comments}));
    }

    handleSubmit(e) {
        e.preventDefault();

        // make sure to set parentCommentId to data atribut of currentTarget
        debugger
        postComment({
            comment: {
                body: this.state.commentForm,
                videoId: this.props.videoId,
                parentCommentId: null,
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
            {Object.values(this.state.comments).map(comment => (
                <div data-id={comment.id} key={comment.id}>{comment.body}</div>
            ))}
        </div>
        )
    }
}

export default Comments;