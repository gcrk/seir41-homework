# # Bonus Challenge
#
# ## Do-It-Yourself Ruby REPL
#
# Try to create your own Ruby REPL (Read Evaluate Print Loop) program.
#
# It should show a prompt, read some Ruby code from the user, `eval`uate their code, print the result and loop back to the start.
#
# ### Sample Session
#
# ```
# $ ruby repl.rb
# Welcome to Ruby REPL
# > 2 + 7
# 9
# > "some" + "string"
# "somestring"
# >
# # ```

# Open the REPL
puts "Welcome to the Ruby REPL"
puts "Type 'quit' (without brackets) to exit the REPL"

# Set the Input
input = ""

# The loop
# TODO: Make the loop able to handle unclosed strings and potentially other kinds of errors
until input == "quit" do
  print "> "
  input = gets.chomp
  unless input == "quit"
      begin
        result = eval(input)
      rescue
        puts "Error: Input Invalid"
        next
      end
      if result.class == String
        result = "\"#{ result }\""
      end
      puts result
  end
end
