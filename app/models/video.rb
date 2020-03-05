class Video < ApplicationRecord
    belongs_to :channel,
        foreign_key: :channel_id,
        class_name: :Channel

    has_one_attached :video
end
