import React, { Component } from 'react'

export default class Likes extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        // this.props.fetchAllUserLikes();
    }
    
    handleLike(dislike) {
        return () => {
            if (!this.props.userLikeId) {
                this.props.createLike({
                    like: {
                        likableType: "Video",
                        likableId: this.props.videoId,
                        dislike,
                    }
                })
            } else if (this.props.likes[this.props.userLikeId].dislike === dislike) {
                this.props.destroyLike(this.props.userLikeId);
                
            } else {
                this.props.destroyLike(this.props.userLikeId);
                this.props.createLike({
                    like: {
                        likableType: "Video",
                        likableId: this.props.videoId,
                        dislike,
                    }
                })
            }
        }
    }
    
    render() {
        // debugger
        return (
            <div>
                {/* <div className="nav-btn">
                    <button onClick={this.handleLike(false)}>
                        <svg viewBox="0 0 24 24">
                            <g><path d="M1 21h4V9H1v12zm22-11c0-1.1-.9-2-2-2h-6.31l.95-4.57.03-.32c0-.41-.17-.79-.44-1.06L14.17 1 7.59 7.59C7.22 7.95 7 8.45 7 9v10c0 1.1.9 2 2 2h9c.83 0 1.54-.5 1.84-1.22l3.02-7.05c.09-.23.14-.47.14-.73v-1.91l-.01-.01L23 10z" ></path></g>
                        </svg>
                    </button>
                    <span>num</span>
                </div> */}
            </div>
        )
    }
}
