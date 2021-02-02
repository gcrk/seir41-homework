class MagicController < ApplicationController

  def magic
    render :magic
  end

  def answer
    @question = params[:question]
    @magic_answers = {
      1 => ["It is certain.", "It is decidedly so.", "Without a doubt.", " Yes – definitely.", "You may rely on it."],
      2 => ["As I see it, yes.", " Most likely.", "Outlook good.", "Yes.", "Signs point to yes."],
      3 => ["Reply hazy, try again.", "Ask again later.", "Better not tell you now.", " Cannot predict now.", "Concentrate and ask again."],
      4 => ["Don't count on it.", "My reply is no.", "My sources say no.", "Outlook not so good.", "Very doubtful."]
    }
    @rand_value = 1 + rand(5)
    @rand_key = 1 + rand(4)
    @rand_final = @magic_answers[@rand_key][@rand_value]

    render :answer
  end

end
