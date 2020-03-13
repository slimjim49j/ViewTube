class AddIndexToLikes < ActiveRecord::Migration[5.2]
  def change
    add_index :likes, [:channel_id, :likable_id, :likable_type], unique: true
  end
end
