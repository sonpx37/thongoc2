class Ckeditor::Picture < Ckeditor::Asset
  has_attached_file :data,
                    :storage => :google_drive,
                    :google_drive_credentials => "#{Rails.root}/config/google_driver.yml",
                    :styles => { :medium => "300x300", :thumb => "100x100", :large => "800x600" },
                    :google_drive_options => {
                      :path => proc { |style| "#{style}_#{id}_#{data.original_filename}" },
                      :public_folder_id => '0BwEA-iwfK3r7MjlJNEgwZ3NZalU'
                    }

  validates_attachment_presence :data
  validates_attachment_size :data, less_than: 2.megabytes
  validates_attachment_content_type :data, content_type: /\Aimage/
  def url_content
    url(:content)
  end
end
