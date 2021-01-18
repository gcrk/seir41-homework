require 'sinatra'
require 'sinatra/reloader'
require 'sqlite3'

get '/' do
  erb :home
end

#INDEX Shows us the list of all the posts
get '/forum' do
  @posts = query_db 'SELECT * FROM forum'
  erb :forum_index
end

#Link to new post
get '/forum/new' do
  erb :forum_new
end

# Create Post
post '/forum' do
  query_db "INSERT INTO forum (username, comment, image) VALUES ('#{ params[:username]}', '#{ params[:comment] }', '#{ params[:image] }')"
  redirect to('/forum') #Get request
end

# SHOW - Note: I didn't need this part
get '/forum' do #:id as a placeholderish thingo
  #get
  @post = query_db "SELECT * FROM forum WHERE id=#{params[:id]}"
  @post = @post.first #Get the post out of the array
  erb :forum_show
end

#edit
get '/forum/:id/edit' do
  #get post from Database
  @post = query_db "SELECT * FROM forum WHERE id=#{params[:id]}"
  @post = @post.first #Get the post out of the array
  #extract the post from the array
  erb :forum_edit
end

#Update
post '/forum/:id' do
  query_db "UPDATE forum SET username='#{ params[:username] }', comment='#{ params[:comment] }', image='#{ params[:image] }' WHERE id=#{ params[:id] }"
  redirect to('/forum') #Get request
end

#destroy
get '/forum/:id/delete' do
  #delete post
  query_db "DELETE FROM forum WHERE id=#{ params[:id] }"
  #redirect
  redirect to("/forum")
end

def query_db(sql_statement)
  puts sql_statement #Optional but nice for debugging
  #connect to the database
  db = SQLite3::Database.new 'database.sqlite3'
  db.results_as_hash = true
  #fetch posts
  results = db.execute sql_statement #returns an array
  #close database
  db.close
  results #implicit return
end
