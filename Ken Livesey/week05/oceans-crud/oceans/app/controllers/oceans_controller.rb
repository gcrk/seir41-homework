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
    ocean = Ocean.create :name => params[:name], :location => params[:location], :area => params[:area], :volume => params[:volume], :avg_depth => params[:avg_depth], :coastline => params[:coastline]
    redirect_to ocean_path(ocean.id)#show page
  end

  def edit
    @ocean = Ocean.find params[:id]
  end

  def update
    ocean = Ocean.find params[:id]
    ocean.name = params[:name]
    ocean.location = params[:location]
    ocean.area = params[:area]
    ocean.volume = params[:volume]
    ocean.avg_depth = params[:avg_depth]
    ocean.coastline = params[:coastline]
    ocean.save
    redirect_to ocean_path(ocean.id)
  end

  def destroy
    ocean = Ocean.find params[:id]
    ocean.destroy
    redirect_to oceans_path
  end

end
