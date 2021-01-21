class PagesController < ApplicationController
    def home
        render :home
    end

    def win
        render :win
    end

    def lose
        render :lose
    end

    def guess
        render :guess
    end
    

end