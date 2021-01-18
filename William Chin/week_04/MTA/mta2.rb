# There are 3 subway lines:
# The N line has the following stops: Times Square, 34th, 28th, 23rd, Union Square, and 8th
# The L line has the following stops: 8th, 6th, Union Square, 3rd, and 1st
# The 6 line has the following stops: Grand Central, 33rd, 28th, 23rd, Union Square, and Astor Place.
# All 3 subway lines intersect at Union Square, but there are no other intersection points. (For example, this means the 28th stop on the N line is different than the 28th street stop on the 6 line, so you'll have to differentiate this when you name your stops in the arrays.)
# Tell the user the number of stops AND the stops IN ORDER that they will pass through or change at.


# 3 subway lines

line = {
  "N" => ["Times Square", "34th", "28thN", "23rdN", "Union Square", "8thN"],
  "L" => ["8thL", "6th", "Union Square", "3rd", "1st"],
  "6" => ["Grand Central", "33rd", "28th6", "23rd6", "Union Square", "Astorce"]
}



  print "The starting line"
  startline = gets.chomp
  puts "What stop are you getting onto?"
  startstop = gets.chomp
  puts "THe stopping line"
  stopline = gets.chomp
  puts "what stop are you getting off?"
endstop = gets.chomp



  index1 = line[startline].index(startstop) #finding the index positions of each stop
  index2 = line[stopline].index(endstop) #finding the index positions of each stop
  uindex1 = line[startline].index("Union Square") #intersect at Union Square
  uindex2 = line[stopline].index("Union Square") #intersect at Union Square

  if startline == stopline
    totalstops = (index2 - index1).abs
    
 #absolute number so only positive numbers



  puts "You must travel through the following stops start on the #{startstop}: to #{endstop}. #{totalstops} stops in total."
else
  totalstops = (uindex1 - index1).abs+(uindex2 - index2).abs #stop old line at Union Square and start new line at Union Square
puts "You must travel through the following stops start on the #{startstop}."
puts "Change at the stop Union Square"
puts "Your journey end at #{endstop}. #{totalstops} stops in total. "
end

 



