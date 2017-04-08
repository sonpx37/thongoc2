class Category < ActiveRecord::Base
  has_many :posts, dependent: :destroy
  validates :cat_name, presence: true
  validates :cat_type, presence: true

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
