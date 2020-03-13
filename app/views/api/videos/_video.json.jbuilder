json.extract! video, :id, :title, :description, :channel_id, :created_at, :like_ids
json.video url_for(video.video)
# debugger
user_like = video.likes.find_by(likes: {channel_id: current_user.channel.id})
if user_like
    json.userLikeId user_like.id
else
    json.userLikeId nil
end