class AddUserDetails < ActiveRecord::Migration
  def change
    add_column :users, :username, :string
    add_column :users, :phone, :string
    add_column :users, :first_name, :string
    add_column :users, :last_name, :string
    add_column :users, :gender, :string
    add_column :users, :birthday, :string
    add_column :users, :time_zone, :string
  end
end
