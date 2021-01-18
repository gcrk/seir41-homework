# # Calculator
#
# ### Explanation
# - You will be building a calculator.  A calculator can perform multiple arithmetic operations.  Your function should allow the user to choose which operation is expected, enter in the values to perform the operation on, and ultimately view the result.
#
# ### Specification:
# - A user should be given a menu of operations
# - A user should be able to choose from the menu
# - A user should be able to enter numbers to perform the operation on
# - A user should be shown the result
# - This process should continue until the user selects a quit option from the menu
#
# #### Phase 1
# - Calculator functionality
# - Calculator should be able to do basic arithmetic (+,-, *, /)
#
# #### Phase 2
# - Advanced Calculator functionality
# - Calculator should be able to do basic arithmetic (exponents, square roots)
#
#
#
# # Bonus
# ## Mortgage Calculator
# Calculate the monthly required payment given the other variables as input (look up the necessary variables)
#
# ## BMI Calculator
# Calculate the body mass index (BMI) for an individual, given their height and weight
#
# ## Trip Calculator
# Calculate a trip time and cost given inputs for
# - distance
# - miles per gallon
# - price per gallon
# - speed in miles per hour


def show_menu
  puts "Calculator".center(50)
  puts "-=" * 25
  puts "[a] - Addition"
  puts "[s] - Subtraction"
  puts "[m] - Multiplication"
  puts "[d] - Division"
  puts "[e] - Exponentiation"
  puts "[r] - Square root"
  puts "[q] - Quit"
  print "Enter your choice: "
end

show_menu
menu_choice = gets[0].downcase

until menu_choice == "q"
  case menu_choice
  when "a"
    puts "Addition"
    print "Type the first number you'd like to use: "
    a = gets.to_i
    print "Type the second number you'd like to use: "
    b = gets.to_i
    puts "#{a} + #{b} = #{a + b}"
  when "s"
    puts "Subtraction"
    print "Type the first number you'd like to use: "
    a = gets.to_i
    print "Type the second number you'd like to use: "
    b = gets.to_i
    puts "#{a} - #{b} = #{a - b}"
  when "m"
    puts "Multiplication"
    print "Type the first number you'd like to use: "
    a = gets.to_i
    print "Type the second number you'd like to use: "
    b = gets.to_i
    puts "#{a} * #{b} = #{a * b}"
  when "d"
    puts "Division"
    print "Type the first number you'd like to use: "
    a = gets.to_f
    print "Type the second number you'd like to use: "
    b = gets.to_f
    puts "#{a} / #{b} = #{a / b}"
  when "e"
    puts "Exponentiation"
    print "Type the number you'd like to use: "
    a = gets.to_i
    print "Type the exponent you'd like to use: "
    b = gets.to_i
    puts "#{a} to the power of #{b} = #{a ** b}"
  when "r"
    puts "Square root"
    print "Type the number you'd like to use: "
    a = gets.to_i
    puts "The square root of #{a} = #{Math.sqrt(a)}"
  else
    puts "That's not an option"
  end

  show_menu
  menu_choice = gets[0].downcase

end
