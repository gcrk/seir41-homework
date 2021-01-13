line_n = ['Times Square', '34th', '28th', '23rd', 'Union Square', '8th']
line_l = ['8th', '6th', 'Union Square', '3rd', '4th']
line_6 = ['Grand Central', '33rd', '28th', '23rd', 'Union Square', 'Astor Place']

# def show_menu
#   puts "Trip Viewer"
#   puts "-=" * 40  # El cheapo horizontal dividing line
#   puts "[n] - Line N"
#   puts "[l] - Line L"
#   puts "[6] - Line 6"
#   puts "[q] - Quit"
#   print "Enter your starting train line: "
# end
#
# show_menu
# starting_line = gets.chomp
#
# puts "-=" * 40  # El cheapo horizontal dividing line
#
# puts line_n if starting_line == 'n'
# puts line_l if starting_line == 'l'
# puts line_6 if starting_line == '6'
#
# print "Enter your starting stop from the ones listed above: "
# starting_stop = gets.chomp.downcase
#
#
# puts "-=" * 40  # El cheapo horizontal dividing line
#
# def show_menu2
#   puts "[n] - Line N"
#   puts "[l] - Line L"
#   puts "[6] - Line 6"
#   puts "[q] - Quit"
#   print "Enter your destination line: "
# end
#
# show_menu2
# destination_line = gets.chomp
#
#
# puts "-=" * 40  # El cheapo horizontal dividing line
#
# puts line_n if destination_line == 'n'
# puts line_l if destination_line == 'l'
# puts line_6 if destination_line == '6'
#
# print "Enter your stopping destination from the stops listed above: "
# destination_stop = gets.chomp.downcase

stop_sequence = []

starting_stop = 0
destination_stop = -5

starting_line = line_l
destination_line = line_n

middle_point1 = starting_line.index("Union Square")
middle_point2 = destination_line.index("Union Square") - destination_line.length

starting_line[starting_stop..middle_point1].each do |stop|
  puts stop
end

destination_line.reverse[destination_stop..middle_point2].each do |stop|
  puts stop
end


  # starting_line[starting_stop..destination_stop].each do |stop|
  #   puts stop
  # end
  #
  # if starting_line != destination_line
  #   starting_line[starting_stop..index("Union Square")].each do |stop|
  #     puts stop
  #   end

############################# user's input can be a stop number and then input into range and index IT WORKS


#  line_n.each do |s|
#    puts s
#  end

  #indexof trainline stops
  #function iterating and putting out each stop
  #using range of indexes
