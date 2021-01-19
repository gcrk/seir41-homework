class PagesController < ApplicationController
  def home
    render :home
  end

  def magic
    render :magic
  end

  def secret
    render :secret
  end

  def rps
    render :rps
  end
  def results
    render :results
  end
end
