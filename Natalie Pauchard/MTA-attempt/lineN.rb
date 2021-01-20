$lineN = ["time square", "34th", "28th", "23rd", "union square", "8th"]

# $train_lines[:N].index("Times Square") = 0
# $train_lines[:N].index("34th") = 1
# $train_lines[:N].index("28th") = 2
# $train_lines[:N].index("23rd") = 3
# $train_lines[:N].index("Union Square") = 4
# $train_lines[:N].index("8th") = 5


def plan_trip (first_s, last_s)
  stations = []
  beginning = $lineN.index(first_s.to_s)
  ending = $lineN.index(last_s.to_s)
  this_many = beginning + ending
  stations = $lineN[beginning, this_many]
  return stations
end

puts "What stop will you get on at?"
first_station = gets.chomp.downcase

puts "What stop will you get off at?"
last_station = gets.chomp.downcase

result = plan_trip(first_station, last_station)
result.each do |station|
  puts station
end
