class Admin::HomesController < ApplicationController
  load_and_authorize_resource class: false
  layout "admin"

  def index
  end
end
