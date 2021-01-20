class GuessController < ActionController::Base

    def number 
        guess = params[:number].to_i
        number = rand(1..10)
        puts guess
        puts number
        if guess == number 
            redirect_to '/win'
        else
            redirect_to '/lose'
        end
    end



end

