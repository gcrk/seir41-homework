class RpsController < ApplicationController
  def start
    @choices = ['rock', 'paper', 'scissor']
    render :start
  end

  def play
    @choices = ['rock', 'paper', 'scissor']
    @computer = @choices[rand(3)]
    render :play
  end
end
