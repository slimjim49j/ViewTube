class Video < ApplicationRecord
    belongs_to :channel,
        foreign_key: :channel_id,
        class_name: :Channel

    has_one_attached :video

    has_many :likes,
        as: :likable

    has_many :comments,
        foreign_key: :video_id,
        class_name: :Comment

    def self.search(search_str)
        Video.where("LOWER(title) LIKE LOWER(:search) OR LOWER(description) LIKE LOWER(:search)", search: "%#{search_str}%")
    end
end
