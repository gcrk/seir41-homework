class GuessController < ApplicationController 

    def index 
        render :index
    end 

    def result
        guess = params[:guess].to_f

        @num = rand(1...100)
        if @num == guess
            @result = "You win"
            @result_res = "Lucky guess.."
        else 
            @result = "You lose"
            @result_res = "Ha! You suck!"
        end 
    
        render :result
    end

end 