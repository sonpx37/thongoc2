class HomeController < ApplicationController
  def index
    @users = User.where(is_admin: false)
  end
end
