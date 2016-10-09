class NewsController < ApplicationController
  def show
    @post = Post.friendly.find(params[:id])
    @posts_relative = @post.get_post_relative
  end

  def tin_tuc
    cate = Category.su_kien.first
    @posts = Post.where(category_id: cate.id)
  end

  def phu_huynh
    cate = Category.phu_huynh.first
    @posts = Post.where(category_id: cate.id)
  end

  def hoc_sinh
    cate = Category.hoc_sinh.first
    @posts = Post.where(category_id: cate.id)
  end

end
