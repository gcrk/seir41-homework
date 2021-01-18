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

$lines = {
'N' => ['Times Square', '34th', '28th', '23rd', 'Union Square', '8th'],
'L' => ['8th', '6th', 'Union Square', '3rd', '1st'],
'6' => ['Grand Central', '33rd', '28th', '23rd', 'Union Square', 'Astor Place']
}

puts 'Plan Trip'
puts '-=' *40
print 'The starting line:'
sline = gets.chomp
print 'The starting stop:'
sstop = gets.chomp
print 'The destionation line:'
dline = gets.chomp
print 'The destionation stop:'
dstop = gets.chomp

index1 = $lines[sline].index(sstop)
index2 = $lines[dline].index(dstop)
indexU1 = $lines[sline].index('Union Square')
indexU2 = $lines[dline].index('Union Square')

def sameLine (num1, num2, line)
  stops = ''
  if num1 < num2
    stops = $lines[line][(num1+1)..num2].join(', ')
  else
    stops = $lines[line][num2..(num1-1)].reverse.join(', ')
  end
end

if sline == dline
  stop_num = (index1 - index2).abs
  stops = sameLine(index1, index2, sline)
  puts "You must travel through the following stops on the #{sline} line: #{stops}."
  puts "#{stop_num} stops in total."
else
  stop_num = (index1 - indexU1).abs + (index2 - indexU2).abs
  stops1 = sameLine(index1, indexU1, sline)
  stops2 = sameLine(indexU2, index2, dline)
  puts "You must travel through the following stops on the #{sline} line: #{stops1}."
  puts 'Change at Union Square.'
  puts "Your journey continues through the following stops on the #{dline} line: #{stops2}."
  puts "#{stop_num} stops in total."
end

#add quite and return(enter) functions, also notification of error input.

# #### Hints:
# * Work out how you would do it on paper first! Then start to explain that process in Ruby.
# * Get the program to work for a single line before trying to tackle multiple lines.
# * Don't worry about prompting the user for input. Hard code some values to get it working. You can use ```gets``` later to make it more interactive.
# * Consider diagramming the lines by sketching out the subway lines and their stops and intersection.
# * The key to the lab is finding the index positions of each stop. (hint: ```index```)
# * Make sure the stops that are the same for different lines have different names (i.e. 23rd on the N and on the 6 need to be differentiated)
