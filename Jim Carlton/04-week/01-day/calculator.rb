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

################################################################################

def show_menu

  puts "-=" * 40 # El cheapo horizontal dividing line
  puts
  puts "Simple Calculator".center(80) # TODO: You can use .center method to make it look nice
  puts
  puts "-=" * 40 # El cheapo horizontal dividing line
  puts
  puts "Addition - [a]".center(80)
  puts "Subtraction - [s]".center(80)
  puts "Multiplication - [m]".center(80)
  puts "Division - [d]".center(80)
  puts "Exponentials - [e]".center(80)
  puts "Square roots - [r]".center(80)
  puts "BMI Calculator - [b]".center(80)
  puts "Quit - [q]".center(80)
  puts
  print "Enter your choice: "

end

show_menu
menu_choice = gets.chomp.downcase

until menu_choice == 'q'

  case menu_choice  # handle the user choice

  when "a"
    puts
    puts "What numbers do you want to add?"
    print "Number 1: "
    number1 = gets.chomp.to_f
    print "Number 2: "
    number2 = gets.chomp.to_f
    puts
    puts "Ok now the magic..."
    puts
    puts "The sum of your two numbers is #{number1 + number2}"
    puts

  when "s"
    puts
    puts "What numbers do you want to subtract from each other?"
    print "Number 1: "
    number1 = gets.chomp.to_f
    print "Number 2: "
    number2 = gets.chomp.to_f
    puts
    puts "Ok now the magic..."
    puts
    puts "#{number1} minus #{number2} of your two numbers is #{number1 - number2}"
    puts

  when "m"
    puts
    puts "What numbers do you want to multiply?"
    print "Number 1: "
    number1 = gets.chomp.to_f
    print "Number 2: "
    number2 = gets.chomp.to_f
    puts
    puts "Ok now the magic..."
    puts
    puts "#{number1} x #{number2} of your two numbers is #{number1 * number2}"
    puts

  when "d"
    puts
    puts "What numbers do you want to divide?"
    print "Number 1: "
    number1 = gets.chomp.to_f
    print "Number 2: "
    number2 = gets.chomp.to_f
    puts
    puts "Ok now the magic..."
    puts
    puts "#{number1} ÷ #{number2} of your two numbers is #{number1 / number2}"
    puts

  when "e"
    puts
    puts "What number would you like to find of? (Number 2 will be the exponent of Number 1)"
    print "Number 1: "
    number1 = gets.chomp.to_f
    print "Number 2: "
    number2 = gets.chomp.to_f
    puts
    puts "Ok now the magic..."
    puts
    puts "#{number1}^#{number2} of your two numbers is #{number1 ** number2}"
    puts

  when "s"
    puts
    puts "What number would you like to find of? (Number 2 will be the exponent of Number 1)"
    print "Number 1: "
    number1 = gets.chomp.to_f
    print "Number 2: "
    number2 = gets.chomp.to_f
    puts
    puts "Ok now the magic..."
    puts
    puts "#{number1} ^ #{number2} is #{number1 ** number2}"
    puts

  when "r"
    puts
    puts "What number would you like to square root?"
    print "Number to square root: "
    number1 = gets.chomp.to_f
    number_result = Math.sqrt(number1)
    puts
    puts "Ok now the magic..."
    puts
    puts "√#{number1} is #{number_result}"
    puts

  when "b"
    puts
    puts "Wanna know your Body Mass Index?"
    print "First up, what's your height in cm? "
    height = (gets.chomp.to_f) * 0.01
    print "And your weight in kg? "
    weight = gets.chomp.to_f
    bmi = weight / (height ** 2)
    puts
    puts "Okie doki, now for the magic..."
    puts
    puts "Your BMI is #{bmi.round(2)}"
    puts

  else
    puts
    puts "Invalid selection mate!"
    puts
  end

  show_menu # show_menu again
  menu_choice = gets.chomp.downcase # get a new menu_choice

end

puts "Thanks for using this simple calculator!"
