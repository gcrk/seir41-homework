class MountainsController < ApplicationController
  def index
    @mountains = Mountain.all
  end

  def new
  end

  def show
    @mountain = Mountain.find params[:id]
  end

  def create
    mountain = Mountain.create :name => params[:name], :image => params[:image], :height => params[:height], :country => params[:country]
    redirect_to mountain_path(mountain.id)
  end

  def edit
    @mountain = Mountain.find params[:id]
  end

  def update
    mountain = Mountain.find params[:id]
    mountain.name = params[:name]
    mountain.image = params[:image]
    mountain.height = params[:height]
    mountain.country = params[:country]
    mountain.save
    redirect_to mountain_path(mountain.id)
  end

  def destroy
    Mountain.find(params[:id]).destroy
    redirect_to mountains_path
  end
end
