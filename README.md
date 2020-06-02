# ViewTube Full Stack Clone

[Link to Live Youtube Clone](https://viewtube-clone.herokuapp.com)

ViewTube is a clone of YouTube, which aims to provide a platform for people to upload and view videos while allowing for interaction and feedback tbrough comments and likes.

### Technologies Used

#### Backend:
- Ruby on Rails
- PostgreSQL
- AWS S3

#### Frontend:
- React
- Redux


### Main Features

#### Video Search
![Video Search](https://github.com/slimjim49j/ViewTube/blob/master/readme_images/search_results.png)
Users can search for videos using the search bar, and also see a preview of each video by hovering over each card.

#### Video Playback, Likes
![Video Playback, Likes](https://github.com/slimjim49j/ViewTube/blob/master/readme_images/video_show.png)
Each video has a show page where they can see its description, the channel that posted it, and likes / dislikes.

```javascript
const _nullVideo = {
    id: null,
    title: "",
    description: "",
    video: "",
    channelId: null,
    createdAt: "",
    likeCount: null,
    dislikeCount: null,
    userLikeId: null,
};

const _nullChannel = {
    id: null,
    title: "",
    description: "",
    userId: null,
};

export const selectVideo = (videos, videoId) => {
    // debugger
    return videos[videoId] || _nullVideo;

};

export const selectChannel = (channels, channelId) => {
    return channels[channelId] || _nullChannel;
};
```

A problem I had here was handling what the video show component would do while waiting for the video's information to be retrieved. I ended up using a redux selector to provide default values so that accessing nested values wouldn't throw errors.

#### Comments
![Comments](https://github.com/slimjim49j/ViewTube/blob/master/readme_images/video_comment.png)
Users can give feedback to videos via comments and replies. The main challenge with this was designing the comment components to work for both top level comments and replies. The key was to break down each component into several smaller components with a narrower range of responsabilty.
