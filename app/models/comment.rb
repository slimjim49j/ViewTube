class Comment < ApplicationRecord
    # belongs to: channel, video, parent comment
    # can have: likes
    validates :body, length: {minimum: 1}

    belongs_to :channel,
        foreign_key: :channel_id,
        class_name: :Channel
    
    belongs_to :video,
        foreign_key: :video_id,
        class_name: :Video

    belongs_to :parent_comment,
        foreign_key: :parent_comment_id,
        class_name: :Comment,
        optional: true

    has_many :child_comments,
        foreign_key: :parent_comment_id,
        class_name: :Comment
    
    has_many :likes,
        as: :likable
end
