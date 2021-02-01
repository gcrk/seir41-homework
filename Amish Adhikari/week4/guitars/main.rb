require 'sinatra'
require 'sinatra/reloader'
require 'sqlite3'

get '/' do
  erb :home
end

get '/guitars' do
  @guitars = query_db 'SELECT * FROM guitars'
  erb :guitars_index
end

get '/guitars/:id' do
  @guitar = query_db "SELECT * FROM guitars WHERE id=#{ params[:id] }"
  @guitar = @guitar.first 
  erb :guitars_show
end



def query_db(sql_statement)
  puts sql_statement
  db = SQLite3::Database.new 'database.sqlite3'
  db.results_as_hash = true
  results = db.execute sql_statement
  db.close
  results
end
