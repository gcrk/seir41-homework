$lines = {
  "N" => ["Times Square", "34th", "28th", "23rd", "Union Square", "8th"],
  "L" => ["8th", "6th", "Union Square", "3rd", "1st"],
  "6" => ["Grand Central", "33rd", "28th", "23rd", "Union Square", "Astor Place"]
}

US = "Union Square"

def plan_trip line1, stop0, line2, stop2
  line1_UC = line1.upcase
  line2_UC = line2.upcase
  if check_exist line1_UC, stop0, line2_UC, stop2
    if line1_UC == line2_UC
      data = get_direction $lines[line1_UC], stop0, stop2
      "You must travel through the following stops on the #{line1_UC} line: #{data[0]}.\n#{data[1]} stops in total."
    else
      data1 = get_direction $lines[line1_UC], stop0, US
      data2 = get_direction $lines[line2_UC], US, stop2
      "You must travel through the following stops on the #{line1_UC} line: #{data1[0]}.\nChange at #{US}.\nContinue through the following stops: #{data2[0]}.\n#{data1[1] + data2[1]} stops in total."
    end
  else
    "Sorry, either your lines or your stops do not exist, or they are mixed up."
  end
end

def check_exist line1, stop0, line2, stop2
  $lines.has_key?(line1) && $lines.has_key?(line2) ? $lines[line1].include?(stop0) && $lines[line2].include?(stop2) : false
end

def get_direction line, stop0, stop2
  line.index(stop0) < line.index(stop2) ? get_stops(line, stop0, stop2) : get_stops(line.reverse, stop0, stop2)
end

def get_stops line, stop0, stop2
  stop0_index = line.index(stop0)
  stop2_index = line.index(stop2)
  stop1_index = stop0_index + 1
  num_of_stops = stop2_index - stop0_index
  stops = []
  (num_of_stops).times { |i| stops.push line[i + stop1_index] } # i always starts at 0, so  add the index of the first stop to i
  [stops.join(", "), num_of_stops]
end

puts plan_trip 'N', '23rd', 'N', 'Times Square'
puts plan_trip 'N', 'Times Square', 'N', '28th'
puts plan_trip '6', '23rd', '6', 'Grand Central'
puts plan_trip '6', '23rd', 'N', 'Times Square'
puts plan_trip '6', '23rd', 'N', 'Times S'
puts plan_trip '6', '23rd', 'n', 'Times Square'
puts plan_trip '6', '23rd', 'L', 'Times Square'
