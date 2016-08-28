class NewsController < ApplicationController
  # before_action :authenticate_user!
  before_action :check_admin?

  def new
    @post = Post.new()
  end

  def create
    
  end

  def tin_tuc  
  end

  def phu_huynh
    
  end

  def hoc_sinh
    
  end

  def check_admin?
    # redirect_to root_path unless current_user.present? &&current_user.check_admin?
  end
end
