import React, { Component } from 'react'

export default class Likes extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.fetchAllUserLikes();
    }

    handleLike(dislike) {
        const userLikeId = this.props.userLikeId,
            addLikeCount = this.props.addLikeCount,
            addDislikeCount = this.props.addDislikeCount;

        return () => {
            if (!this.props.signedIn) {
                this.props.receiveErrorPopupStatus(true);
                return;
            }
            
            // could've been done with radio buttons
            if (!userLikeId) {
                this.handleCreateLike(dislike)
                .then(() => {
                    // debugger
                    if (dislike) addDislikeCount(this.props.videoId, 1);
                    else addLikeCount(this.props.videoId, 1);
                });
            } else if (this.props.likes[userLikeId].dislike === dislike) {
                this.props.destroyLike(userLikeId)
                .then(() => {
                    if (dislike) addDislikeCount(this.props.videoId, -1);
                    else addLikeCount(this.props.videoId, -1);
                })
            } else {
                this.props.destroyLike(userLikeId)
                .then(() => {
                    this.handleCreateLike(dislike);
                })
                .then(() => {
                    if (dislike) {
                        addDislikeCount(this.props.videoId, 1);
                        addLikeCount(this.props.videoId, -1);
                    } else {
                        addDislikeCount(this.props.videoId, -1);
                        addLikeCount(this.props.videoId, 1);
                    }
                })
            }
        }
    }

    handleCreateLike(dislike) {
        return this.props.createLike({
            like: {
                likableType: "Video",
                likableId: this.props.videoId,
                dislike,
            }
        });
    }

    render() {
        // debugger
        const likeSvg = (
            <svg viewBox="0 0 24 24">
                <g><path d="M1 21h4V9H1v12zm22-11c0-1.1-.9-2-2-2h-6.31l.95-4.57.03-.32c0-.41-.17-.79-.44-1.06L14.17 1 7.59 7.59C7.22 7.95 7 8.45 7 9v10c0 1.1.9 2 2 2h9c.83 0 1.54-.5 1.84-1.22l3.02-7.05c.09-.23.14-.47.14-.73v-1.91l-.01-.01L23 10z" >
                </path></g>
            </svg>
        )
        const dislikeSvg = (
            <svg viewBox="0 0 24 24">
                <g><path d="M15 3H6c-.83 0-1.54.5-1.84 1.22l-3.02 7.05c-.09.23-.14.47-.14.73v1.91l.01.01L1 14c0 1.1.9 2 2 2h6.31l-.95 4.57-.03.32c0 .41.17.79.44 1.06L9.83 23l6.59-6.59c.36-.36.58-.86.58-1.41V5c0-1.1-.9-2-2-2zm4 0v12h4V3h-4z">
                </path></g>
            </svg>
        )

        const userLikeId = this.props.userLikeId,
            likes = this.props.likes;
        
        return (
            <div>
                <div className="video-btn-container">
                    <button 
                        id="like-btn"
                        className={userLikeId && likes[userLikeId] && likes[userLikeId].dislike === false ? "active-like-btn" : ""}
                        onClick={this.handleLike(false)}
                    >
                        {likeSvg}
                    </button>
                    <span>{this.props.likeCount}</span>
                    <button 
                        id="dislike-btn"
                        className={userLikeId && likes[userLikeId] && likes[userLikeId].dislike === true ? "active-like-btn" : ""}
                        onClick={this.handleLike(true)}
                    >
                        {dislikeSvg}
                    </button>
                    <span>{this.props.dislikeCount}</span>
                    
                </div>
            </div>
        )
    }
}
