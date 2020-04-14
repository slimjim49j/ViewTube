import React, { Component } from 'react';

class Comments extends Component {
    constructor(props) {
        super(props)
        this.state = {
            comment: ""
        }

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        debugger;
        this.props.createComment({
            comment: {
                body: this.state.comment,
                videoId: this.props.videoId,
                parentCommentId: null,
            }
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
        return (
        <div>
            <form onSubmit={this.handleSubmit} >
                <textarea name="" id="" cols="30" rows="10" onChange={this.handleInput("comment")}></textarea>
                <input type="submit" value="Comment"/>
            </form>
        </div>
        )
    }
}

export default Comments;