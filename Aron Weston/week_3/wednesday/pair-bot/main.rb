require "sinatra"
require "sinatra/reloader"

#Routes:
#1. / erb: home or test
#2.

#1. Index route: do you have a test for that? yes = /pass, no = /write-test > done > /pass
#2. /pass route: need to refactor? Yes = /do-refactor, No = /new_feature

#Index
get "/" do
  erb :home
end

# Pass route
get "/pass" do
  erb :pass
end

# Write Code
get "/write-code" do
  erb :write_code
end

# New Feature
get "/new-feature" do
  erb :new_feature
end

# Refactor
get "/refactor" do
  erb :refactor
end

# Do Refactor
get "/do-refactor" do
  erb :do_refactor
end
