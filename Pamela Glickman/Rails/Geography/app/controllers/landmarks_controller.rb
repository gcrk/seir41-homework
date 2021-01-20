class LandmarksController < ApplicationController

  def new
    @countries = Country.all
    @landmark = Landmark.new
  end

  def create
    @landmark = Landmark.create landmark_params
    redirect_to countries_path
  end

  def edit
    @landmark = Landmark.find params[:id]
  end

  def update
    landmark = Landmark.find params[:id]
    landmark.update landmark_params
    redirect_to countries_path
  end

  def destroy
    landmark = Landmark.find params[:id]
    landmark.destroy
    redirect_to countries_path
  end

  private
  def landmark_params
    params.require(:landmark).permit(:name, :image, :country_id)
  end
end
