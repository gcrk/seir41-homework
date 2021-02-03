class DinosController < ApplicationController
  def index
    @dinos = Dino.all
  end

  def show
    @dino = Dino.find params[:id]
  end

  def new
  end

  def create
    dino = Dino.create :name => params[:name], :scientific_name => params[:scientific_name], :location => params[:location], :diet => params[:diet], :date_time => params[:date_time], :size => params[:size], :weight => params[:weight], :image => params[:image]
    redirect_to dino_path(dino.id)
  end

  def edit
    @dino = Dino.find params[:id]
  end

  def update
    dino = Dino.find params[:id]
    dino.name = params[:name]
    dino.scientific_name = params[:scientific_name]
    dino.location = params[:location]
    dino.diet = params[:diet]
    dino.date_time = params[:date_time]
    dino.size = params[:size]
    dino.weight = params[:weight]
    dino.image = params[:image]
    dino.save
    redirect_to dino_path(dino.id)
  end

  def destroy
    dino = Dino.find params[:id]
    dino.destroy
    redirect_to dinos_path
  end

end
