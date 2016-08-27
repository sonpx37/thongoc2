class AboutsController < ApplicationController

  def tuyen_sinh
     set_meta_tags title: t(".title", year:  Time.zone.now.year),
              description: t(".description"),
              keywords: t(".keywords")
  end
end
