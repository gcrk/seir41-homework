class MountainsController < ApplicationController
    def index
        @mountains = Mountain.all
    end

    def show
        @mountain = Mountain.find params[:id]
    end

end