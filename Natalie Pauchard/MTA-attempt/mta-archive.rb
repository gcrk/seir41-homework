$train_lines = {
  "lineN" => ["Times Square", "34th", "28th", "23rd", "Union Square", "8th"],
  "lineL" => ["8th", "6th", "Union Square", "3rd", "1st"],
  "line6" => ["Grand Central", "33rd", "28th", "23rd", "Union Square", "Astor Place"]
}

# $train_lines[:N].index("Times Square") = 0
# $train_lines[:N].index("34th") = 1
# $train_lines[:N].index("28th") = 2
# $train_lines[:N].index("23rd") = 3
# $train_lines[:N].index("Union Square") = 4
# $train_lines[:N].index("8th") = 5
#  remember [-1] will get end stuff

def plan_trip (first_l, first_s, last_l, last_s)
# Get the program to work for a single line:
# Different way to do global use $
  stations = [ ]
  start = $train_lines[first_l.to_s].index(first_s.to_s)
  finish = $train_lines[last_l.to_s].index(last_s.to_s)

#   2.7.2 :012 > $train_lines.values
#  => [["Times Square", "34th", "28th", "23rd", "Union Square", "8th"], ["8th", "6th", "Union Square", "3rd", "1st"], ["Grand Central", "33rd", "28th", "23rd", "Union Square", "Astor Place"]]
# 2.7.2 :013 > $train_lines.keys
#  => ["lineN", "lineL", "line6"]

  if start < finish
    stations = $lineN[start..finish]
  elsif
    stations = $lineN[finish..start].reverse
  end

  return stations

end

print "What train line are you at? (input options)"
first_line = gets.chomp
print "What station are you at? "
first_station = gets.chomp

print "What train line are you heading to? "
last_line = gets.chomp
print "What station are you heading to? "
last_station = gets.chomp

result = plan_trip(first_line, first_station, last_line, last_station)

# $train_lines[stations].each do |station|
#   puts station
# end


#  stations.take # takes the number of elements up to that index
#  stations.drop # doprs the number of elements up to that index
#  stations =[0..5].to_a // makes and array [with numbers]
#  stations << "value" << "value2" << "value3" etc adds values to the array station
# you can add two arrays together [1, 2, 3] + [4, 5, 6] creates [1, 2, 3, 4, 5, 6]
# can remove an element [1, 2, 3, 4, 5] - [4] creates [1, 2, 3, 5]
# stations.insert 1, "union square" will create an element "union square" at index 1 of the array stations
# stations.pop removes last element
#  stations.unshift "union square" would add an element to the first index of the stations arrays
#  stations.shift would remove first element of the array stations
#  stations.each do |station|
# puts station
# end - iterates through each array within station
# stations.unshift stations.pop - takes the last element of the stations array and puts it at the beginning
# use .flatten to change arrays within arrays to one long array


# if index <= index of Union Square
# else etc...

# seperate into different trips trip1 = [], trip2 = []
## if index <= index of Union Square
#use .drop to work out union square index in trip2

#then heaps of code to work out what to show the user
