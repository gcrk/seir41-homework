require 'sinatra'
require 'sinatra/reloader'
require 'sqlite3'

get '/' do
  erb :home
end

get '/crystals' do
  @crystals = query_db 'SELECT * FROM crystals'
  erb :crystals_index
end

get '/crystals/new' do
  erb :crystals_new
end

post '/crystals' do
  query_db "INSERT INTO crystals (name, healingprop, image) VALUES ('#{ params[:name] }', '#{ params[:healingprop] }', '#{ params[:image] }')"
  redirect to('/crystals')
end

get '/crystals/:id' do
  @crystal = query_db "SELECT * FROM crystals WHERE id=#{ params[:id] }"
  @crystal = @crystal.first
  erb :crystals_show
end

# EDIT:
get '/crystals/:id/edit' do
  @crystal = query_db "SELECT * FROM crystals WHERE id=#{ params[:id]}"
  @crystal = @crystal.first
  erb :crystals_edit
end

#UPDATE
post '/crystals/:id' do
  query_db "UPDATE crystals SET name='#{ params[:name] }', healingprop='#{ params[:healingprop] }', image='#{ params[:image] }' WHERE id=#{ params[:id] }"
  redirect to("/crystals/#{ params[:id]}")
end

# DELETE
get '/crystals/:id/delete' do
  query_db "DELETE FROM crystals WHERE id=#{ params[:id] }"
  redirect to('/crystals')
end


def query_db(sql_statement)
  puts "sql_statement"
  db = SQLite3::Database.new 'database.sqlite3'
  db.results_as_hash = true
  results = db.execute sql_statement
  db.close
  results
end
