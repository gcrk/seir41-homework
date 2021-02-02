require 'sinatra'
require 'sinatra/reloader'
require 'sqlite3'

get '/' do
  erb :home
end

#HOME/INDEX (Guitar shop)
get '/guitars' do
  @guitars = query_db 'SELECT * FROM guitars' #Show me all the guitars in your store(db), sir.
  erb :guitars_shop
end

#New
get '/guitars/new' do
  erb :guitars_new
end

#CREATE
post '/guitars' do
  query_db "INSERT INTO guitars (brand, model, image) VALUES ('#{params[:brand]}', '#{params[:model]}', '#{params[:image]}')"
  redirect to('/guitars')
end


#SHOW (Having a jam) (READ)
get '/guitars/:id' do #id is a placeholder thingo for the guitar id
    #get guitar
    @guitar = query_db "SELECT * FROM guitars WHERE id=#{params[:id]}" #WHY SELECT WITH ID???
    @guitar = @guitar.first
    erb :guitars_show
end

#EDIT
get '/guitars/:id/edit' do
  #preload the guitar into a variable so we can edit it's objects in the Hash
  @guitar = query_db "SELECT * FROM guitars WHERE id=#{params[:id]}"
  @guitar = @guitar.first
  erb :guitars_edit
end

#UPDATE
post '/guitars/:id' do
  query_db "UPDATE guitars SET name='#{params[:brand]}', model='#{params[:model]}', image='#{params[:url]}' WHERE id=#{ params[:id]}"
  redirect to("/guitars/#{ params[:id] }")
end

#DESTROY
get '/guitars/:id/delete' do
  query_db "DELETE FROM guitars WHERE id=#{ params[:id] }"
  redirect to("/guitars")
end


def query_db(sql_statement) #"Mr database, can I please have?"
  puts sql_statement #Optional but nice for debugging, it just displays what the message is we are asking
  #connect to the database
  db = SQLite3::Database.new 'database.sqlite3' #Not sure what Database.new means, but ' ' refers to our guitar db
  #once connected we want to get our guitars. But we must change from an array to a hash.
  db.results_as_hash = true #guitar db, covert results, to a Hash
  results = db.execute sql_statement #basically return? database, execute my argument statement
  #finish and close, otherwise we cant do other things with it. One thing at a time.
  db.close
  results #implicit return, show results
end
