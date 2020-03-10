class CreateLikes < ActiveRecord::Migration[5.2]
  def change
    create_table :likes do |t|
      t.integer :channel_id, null: false
      t.references :likable, polymorphic: true, null: false
      t.boolean :dislike
      t.timestamps
    end
  end
end
