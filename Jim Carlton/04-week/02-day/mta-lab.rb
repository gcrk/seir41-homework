# Main plan_trip function

def plan_trip(cur_line, cur_stop, dest_line, dest_stop)

# Setup of the lines and stop arrays

  $train_lines = ["N", "L", "6"]

  $train_line_stops = [
    ["Times Square", "34th", "28th", "23rd", "Union Square", "8th"],
    ["8th", "6th", "Union Square", "3rd", "1st"],
    ["Grand Central", "33rd", "28th", "23rd", "Union Square", "Astor Place"]
  ]

# Distance function for a single line (despite if user journey is on 1 line only or more) - REFACTOR THIS, THE ONLY REASON FOR THE IF STATEMENT IS TO PRODUCE A POSITIVE VALUE DEPENDING ON THE DIRECTION THE USER IS TRAVELLING. ALL THAT NEEDS DOING IS A (pt1 - pt2).abs which is an absolute value which makes it positive.

  def dist_single_line(pt1, pt2)

    dist = ""

    if pt1 > pt2
      dist = (pt1 + 1) - (pt2 + 1)
    else
      dist = (pt2 + 1) - (pt1 + 1)
    end

  end

# Establish variables used in function

  $cur_line_array_num = $train_lines.index(cur_line)
  $dest_line_array_num = $train_lines.index(dest_line)

  $change_stop_cur_line = $train_line_stops[$cur_line_array_num].index("Union Square")
  $change_stop_dest_line = $train_line_stops[$dest_line_array_num].index("Union Square")

  $user_locale_array_num = $train_line_stops[$cur_line_array_num].index(cur_stop)
  $dest_locale_array_num = $train_line_stops[$dest_line_array_num].index(dest_stop)

  $dist_total = ""

# Function to determine stops for user to stop at

# REFACTOR THIS AS IT'S NOT WORKING CURRENTLY - THE CONDITIONALS DON'T WORK AND I THINK THERE'S A MUCH CLEANER WAY OF WRITING IT

  def stops_list_cur(get_on, get_off)

    if get_on > get_off && get_on == ($train_line_stops[$cur_line_array_num].size - 1)
      $train_line_stops[$cur_line_array_num].slice(get_off..get_on).reverse().join(", ")
    elsif get_off > get_on && get_off == ($train_line_stops[$cur_line_array_num].size - 1)
      $train_line_stops[$cur_line_array_num].slice(get_on..get_off).reverse().join(", ")
    elsif get_on > get_off
      $train_line_stops[$cur_line_array_num].slice(get_off..get_on).reverse().join(", ")
    else
      $train_line_stops[$cur_line_array_num].slice((get_on + 1)..(get_off + 1)).join(", ")
    end

  end

  def stops_list_dest(get_on, get_off)

    if get_on > get_off && get_on == ($train_line_stops[$cur_line_array_num].size - 1)
      $train_line_stops[$dest_line_array_num].slice(get_off..get_on).reverse().join(", ")
    elsif get_off > get_on && get_off == ($train_line_stops[$cur_line_array_num].size - 1)
      $train_line_stops[$dest_line_array_num].slice(get_on..get_off).reverse().join(", ")
    elsif get_on > get_off
      $train_line_stops[$dest_line_array_num].slice(get_off..get_on).reverse().join(", ")
    else
      $train_line_stops[$dest_line_array_num].slice((get_on + 1)..(get_off + 1)).join(", ") # this doesn't nothing in Ruby - refactor..
    end

  end

# Messages

  $message0 = "You are currently at the #{cur_stop} stop on the #{cur_line} line and you want to go to the #{dest_stop} stop on the #{dest_line} line."
  $message1 = "You must travel through the following stops on the #{cur_line} line: "
  $message2 = "Change at Union Square to the #{dest_line} line."
  $message3 = "Your journey continues through the following stops: "
  $message4 = " in total."

# Function to pluralise if more than 1 stop

  def stops_text_plural(total_stops)

    if total_stops == 1
      puts "stop"
    else
      puts "stops"
    end

  end

# Construct messages for user journey

  if dest_line == cur_line
    $dist_total = dist_single_line($user_locale_array_num, $dest_locale_array_num)
    puts $message0
    puts "#{$message1} #{stops_list_cur($user_locale_array_num, $dest_locale_array_num)}."
    puts "#{$dist_total} #{stops_text_plural($dist_total)} #{$message4}"
  elsif dest_line != cur_line
    $dist_total = dist_single_line($user_locale_array_num, $change_stop_cur_line) + dist_single_line($change_stop_dest_line, $dest_locale_array_num)
    puts $message0
    puts "#{$message1}#{stops_list_cur($user_locale_array_num, $change_stop_cur_line)}"
    puts $message2
    puts "#{$message3}#{stops_list_dest($change_stop_dest_line, $dest_locale_array_num)}"
    puts "#{$dist_total}#{stops_text_plural($dist_total)}#{$message4}"
  end

end

# Program

def show_walkthrough

  puts "-=" * 40 # El cheapo horizontal dividing line
  puts
  puts "MTA Labs Trip Planner".center(80) # TODO: You can use .center method to make it look nice
  puts
  puts "-=" * 40 # El cheapo horizontal dividing line
  puts
  puts "What line and station are you on?"
  print "Current station: "
  $station_c = gets.chomp.to_s
  print "Current line: "
  $line_c = gets.chomp.to_s
  puts "Now, where do you wanna go?"
  print "Destined station: "
  $station_d = gets.chomp.to_s
  print "Destined line: "
  $line_d = gets.chomp.to_s

  plan_trip($line_c, $station_c, $line_d, $station_d)

end

show_walkthrough
