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
#


# Function that displays the menu
def show_menu
  puts "" # Added to create a space above the menu, so it stands out more
  puts "Calculator".center(70)
  puts "-=" * 40 # El cheapo horizontal dividing line
  puts "[a] - Addition"
  puts "[s] - Subtraction"
  puts "[m] - Multiplication"
  puts "[d] - Division"
  puts "[e] - Exponentials"
  puts "[r] - Square root"
  puts "[mo] - Mortgage Calculator"
  puts "[b] - BMI Calculator"
  puts "[t] - Trip Calculator"
  # TODO: Add other options here
  puts "[q] - Quit"
  puts "" # Added to create a space above the input, so it stands out more
  print "Enter your choice: "
end

# Addition function
def addition
  puts "You chose addition" # TODO: Improve it to work with more than two inputs
  print "Enter your first number: "
  num1 = gets.to_f
  print "Enter your second number: "
  num2 = gets.to_f
  puts "" # Added to create a space above the result, so it stands out more
  puts "Your result is: #{ num1 + num2 }"
end

# Subtraction function
def subtraction
  puts "You chose subtraction"
  print "Enter your first number: "
  num1 = gets.to_f
  print "Enter your second number: "
  num2 = gets.to_f
  puts "" # Added to create a space above the result, so it stands out more
  puts "Your result is: #{ num1 - num2 }"
end

# Multiplication function
def multiplication
  puts "You chose multiplication" # TODO: Improve it to work with more than two inputs
  print "Enter your first number: "
  num1 = gets.to_f
  print "Enter your second number: "
  num2 = gets.to_f
  puts "" # Added to create a space above the result, so it stands out more
  puts "Your result is: #{ num1 * num2 }"
end

# Division function
def division
  puts "You chose division"
  print "Enter your first number: "
  num1 = gets.to_f
  print "Enter your second number: "
  num2 = gets.to_f
  puts "" # Added to create a space above the result, so it stands out more
  puts "Your result is: #{ (num1 / num2).round(2) }"
end

# Exponential function
def exponential
  puts "You chose exponentials"
  print "Enter your base: "
  num1 = gets.to_f
  print "Enter your indice: "
  num2 = gets.to_f
  puts "" # Added to create a space above the result, so it stands out more
  puts "Your result is: #{ num1 ** num2 }"
end

# Square root function
def square_root
  puts "You chose square root" # TODO: Improve it to work with roots other than 2
  print "Enter a number: "
  num1 = gets.to_f
  puts "" # Added to create a space above the result, so it stands out more
  puts "Your result is: #{ (Math.sqrt(num1)).round(2) }"
end

# Monthly mortgage function
def mortgage
  puts "You chose monthly mortgage"
  print "Enter the principal (total amount owed): "
  prin = gets.to_f
  print "Enter the annual interest rate (as a percentage): "
  interest = gets.to_f / (12 * 100) # Divides the annual interest rate by 12 to get the monthly interest rate and by 100 to convert a percetage to a decimal
  print "Enter the time required to pay off the loan (in years): "
  num_months = gets.to_f * 12 # The formula requires the number of months, so the * 12 converts years to months
  puts ""  # Added to create a space above the result, so it stands out more
  # Formula used to calculate monthly mortgage can be found here https://www.businessinsider.com/personal-finance/how-to-calculate-mortgage-payment?r=AU&IR=T
  numerator = prin * (interest * ((interest + 1) ** num_months))
  puts numerator
  denominator = (((interest + 1) ** num_months) - 1)
  puts denominator
  mortgage = numerator / denominator
  puts "Your monthly mortgage is: #{ mortgage.round(2) }"
end

# BMI function
def find_bmi
  puts "You chose bmi calculator"
  print "Enter your height (in cm): "
  height = gets.to_f / 100 # Converts the height in cm to metres
  print "Enter your weight (in kg): "
  weight = gets.to_f
  bmi = weight / (height ** 2)
  puts "" # Added to create a space above the result, so it stands out more
  puts "Your bmi is: #{ bmi.round(2) }"
end

# Trip Calculator function
def trip_info
  puts "You chose trip calculator"
  print "Enter the trip distance (in miles): "
  distance = gets.to_f
  print "Enter the speed (in miles per hours): "
  speed = gets.to_f
  puts "" # Added to create a space above the result, so it stands out more
  puts "Your trip time is #{ distance / speed } hours."
  puts "" # Added to create a space below the result, so it stands out more
  print "Enter the miles you can travel on a gallon of fuel: "
  miles_per_gallon = gets.to_f
  print "Enter the price of a gallon of fuel in dollars: "
  price = gets.to_f
  cost = distance / miles_per_gallon * price
  puts "" # Added to create a space above the result, so it stands out more
  puts "Your trip cost is $#{ cost.round(2) }"
end

# Show the menu and collect the user's choice
show_menu
menu_choice = gets.chomp.downcase

# Loop until the user choses to quit
until menu_choice == 'q'

  case menu_choice
  when "a"
    addition
  when "s"
    subtraction
  when "m"
    multiplication
  when "d"
    division
  when "e"
    exponential
  when "r"
    square_root
  when "mo"
    mortgage
  when "b"
    find_bmi
  when "t"
    trip_info
  else
    puts "" # Added to create a space above the message, so it stands out more
    puts "Invalid selection. You idiot."
  end

  show_menu
  menu_choice = gets.chomp.downcase
end

puts "" # Added to create a space above the message, so it stands out more
puts "Thanks for using this crappy calculator!"
