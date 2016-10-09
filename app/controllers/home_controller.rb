class HomeController < ApplicationController
  def index
    # @users = User.where(is_admin: false)
    # lay 1 vai bai viet cham soc tre de phu huynh tham khao
    cate_parent = Category.phu_huynh.first
    @parent_posts = Post.where(category_id: cate_parent.id).take(5)
    @relative_parent_posts = @parent_posts.reject{|x| x.id == @parent_posts.first.id}
    #lay bai viet ve tin tuc su kien
    cate_event = Category.su_kien.first
    @events_posts = Post.where(category_id: cate_event.id).take(5)
    @relative_event_posts = @events_posts.reject{|x| x.id == @events_posts.first.id}
    #lay bai viet ve tin tuc hoc sinh
    cate_student = Category.hoc_sinh.first
    @students_posts = Post.where(category_id: cate_student.id).take(5)
    @relative_student_posts = @students_posts.reject{|x| x.id == @students_posts.first.id}
    set_meta_tags title: t(".title"),
              description: t(".description"),
              keywords: t(".keywords")
  end
end
