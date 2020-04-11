json.extract! video, :id, :title, :description, :channel_id, :created_at
json.video url_for(video.video)


# get associated likes for video 
# group by :dislike flag
# select the count of likes/dislikes
like_query = video.likes.group(:dislike).count

json.like_count like_query[false] || 0
json.dislike_count like_query[true] || 0


# get the likeId on the requested video for the current user
if current_user && user_like = video.likes.find_by(likes: {channel_id: current_user.channel.id})
    json.user_like_id user_like.id
else
    json.user_like_id nil
end