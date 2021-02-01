class MountainsController < ApplicationController
  def index
    @mountains = Mountain.all #MODEL
  end

  def show
    @mountain = Mountain.find params[:id]
  end

  def new
  end

  def create
    mountain = Mountain.create :name => params[:name], :country => params[:country], :image => params[:image], :height => params[:height]
    redirect_to mountain_path(mountain.id)
  end

  def edit
  @mountain = Mountain.find params[:id]
  end

  def update
    mountain = Mountain.find params[:id]
    mountain.name = params[:name]
    mountain.image = params[:image]
    mountain.country = params[:country]
    mountain.height = params[:height]
    mountain.save
    redirect_to mountain_path(mountain.id)
  end

  def destroy
    mountain = Mountain.find params[:id]
    mountain.destroy
    redirect_to mountains_path
    end

end
