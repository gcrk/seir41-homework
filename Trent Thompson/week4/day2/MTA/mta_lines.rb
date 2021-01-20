#union method ruby?? might work to find union square?????!!!
# joel said union method is just & symbol check ruby book marks

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
#journey('N','Times Square' , 'L','1st')
$subway_lines = {
  'N' => ['Times Square', '34th', '28th', '23rd', 'Union Square','8th'],
  'L' => ['8th', '6th', 'Union Square', '3rd','1st'],
  '6' => ['Grand Central', '33rd', '28th', '23rd', 'Union Square','Astor Place']
}

def journey (sLine, sStation, fLine, fStation)
  $indexAtStart = $subway_lines[sLine].index(sStation)
  $indexAtFinish = $subway_lines[fLine].index(fStation)
  number_of_stops1 = $indexAtStart - $indexAtFinish
  number_of_stops2 = #should i vreate a helper function to get index of unionsquare in each situation????

  if sLine != fLine
    $index_unionsq_sLine = $subway_lines[sLine].index('Union Square')
    $index_unionsq_fLine = $subway_lines[fLine].index('Union Square')
    if $indexAtStart - $index_unionsq_sLine < 0
      number_of_stops1 = $indexAtStart - $index_unionsq_sLine * -1
      p number_of_stops1

    end

  end

  if  number_of_stops1 < 0 #case going forward on single line
      number_of_stops1 = number_of_stops1 * -1
      stationNames = $subway_lines[sLine][sStation.to_i + 1..fStation.to_i]
      puts "forwards"
  elsif number_of_stops1 > 0 # case going backwards on single line
      reversed_stops = $subway_lines[sLine][fStation.to_i..sStation.to_i - 1].reverse
      shift_start_station = reversed_stops.shift
      puts"working backwards"
      stationNames = reversed_stops
  end

puts "Your journey starts on the #{sLine} and you travel through #{stationNames.join(", ")} with a total  of #{number_of_stops1} stops and you finish on the #{fLine} Line"


end

# journey('N', 'Times Square', 'N','8th') #forwars case
# journey('N','8th' , 'N','Times Square') #bakwards case
journey('N','Times Square' , 'L','1st') #different lines forwards







#
# #### Hints:
# * Work out how you would do it on paper first! Then start to explain that process in Ruby.
# * Get the program to work for a single line before trying to tackle multiple lines.
# * Don't worry about prompting the user for input. Hard code some values to get it working. You can use ```gets``` later to make it more interactive.
# * Consider diagramming the lines by sketching out the subway lines and their stops and intersection.
# * The key to the lab is finding the index positions of each stop. (hint: ```index```)
# * Make sure the stops that are the same for different lines have different names (i.e. 23rd on the N and on the 6 need to be differentiated)
