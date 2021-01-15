

# $subway lines {
#   "N" => ["Times Square", "34th", "28th", "23rd", "Union Square", "8th",],
#   "L" => ["8th", "6th", "Union Square", "3rd", "1st"],
#   "six" => ["Grand Central", "33rd", "28th", "23rd", "Union Square", "Astorce"]
# }
#
# // "You must travel through the following stops on the X line: stop1, stop2, stop3, stop4."
#
#
# puts "Plan Trip"
# print "Start Line"
# print "Start Stop"
# print "End Line"
# print "End Stop"


puts "Hello. Please see the lines and stops available:"
puts "N line:" + nline.to_s
puts "L line:" + lline.to_s
puts "6 line:" + sixline.to_s

puts "What line will you take? (N) N line, (L) L line, or (6) 6 Line"
	online = gets.chomp.downcase
	if online = 6 then online == "six"
puts "What stop will you get on at?"
	onstop = gets.chomp.downcase
puts "What line will you get off from? (N) N line, (L) L line, or (6) 6 Line"
	offline = gets.chomp.downcase
puts "What stop will you get off at?"
	offstop = gets.chomp.downcase

# Exit on same line?
if online == offline then sameline

puts sameline

end
