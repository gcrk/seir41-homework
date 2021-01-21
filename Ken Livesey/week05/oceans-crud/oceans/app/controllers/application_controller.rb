class ApplicationController < ActionController::Base
  skip_before_action :verify_authenticity_token #only needed for handwritten forms
end
