class GamesController < ApplicationController
  def home
    render :home
  end

  def magic_8_ball

    @question = params[:question]
    random_num = rand(21)

    case random_num
    when 1
      @response =  "It is certain."
    when 2
      @response =  "It is decidedly so."
    when 3
      @response =  "Without a doubt."
    when 4
      @response =  "Yes – definitely."
    when 5
      @response =  "You may rely on it."
    when 6
      @response =  "As I see it, yes."
    when 7
      @response =  "Most likely."
    when 8
      @response =  "Outlook good."
    when 9
      @response =  "Yes."
    when 10
      @response =  "Signs point to yes."
    when 11
      @response =  "Reply hazy, try again."
    when 13
      @response =  "Better not tell you now."
    when 14
      @response =  "Cannot predict now."
    when 15
      @response =  "Concentrate and ask again."
    when 16
      @response =  "Don't count on it."
    when 17
      @response =  "My reply is no."
    when 18
      @response =  "My sources say no."
    when 19
      @response =  "Outlook not so good."
    when 20
      @response =  "Very doubtful."
    end

    render :magic_8_ball

  end

  def secret_num_game

    @secret_num = rand(1..10)
    @guess = params[:guess]

    if @guess == @secret_num
      render :secret_num_game_win
    else
      render :secret_num_game_lose
    end

  end

  def secret_num_game_retry

    @secret_num = params[:secret_num]
    @guess = params[:guess]

    if @guess == @secret_num
      render :secret_num_game_win
    else
      render :secret_num_game_lose
    end

  end

  def rock_paper_scissors

    @user_throw = params[:user_throw].capitalize
    random_num = rand(1..5)

    case random_num
    when 1
      @comp_throw = "Rock"
    when 2
      @comp_throw = "Paper"
    when 3
      @comp_throw = "Scissors"
    when 4
      @comp_throw = "Lizard"
    when 5
      @comp_throw = "Spock"
    end

    if @user_throw == @comp_throw
      @result = "Tie!"
    elsif (@user_throw == "Rock" && (@comp_throw == "Scissors" || @comp_throw == "Lizard")) || (@user_throw == "Paper" && (@comp_throw == "Rock" || @comp_throw == "Spock" )) || (@user_throw == "Scissors" && (@comp_throw == "Paper" || @comp_throw == "Lizard")) || (@user_throw == "Lizard" && (@comp_throw == "Paper" || @comp_throw == "Spock")) || (@user_throw == "Spock" && (@comp_throw == "Rock" || @comp_throw == "Scissors")) 
      @result = "User Wins!"
    else
      @result = "Computer Wins!"
    end

    render :rock_paper_scissors
  end
end
