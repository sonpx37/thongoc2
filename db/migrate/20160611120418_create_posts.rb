class CreatePosts < ActiveRecord::Migration
  def change
    create_table :posts do |t|
      t.string :title
      t.date :published_date
      t.string :image
      t.references :user, index: true

      t.timestamps
    end
  end
end
