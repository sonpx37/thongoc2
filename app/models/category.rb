class Category < ActiveRecord::Base
  has_many :posts, dependent: :destroy

  scope  :phu_huynh, -> {
    where(cat_type: "phu_huynh")
  }

  scope  :hoc_sinh, -> {
    where(cat_type: "hoc_sinh")
  }

  scope  :su_kien, -> {
    where(cat_type: "su_kien")
  }
end
