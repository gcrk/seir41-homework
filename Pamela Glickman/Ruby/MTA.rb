# # MTA Lab
#
# ## Objectives:
# * Apply your knowledge of Ruby to solve a real world problem.
# * Get really good at array manipulation.
#
# #### Activity
# * Create a program that models a simple subway system.
#
# * The program takes the line and stop that a user is getting on at and the line
# and stop that user is getting off at and prints the journey and the total number of stops for the trip in the console:
#
# ```ruby
# plan_trip 'N', 'Times Square', '6', '33rd' # This is only a suggested function name and signature.
#
# # `puts` shows output similar to this:
# # "You must travel through the following stops on the N line: 34th, 28th, 23rd, Union Square."
# # "Change at Union Square."
# # "Your journey continues through the following stops: 23rd, 28th, 33rd."
# # "7 stops in total."
# ```
#
# * There are 3 subway lines:
#   * The N line has the following stops: Times Square, 34th, 28th, 23rd, Union Square, and 8th
#   * The L line has the following stops: 8th, 6th, Union Square, 3rd, and 1st
#   * The 6 line has the following stops: Grand Central, 33rd, 28th, 23rd, Union Square, and Astor Place.
#   * All 3 subway lines intersect at Union Square, but there are no other intersection points. (For example, this means the 28th stop on the N line is different than the 28th street stop on the 6 line, so you'll have to differentiate this when you name your stops in the arrays.)
# * Tell the user the number of stops AND the stops IN ORDER that they will pass through or change at.

# Line arrays
# The names of the lines have been added to the start of the array so that they can be referred to correctly, I'd be interested in knowing whether there's a better way to achieve this.

# #### Hints:
# * Work out how you would do it on paper first! Then start to explain that process in Ruby.
# * Get the program to work for a single line before trying to tackle multiple lines.
# * Don't worry about prompting the user for input. Hard code some values to get it working. You can use ```gets``` later to make it more interactive.
# * Consider diagramming the lines by sketching out the subway lines and their stops and intersection.
# * The key to the lab is finding the index positions of each stop. (hint: ```index```)
# * Make sure the stops that are the same for different lines have different names (i.e. 23rd on the N and on the 6 need to be differentiated)

# Step One: Get Inputs

# Allow the user to input a line
def line_selector

  train_lines = {
    :line_n => ["N", "Times Square", "34th", "28th", "23rd", "Union Square", "8th"],
    :line_l => ["L", "8th", "6th", "Union Square", "3rd", "1st"],
    :line_6 => ["6", "Grand Central", "33rd", "28th", "23rd", "Union Square", "Astor Place"]
  }

  line = ""

  while line == "" do
    print "To pick a line type N, L or 6: "
    selection = gets.to_s.chomp
    case selection
      when "N"
        line = train_lines[:line_n]
      when "L"
        line = train_lines[:line_l]
      when "6"
        line = train_lines[:line_6]
      else
        puts "Invalid Input"
    end
  end
  puts "You have chosen line #{ line[0] }"
  line
end

# Getting Inputs
puts "Welcome to the Metro Trains Journey Planner"
puts ""

# Starting Line
puts "Pick your starting line"
start_line = line_selector
puts ""

#Starting Station
start_station = ""
until start_line.drop(1).include? start_station do
  print "Next, pick a station on the #{start_line[0]} line. Your options are: #{start_line.drop(1).join(", ")}: "
  start_station = gets.to_s.chomp
end
puts ""

# Target Line
puts "Pick your target line"
target_line = line_selector
puts ""

# Target Station
target_station = ""
until target_line.drop(1).include? target_station do
print "Next, pick a station on the #{target_line[0]} line. Your options are: #{target_line.drop(1).join(", ")}: "
target_station = gets.to_s.chomp
end
puts ""



#Step Two: Plan Journey

first_stop_num = start_line.index(start_station);
target_stop_num = target_line.index(target_station);
stop_count = 0;

# This function makes an array of the required stations
def find_stations(si, ei, line) # si is short for start index and ei is short for end index
  if ei >= si
    line_stop_count = ei - si
    passing_stations = line[(si+1)..ei].join(", ")
  else
    line_stop_count = si - ei
    passing_stations = line[(ei)..(si-1)].reverse.join(", ")
  end
  return {:num_stops => line_stop_count, :stops => passing_stations}
end

# Find the full trip and print it to the command line
if start_line == target_line
  trip = find_stations(first_stop_num, target_stop_num, start_line)
  puts "You must travel through the following stops on the #{ target_line[0] } line: #{ trip[:stops]  }."
  stop_count+=trip[:num_stops]
  puts "#{ stop_count } stops in total."
else
  target_stop_num = start_line.index("Union Square")
  trip = find_stations(first_stop_num, target_stop_num, start_line)
  puts "You must travel through the following stops on the #{ start_line[0] } line: #{ trip[:stops]  }."
  puts "Change at Union Square."
  stop_count+=trip[:num_stops]
  first_stop_num = target_line.index("Union Square")
  target_stop_num = target_line.index(target_station)
  trip = find_stations(first_stop_num, target_stop_num, target_line)
  stop_count+=trip[:num_stops]
  puts "Your journey continues through the following stops: #{ trip[:stops] }"
  puts "#{ stop_count } stops in total."
end
