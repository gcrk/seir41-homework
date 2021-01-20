class MountainsController < ApplicationController
  def index
    @mountains = Mountain.all
  end

  def show
    @mountain = Mountain.find(params[:id])
  end

  def new
  end

  def create
    mountain = Mountain.create :name => params[:name], :image => params[:image], :countries => params[:countries], :elevation => params[:elevation], :prominence => params[:prominence], :range => params[:range], :first_ascent => params[:first_ascent], :first_ascenders => params[:first_ascenders]
    redirect_to mountain_path(mountain.id)
  end

  def edit
    @mountain = Mountain.find(params[:id])
  end

  def update
    mountain = Mountain.find(params[:id])
    mountain.name = params[:name]
    mountain.countries = params[:countries]
    mountain.elevation = params[:elevation]
    mountain.prominence = params[:prominence]
    mountain.range = params[:range]
    mountain.first_ascent = params[:first_ascent]
    mountain.first_ascenders = params[:first_ascenders]
    mountain.image = params[:image]
    mountain.save
    redirect_to mountain_path(mountain.id)
  end

  def destroy
    mountain = Mountain.find(params[:id])
    mountain.destroy
    redirect_to mountains_path
  end
end