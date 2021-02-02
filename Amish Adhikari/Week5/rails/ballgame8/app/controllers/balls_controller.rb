class BallsController < ApplicationController
  def game1
    render :game1
  end

  def answer
    ans = ["No","Yes","Maybe", "NeverMind"]
    @reply = ans.sample 
    render :answer

  end

end
