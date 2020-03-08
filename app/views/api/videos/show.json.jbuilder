json.extract! @video, :id, :title, :description, :channel_id, :created_at
json.video url_for(@video.video)

# when updating this also update nullVideo in reducers/selectors