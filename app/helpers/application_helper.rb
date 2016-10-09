module ApplicationHelper
  def get_posts_relative post
    relative_posts = post.get_post_relative
  end

  def show_content_post cat
    if cat == PHU_HUYNH_CAT
      message = t("news.goc_phu_huynh")
      url = phu_huynh_news_index_path()
    elsif cat == HOC_SINH_CAT
      message = t("news.goc_hoc_sinh")
      url = hoc_sinh_news_index_path()
    else
      message = t("news.tin_tuc")
      url = tin_tuc_news_index_path()
    end
    {
      message: message,
      url: url
    }
  end
end
