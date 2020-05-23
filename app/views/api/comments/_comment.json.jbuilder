# might eventually use :child_comment_ids
json.extract! comment, :id, :body, :parent_comment_id, :created_at
json.channel_title comment.channel.title
json.user_id comment.user.id
