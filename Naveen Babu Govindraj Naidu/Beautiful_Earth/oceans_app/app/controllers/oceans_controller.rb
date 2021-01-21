class OceansController < ApplicationController
  def index
    @oceans = Ocean.all
  end

  def show
    @ocean = Ocean.find params[:id]
  end

  def new

  end

  def create
    ocean = Ocean.create :name => params[:name],:image => params[:image],:length => params[:length],:depth => params[:depth],:islands => params[:islands]
    redirect_to ocean_path(ocean.id)
  end

  def edit
    @ocean = Ocean.find params[:id]
  end

  def update
    ocean = Ocean.find params[:id]
    ocean.name = params[:name]
    ocean.image = params[:image]
    ocean.length = params[:length]
    ocean.depth = params[:depth]
    ocean.islands = params[:islands]
    ocean.save
    redirect_to ocean_path(ocean.id)
  end
end
