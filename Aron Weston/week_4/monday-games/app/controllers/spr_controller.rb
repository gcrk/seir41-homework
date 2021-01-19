class SprController < ApplicationController 

    def index 
        render :index 
    end

    def throw 
        @choice = params[:choice]

        @result case 
        

        render :throw
    end

end