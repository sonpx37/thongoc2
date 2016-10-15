class AboutsController < ApplicationController

  def tuyen_sinh
     set_meta_tags title: t(".title", year:  Time.zone.now.year),
              description: t(".description"),
              keywords: t(".keywords")
  end

  def gioi_thieu
    set_meta_tags title: t(".title"),
              description: t(".description"),
              keywords: t(".keywords")
  end
end
