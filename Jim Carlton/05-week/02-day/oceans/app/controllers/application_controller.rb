class ApplicationController < ActionController::Base
  skip_before_action :verify_authenticity_token # We only need this for hand-written forms i.e. it's not a Rails form - this is not common (i.e. we usually use Rails forms to build these)
end
