class Ckeditor::AttachmentFile < Ckeditor::Asset
  has_attached_file :data,
                  :storage => :google_drive,
                  :google_drive_credentials => "#{Rails.root}/config/google_driver.yml",
                  :google_drive_options => {
                    :path => proc { |style| "#{style}_#{id}_#{data.original_filename}" },
                    :public_folder_id => '0BwEA-iwfK3r7MjlJNEgwZ3NZalU'
                  }

  validates_attachment_presence :data
  validates_attachment_size :data, less_than: 100.megabytes
  do_not_validate_attachment_file_type :data

  def url_thumb
    @url_thumb ||= Ckeditor::Utils.filethumb(filename)
  end
end
