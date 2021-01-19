require 'pry'

# Subway layout hash
subway = {
  :N => ['Times Square', '34th', '28th', '23rd', 'Union Square', '8th'],
  :L => ['8th', '6th', 'Union Square', '3rd', '1st'],
  :'6' => ['Grand Central', '33rd', '28th', '23rd', 'Union Square', 'Astor Place']
}

# Planner class to generate a new subway planner. Takes an argument of subway line layout in the form of a hash.
class Planner
  attr_reader :subway

  def initialize(subway_layout)
    @subway = subway_layout
  end

  # Public function to plan a trip
  def trip(from_line, from_station, to_line, to_station)
    @IS_SAME_LINE = from_line == to_line # bool check if the trip is on the same line
    @INTERCHANGE = 'Union Square' # interchange value for central ref point
    @TRIP_SUMMARY = Hash.new # object to store a report of the processed trip data

    # Two scenarios:
    # 1) Trip is on the same line
    # 2) Trip is on different line
    if @IS_SAME_LINE
      @TRIP_SUMMARY[:first_part] = stops(from_line.to_sym, from_station, to_station) # stores output from stops function in the first_part key of @TRIP_SUMMARY object
    else
      @TRIP_SUMMARY[:first_part] = stops(from_line.to_sym, from_station, @INTERCHANGE) # stores output from stops function in the first_part key of @TRIP_SUMMARY object
      @TRIP_SUMMARY[:second_part] = stops(to_line.to_sym, @INTERCHANGE, to_station) # stores output from stops function in the second_part key of @TRIP_SUMMARY object
    end

    print_result # Prints the result of trip
  end

  private
  # Private function to iterate through the arrays and process the data
  def stops(line, from_station, to_station)
    @INDEXA = @subway[line].index(from_station) # finds the index of from_station within the array
    @INDEXB = @subway[line].index(to_station) # finds the index of to_station within the array

    # Object to store the processed value and to be returned at the end of function.
    result = {
      :line => line,
      :stops => [],
      :total_stops => (@INDEXA - @INDEXB).abs # This will calculate the distance between point A to Point B. Math.abs will convert it to an absolute number removing negative values
    }

    # Two scenarios:
    # 1) If the starting point index is greater than the destination point index > slice the array > and reverse it so it will be in the right order
    # 2) If the starting point index is less than the destination point index (meaning: in the right order of the array) > slice the array
    result[:stops] = @INDEXA > @INDEXB ? @subway[line].slice(@INDEXB, result[:total_stops]).reverse : @subway[line].slice(@INDEXA + 1, result[:total_stops])
    result # Return result variable
  end

  # Private function to print out to console
  def print_result
    total_stops = @TRIP_SUMMARY[:first_part][:total_stops]

    puts "You must travel through the following stops on the #{@TRIP_SUMMARY[:first_part][:line]} line: #{@TRIP_SUMMARY[:first_part][:stops].join(', ')}."

    unless @IS_SAME_LINE
      puts "Change at #{@INTERCHANGE}."
      puts "Your journey continues through the following stops on the #{@TRIP_SUMMARY[:second_part][:line]} line: #{@TRIP_SUMMARY[:second_part][:stops].join(', ')}."
      total_stops += @TRIP_SUMMARY[:second_part][:total_stops]
    end

    puts "#{total_stops} stops in total."
  end
end

# Function to print MTA Trip Planner header in console
def print_header
  system 'clear';
  puts '-=' * 20
  puts 'MTA - Trip Planner'.center(40)
  puts '-=' * 20
end

# Function to print the lines in console
def print_line
  puts ' - [L] Line'
  puts ' - [N] Line'
  puts ' - [6] Line'
  puts '-=' * 20
  puts ' - [Q] Exit'
  puts '-=' * 20
end

# Function to print the stations in console
def print_station(line)
  @planner.subway[line].each { |station| puts " - #{station}" }
  puts '-=' * 20
  puts ' - [Q] Exit'
  puts '-=' * 20
end

# Function to change the cases of multi word stations
def station_cases(station)
  case station
  when 'times square' then station = 'Times Square'
  when 'union square' then station = 'Union Square'
  when 'grand central' then station = 'Grand Central'
  when 'astor place' then station = 'Astor Place'
  end

  station 
end

#### Start of Program ####

@planner = Planner.new(subway) # Initialise new object from Planner class.
detect_quit = false # Quit detection to exit out of the program.

until detect_quit
  print_header
  print_line
  until detect_quit
    print 'Select your source line: '
    source_line = gets.chomp.upcase.strip.to_sym

    if source_line == :Q
      detect_quit = true
    elsif @planner.subway.keys.include?(source_line)
      break
    else
      puts 'Invalid Line! Please enter a valid Line value!'
    end
  end
  break if detect_quit

  print_header
  print_station(source_line)
  until detect_quit
    print 'Select your source station: '
    source_station = gets.chomp.downcase.strip
    source_station = station_cases(source_station)

    if source_station == 'q'
      detect_quit = true
    elsif @planner.subway[source_line].include?(source_station)
      break
    else
      puts 'Invalid Station! Please enter a valid Station value!'
    end
  end
  break if detect_quit

  print_header
  print_line
  until detect_quit
    print 'Select your destination line: '
    dest_line = gets.chomp.upcase.strip.to_sym

    if dest_line == :Q
      detect_quit = true
    elsif @planner.subway.keys.include?(dest_line)
      break
    else
      puts 'Invalid Line! Please enter a valid Line value!'
    end
  end
  break if detect_quit

  print_header
  print_station(dest_line)
  until detect_quit
    print 'Select your destination station: '
    dest_station = gets.chomp.downcase.strip
    dest_station = station_cases(dest_station)

    if dest_station == 'q'
      detect_quit = true
    elsif @planner.subway[dest_line].include?(dest_station)
      break
    else
      puts 'Invalid Station! Please enter a valid Station value!'
    end
  end
  break if detect_quit
  
  print_header
  @planner.trip(source_line, source_station, dest_line, dest_station)

  print 'Would you like to plan another trip? [Y]es / [N]o : '
  user_input = gets[0].chomp.strip.upcase
  
  until user_input == 'Y' || user_input == 'N'
    print 'Would you like to plan another trip? [Y]es / [N]o : '
    user_input = gets[0].chomp.strip.upcase
  end

  detect_quit = true if user_input == 'N'
end

puts '-=' * 20
puts 'Exited Application Successfully.'.center(40)
puts '-=' * 20
