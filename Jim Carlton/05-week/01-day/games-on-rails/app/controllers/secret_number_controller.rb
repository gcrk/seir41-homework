class SecretNumberController < ApplicationController

def game

  @answer = params[:pick].to_i

  render :game

end

def result

  @answer = params[:pick].to_i

  @choices = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

  @random_choice = @choices[rand * @choices.size]

  render :result

end

end
