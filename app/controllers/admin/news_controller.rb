class Admin::NewsController < ApplicationController
 before_action :authenticate_user!
 before_action :check_admin?
 layout "admin"

  def new
    @post = Post.new()
    @categories = Category.all
  end

  def create
    @category = Category.find(params["post"]["category_id"])
    post = @category.posts.create(news_params)
    if post.errors.empty?
      redirect_to admin_homes_path(), success: t("admin.news.success")
    else
      redirect_to admin_homes_path(), danger: t("admin.news.error")
    end
  end

  private
    def news_params
      params.require(:post).permit(:title, :body, :category, :preview)
    end

    def check_admin?
      if current_user.present?
        unless current_user.is_admin?
          redirect_to root_path
        end
      else
        redirect_to root_path
      end
    end
end
