class CreateComments < ActiveRecord::Migration[5.2]
  def change
    create_table :comments do |t|
      t.text :body, null: false
      t.integer :channel_id, null: false
      t.integer :video_id, null: false
      t.integer :parent_comment_id
      t.timestamps
    end
  end
end
