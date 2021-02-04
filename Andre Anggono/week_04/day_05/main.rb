require 'sinatra'
require 'sinatra/reloader'
require 'sqlite3'
require 'active_record'
require 'pry'

ActiveRecord::Base.establish_connection(
  :adapter => 'sqlite3',
  :database => 'database.sqlite3'
)

ActiveRecord::Base.logger = Logger.new(STDERR)

class Team < ActiveRecord::Base
  has_many :drivers
end

class Driver < ActiveRecord::Base
  belongs_to :team
end

get '/' do
  erb :home
end

get '/teams' do
  @teams = Team.all
  erb :teams_index
end

get '/teams/:id' do
  @team = Team.find(params[:id])
  # binding.pry
  erb :teams_show
end

get '/drivers' do
  @drivers = Driver.all
  erb :drivers_index
end

get '/drivers/:id' do
  @teams = Team.all
  @driver = Driver.find(params[:id])
  erb :drivers_show
end
# binding.pry






# SELECT first_name, drivers_number, name FROM teams, drivers WHERE drivers.team = teams.id;