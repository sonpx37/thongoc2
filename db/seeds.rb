# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)
categories = Category.create([{cat_name: "Phụ Huynh", cat_type: "phu_huynh"}, {cat_name: "Học Sinh", cat_type: "hoc_sinh"}, {cat_name: "Tin Tức - Sự Kiện", cat_type: "su_kien"}])
