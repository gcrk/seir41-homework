class GenresController < ApplicationController
  def index
  end

  def new
  end

  def edit
  end

  def show
    @genre = Genre.find params[:id]
  end
end
