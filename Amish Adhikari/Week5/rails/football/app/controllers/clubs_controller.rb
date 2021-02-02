class ClubsController < ApplicationController
  def index
    @clubs = Club.all
  end

  def new
    @club = Club.new
  end

  def create
  club = Club.create club_params
  redirect_to club
  end

  def edit
    @club = Club.find params[:id]
  end

  def update
  club = Club.find params[:id]
  club.update club_params
  redirect_to club
  end

  def show
    @club = Club.find params[:id]
  end

  def destroy
    club = Club.find params[:id]
    club.destroy
    redirect_to clubs_path
  end

  private
  def club_params
  params.require(:club).permit(:title, :country, :city, :founded, :image)
  end

end
