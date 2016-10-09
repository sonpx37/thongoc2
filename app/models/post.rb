class Post < ActiveRecord::Base
  extend FriendlyId
  friendly_id :title, use: [:slugged, :history]
  belongs_to :category
  validates :title, presence: true
  validates :body, presence: true
  validates :preview, presence: true

  def get_post_relative
    posts = Post.where(category_id: self.category.id).take(5)
    relative_posts = posts.reject{|x| x.id == self.id}
  end

end
