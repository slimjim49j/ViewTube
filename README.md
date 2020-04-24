# ViewTube Full Stack Clone

[Link to Live Youtube Clone](https://viewtube-clone.herokuapp.com)

ViewTube is a clone of YouTube that allows for video upload and playback. Users can search for videos, as well as like and comment on videos.

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

A major problem I had here was handling what the video show component would do while waiting for the video's information to be retrieved. I ended up using a redux selector to provide default values so that accessing nested values wouldn't throw errors.

#### Comments
![Comments](https://github.com/slimjim49j/ViewTube/blob/master/readme_images/video_comment.png)
Users can give feedback to videos via comments and replies. The main challenge with this was designing the comment components to work for both top level comments and replies. The key was to break down each component into several smaller components with a narrower range of responsabilty.
