
train_lines_hash =  {
  "N" => ["Times Square", "34th", "28th", "23rd", "Union Square", "8th"],
  "L" => ["8th", "6th", "Union Square", "3rd", "1st"],
  "6" => ["Grand Central", "33rd", "28th", "23rd", "Union Square", "Astor Place"]
}

print "What will be the first line? "
starting_line = gets().chomp()

print "Where are you starting from? "
starting_point = gets().chomp()

print "What will be the second line? "
second_line = gets().chomp()

print "Where are you going? "
final_point = gets().chomp()

starting_point_index = train_lines_hash[starting_line].index starting_point
union_square_first_line_index = train_lines_hash[starting_line].index "Union Square"

final_point_index = train_lines_hash[second_line].index final_point
union_square_second_line_index = train_lines_hash[second_line].index "Union Square"

# p train_lines_hash[starting_line]
# p starting_point
# p starting_line
# p starting_point_index
# p union_square_first_line_index
# p final_point_index
# p union_square_second_line_index


if starting_point_index < union_square_first_line_index
    trip_on_first_line = train_lines_hash[starting_line][starting_point_index..union_square_first_line_index]

    if final_point_index > union_square_second_line_index
        trip_on_second_line = train_lines_hash[second_line][union_square_second_line_index..final_point_index]

    elsif final_point_index < union_square_second_line_index
        trip_on_second_line = train_lines_hash[second_line][final_point_index..union_square_second_line_index]
        trip_on_second_line.reverse!
    else trip_on_second_line = ["Nothing, you are lucky!"]
    end


elsif starting_point_index > union_square_first_line_index
    trip_on_first_line = train_lines_hash[starting_line][union_square_first_line_index..starting_point_index]
    trip_on_first_line.reverse!

    if final_point_index > union_square_second_line_index
        trip_on_second_line = train_lines_hash[second_line][union_square_second_line_index..final_point_index]

    elsif final_point_index < union_square_second_line_index
        trip_on_second_line = train_lines_hash[second_line][final_point_index..union_square_second_line_index]
        trip_on_second_line.reverse!
    else trip_on_second_line = ["Nothing, you are lucky!"]
    end

else

    if final_point_index > union_square_second_line_index
        trip_on_first_line = ["Go straight to the second line !!"]
        trip_on_second_line = train_lines_hash[second_line][union_square_second_line_index..final_point_index]

    elsif final_point_index < union_square_second_line_index
        trip_on_first_line = ["Go straight to the second line !!"]
        trip_on_second_line = train_lines_hash[second_line][final_point_index..union_square_second_line_index]
        trip_on_second_line.reverse!

    else trip_on_first_line = ["Guess what??"]
         trip_on_second_line = ["You don't need to take the train, you are already in Union Square my friend!!"]
    end


end


if starting_point == "Union Square" && final_point == "Union Square"
  puts trip_on_first_line
  puts trip_on_second_line

elsif starting_point == "Union Square"
  puts "Go straight to the #{second_line} !!"
  puts "You won't have to change train, only #{trip_on_second_line.length} stops on #{second_line}: #{trip_on_second_line}."
  puts "Total number of stops: #{trip_on_second_line.length}."

elsif final_point == "Union Square"
  puts "You are lucky"
  puts "You won't have to change train, only #{trip_on_first_line.length} stops on #{starting_line}: #{trip_on_first_line}."
  puts "Total number of stops: #{trip_on_first_line.length}."

else
  puts "You will start on #{starting_line} with the following #{trip_on_first_line.length} stops: #{trip_on_first_line}."
  puts "You will follow on #{second_line} with the following #{trip_on_second_line.length} stops: #{trip_on_second_line}."
  puts "It is a long trip, good luck."
  puts "Total number of stops: #{trip_on_second_line.length + trip_on_first_line.length}."
end






# def plan_trip (N, Times Square, 6, 33rd)
#   return (1+rate/12)**(12/12)-1
# end
#
# def annuity (i, time)
#   return (1-(1/(1+i))**time)/i
# end
#
# def principal (loan, time, rate)
#     i = returnsI(rate)
#     annuity = annuity(i, time)
#     return (loan/annuity)
# end
#
# show_menu
# menu_choice = gets.chomp.downcase
#
# until menu_choice == 'q'
#   case menu_choice
#   when 'm'
#     print "enter loan amount: "
#     l= gets.chomp.to_i
#     print "Enter length of time in months: "
#     t = gets.chomp.to_i
#     print "Enter interest rate: "
#     r= gets.chomp.to_f/100
#
#     principal = principal(l,t,r)
#
# puts "\n$%.2f per month" % [principal]
#
#
#   else
#     puts 'Invalid selection. Please choose the correct option.'
#   end
#
#   show_menu
#   menu_choice = gets.chomp.downcase
# end
#
# puts "Thanks for using my first mortgage calculator!"

# print "enter loan amount: "
# loan = gets.chomp.to_i
# print "Enter length of time in months: "
# time = gets.chomp.to_i
# print "Enter interest rate: "
# rate = gets.chomp.to_f/100
#
# i = (1+rate/12)**(12/12)-1
# annuity = (1-(1/(1+i))**time)/i
#
# payment = loan/annuity
#
# puts "\n$%.2f per month" % [payment]


# returnsI (rate)
# return (1+rate/12)**(12/12)-1
#
# annuity(i, time)
# return (1-(1/(1+i))**time)/i
#
# payment(loan, annuity)
