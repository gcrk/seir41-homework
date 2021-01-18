require 'sinatra'
require 'sinatra/reloader'
require 'sqlite3'

# Database access function
def talk_to_db sql
  database = SQLite3::Database.new 'database.sqlite3'
  database.results_as_hash = true
  results = database.execute sql # Returns an array
  database.close
  results
end

# Show all the planes on the home page
get '/' do
  @planes = talk_to_db 'SELECT * FROM planes'
  erb :home
end

# Open form to add new plane
get '/add' do
  @planes = talk_to_db 'SELECT * FROM planes'
  erb :add
end

# Post new plane form
post '/add' do
  talk_to_db "INSERT INTO planes (name, role, max_speed, image) VALUES ('#{ params[:name] }', '#{ params[:role]}', '#{ params[:max_speed] }', ' #{params[:image]}')"
  redirect to('/')
end

# Open form to edit plane
get '/edit/:id' do
  @planes = talk_to_db 'SELECT * FROM planes'
  @plane = talk_to_db "SELECT * FROM planes WHERE id=#{ params[:id] }"
  @plane = @plane.first
  erb :edit
end

# Post edited plane
post '/edit/:id' do
  talk_to_db "UPDATE planes SET name='#{ params[:name] }', role='#{ params[:role] }', max_speed='#{ params[:max_speed] }' WHERE id=#{ params[:id] }"
  redirect to('/')
end

# Delete plane
get '/delete/:id' do
  talk_to_db "DELETE FROM planes WHERE id='#{ params[:id] }'"
  redirect to('/')
end
