class HomeController < ApplicationController
  def index
    @users = User.where(is_admin: false)
    set_meta_tags title: t(".title"),
              description: t(".description"),
              keywords: t(".keywords")
  end
end
