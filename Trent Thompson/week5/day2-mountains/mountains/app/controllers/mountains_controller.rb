class MountainsController < ApplicationController
  def index
    @mountains = Mountain.all
  end

  def show
    @mountain = Mountain.find params[:id]
  end

  def new
  end

  def create
    mountain = Mountain.create :name => params[:name], :image => params[:image], :height => params[:height], :weight => params[:weight]
    redirect_to mountain_path(mountain.id) #show page
  end

  def edit
    @mountain = Mountain.find params[:id]
  end

  def update
    mountain = Mountain.find params[:id]
    mountain.name = params[:name]
    mountain.height = params[:height]
    mountain.weight = params[:weight]
    mountain.image = params[:image]
    mountain.save
    redirect_to mountain_path(mountain.id) #show page
  end

  def destroy
    mountain = Mountain.find params[:id]
    mountain.destroy
    redirect_to mountain_path 

  end
end
