require 'sinatra'
require 'sinatra/reloader'
require 'httparty'



get '/' do
  erb :home # ask erb to get us the hoome page, then puts contents of home page into the yield section
end

get '/book' do
  @book_title = params[:title_of_book] #these two @ now can be seen in othe views
  
  erb :book
end




# # Books I
#
# ## Specification
#
# Build a search form that lets the user enter a book title. The Sinatra app will use HTTParty to fetch the data for the chosen book from Google Books and display it on the page. Display the cover, as a bare minimum.
#
# ## Sample URL
#
# https://www.googleapis.com/books/v1/volumes?q=title:Ulysses
#
# ### Additional Resources
#
# - [Sinatra](http://sinatrarb.com)
# - [Google Books Search API](https://developers.google.com/books/docs/v1/reference/volumes/list)
# - [HTTParty Tutorial](http://blog.teamtreehouse.com/its-time-to-httparty)
