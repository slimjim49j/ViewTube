json.extract! @video, :id, :title, :description
json.video url_for(@video.video)