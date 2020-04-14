class Channel < ApplicationRecord
    belongs_to :user,
        foreign_key: :user_id,
        class_name: :User

    has_many :videos,
        foreign_key: :channel_id,
        class_name: :Video

    has_many :comments,
        foreign_key: :channel_id,
        class_name: :Comment
end
