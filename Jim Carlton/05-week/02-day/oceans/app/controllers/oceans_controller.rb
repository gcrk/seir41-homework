class OceansController < ApplicationController

  def index
    @oceans = Ocean.all
    render :index
  end

  def show
    @ocean = Ocean.find params[:id]
  end

  def new
    render :new
  end

  def create
    ocean = Ocean.create :name => params[:name], :image => params[:image], :countries => params[:countries], :area => params[:area], :volume => params[:volume], :depth => params[:depth], :species => params[:species]
    redirect_to ocean_path(ocean.id)
  end

  def edit
    @ocean = Ocean.find params[:id]
  end

  def update
    ocean = Ocean.find params[:id]
    ocean.name = params[:name]
    ocean.image = params[:image]
    ocean.countries = params[:countries]
    ocean.area = params[:area]
    ocean.volume = params[:volume]
    ocean.depth = params[:depth]
    ocean.species = params[:species]
    ocean.save
    redirect_to oceans_path
  end

  def destroy
    ocean = Ocean.find params[:id]
    ocean.destroy
    redirect_to oceans_path
  end

end
