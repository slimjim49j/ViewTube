class Like < ApplicationRecord
    belongs_to :channel,
        foreign_key: :channel_id,
        class_name: :Channel
    
    belongs_to :likable, polymorphic: true
end
