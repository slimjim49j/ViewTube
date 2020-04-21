@videos.each do |video|
    json.set! video.id do
        json.partial! "video", video: video
        json.channel_title video.channel.title
    end
end