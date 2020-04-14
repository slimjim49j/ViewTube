@comments.each do |comment|
    json.partial! "comment", comment: comment
    json.channel_name 
end