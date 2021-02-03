# # MTA Lab

$lines = {
  'N' => ['Times Square', '34th', '28th', '23rd', 'Union Square', '8th'],

  'L' => ['8th', '6th', 'Union Square', '3rd', '1st'],

  '6' => ['Grand Central', '33rd', '28th', '23rd', 'Union Square', 'Astor Place'],
}

# p $lines['N'][0]

def plan_trip (l1, s1, l2, s2)
  # Count total stops and call functions
  total_stops = first_trip(l1, s1).size + second_trip(l2, s2).size
  puts ">>> #{total_stops} stops in total."
  # puts "<3 Thanks for using our trip planner! <3"
  print "=-" * 10, " Thanks for using our trip planner! "
  puts "=-" * 10

end

## First part of the trip to Union Square
def first_trip(l1, s1)
  ## find index of stop s1 on line l1
  index_s1 = $lines[l1].index(s1)
  ## find index of Union Square Staion on line l1
  index_of_USquare = $lines[l1].index('Union Square')

  trip1 = []

  if index_s1 <= index_of_USquare
    trip1 = $lines[l1][index_s1..index_of_USquare]
  else
    trip1 = $lines[l1][index_of_USquare..index_s1].reverse
  end

  puts ">>> You must travel through the following stops on the #{l1} line: #{trip1.join(', ')}."
  puts ">>> Change at Union Square."

  trip1
end


## Second part of the trip from Union Square
def second_trip(l2, s2)
  ## find index of stop s2 on line l2
  index_s2 = $lines[l2].index(s2)
  ## find index of Union Square Staion on line l2
  index_of_USquare = $lines[l2].index('Union Square')

  trip2 = []

  if index_s2 > index_of_USquare
    trip2 = $lines[l2][index_of_USquare..index_s2].drop(1) # drop(1) to exclude Union Square station from the list
  else
    trip2 = $lines[l2][index_s2..index_of_USquare].reverse.drop(1) # drop(1) to exclude Union Square station from the list
  end


  puts ">>> Your journey continues through the following stops on the #{l2} line: #{trip2.join(', ')}."

  trip2
end

## show menu function
def show_menu
  print "Press (enter) to continue with Ruby Trip Planner OR [q] to quit: "
end


##################### USER INPUT #####################

puts "//\\" * 24
puts "WELCOME TO RUBY TRIP PLANNER!".center(70)
puts "=-" * 35

show_menu
user_choice = gets[0].downcase

until user_choice == 'q'
  ########## ASK FOR USER INPUT: LINE 1
  print "Which line you are traveling from (#{$lines.keys.join('/')}): " #suggestion for users
  l1 = gets[0].upcase   #take one letter and upcase

  # Foolproof: Check the valid name
  until $lines.include? l1    #check if the name is included in the list
    print "! Invalid name. Please re-enter: "
    l1 = gets[0].upcase
  end

  puts "> You are on the #{l1} line."

  ########## ASK FOR USER INPUT: STOP 1
  print "Which stop on #{l1} line you are traveling from (#{$lines[l1].join('/')}): "
  s1 = gets.split.map(&:capitalize).join(' ') ## TOASK: Does chomp matter?

  # Foolproof: Check the valid name
  until $lines[l1].include? s1
    print "! Invalid name. Please re-enter: "
    s1 = gets.split.map(&:capitalize).join(' ')
  end

  puts "> You are at #{s1} station on the #{l1} line."

  ########## ASK FOR USER INPUT: LINE 2
  print "Which line you are traveling to (#{$lines.keys.join('/')}): "
  l2 = gets[0].upcase

  until $lines.include? l2
    print "! Invalid name. Please re-enter: "
    l2 = gets[0].upcase
  end

  puts "> You want to travel to the #{l2} line."

  ########## ASK FOR USER INPUT: STOP 2

  print "Which stop on #{l2} line you are traveling to (#{$lines[l2].join('/')}): "
  s2 = gets.split.map(&:capitalize).join(' ') ## TOASK: Does chomp matter?

  until $lines[l2].include? s2
    print "! Invalid name. Please re-enter: "
    s2 = gets.split.map(&:capitalize).join(' ')
  end

  puts "> You want to travel to #{s2} station on the #{l2} line."
  puts ("=-" * 20).center(70)

  plan_trip(l1, s1, l2, s2)

  show_menu
  user_choice = gets[0].downcase
end

puts "See you next time!"
