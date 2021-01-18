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
  puts "Calculator" # TODO: You can use .center to make it look nice.
  puts "-=" * 40 # horizontal dividing line
  puts "[a] - Addition"
  puts "[s] - Subtraction"
  puts "[m] - Multiplication"
  puts "[d] - Division"
  puts "[**] - Exponentiation"
  puts "[sqrt] - Square Root"
  puts "[morgage] - Morgage"
  puts "[bmi] - BMI"
  puts "[trip] - Trip Calculator"
  puts "[q] - Quit"
  print "Enter your choice: "
end

show_menu
menu_choice = gets.chomp.downcase

until menu_choice == 'q'
  case menu_choice


  #phase one

  #Addition
  when 'a'
    puts 'You chose addition!'    # TODO: Actually do the addition
   #Get the user inputsq

    print "What is the first number?: "
    first_number = gets.to_f
    print "What is the second number?: "
    second_number = gets.to_f

   #do the calculation
    output = first_number + second_number

    puts "The sum of #{first_number} & #{second_number} is: #{output}"



 #Subtraction
  when 's'
    puts 'You chose subtraction!'    # TODO: Actually do the addition
    #Get the user inputsq
    print "What is the number to subtract from?: "
    first_number = gets.to_f

    print "What is the number to subtract?: "
    second_number = gets.to_f

    #do the calculation
    output = first_number - second_number

    puts "The subtraction of #{second_number} from #{first_number} is: #{output}"




  #Multiplication
  when 'm'
    puts 'You chose multiplication!'    # TODO: Actually do the addition
    #Get the user inputsq
    print "What is the first number?: "
    first_number = gets.to_f

    print "What is the second_number?: "
    second_number = gets.to_f

    #do the calculation
    output = first_number * second_number

    puts "The multiplication of #{first_number} by #{second_number} is: #{output}"



  #Division
  when 'd'
    puts 'You chose division!'    # TODO: Actually do the addition
    #Get the user inputsq
    print "What is the number to by divided?: "
    first_number = gets.to_f

    print "What is the number to divid by?: "
    second_number = gets.to_f

    #do the calculation
    output = first_number / second_number

    puts "The division of #{first_number} by #{second_number} is: #{output}"





#phase two
#exponentiation
when '**'
  puts 'You chose exponentiation!'    # TODO: Actually do the addition
  #Get the user inputsq
  print "What is the base number?: "
  first_number = gets.to_f

  print "What is the power number?: "
  second_number = gets.to_f

  #do the calculation
  output = first_number**second_number

  puts "The exponent of #{first_number} by #{second_number} is: #{output}"


#square roots
when 'sqrt'
  puts 'You chose square root!'    # TODO: Actually do the addition
  #Get the user inputsq
  print "What is the number?: "
  first_number = gets.to_f

  # print "What is the power number?: "
  # second_number = gets.to_i

  #do the calculation
  output = Math.sqrt(first_number)

  puts "The square root of #{first_number} is: #{output}"


#Bonus
# Mortgage calculator
when 'morgage'
  puts 'You chose morgage!'    # TODO: Actually do the addition
  #Get the user inputs

  print "loan amount(P)?: "
  p = gets.to_f
  print "annual interest rate(r)?: "
  r = gets.to_f
  print "number of years(t)/the term?: "
  t = gets.to_f
  print "number of payments per year(n)?: "
  n = gets.to_f

  # print "What is the power number?: "
  # second_number = gets.to_i

  #do the calculation
  payment = (p*(r/n)*(1 + (r/n))**(n*t))/((1 + (r/n))**(n*t) - 1)

  puts "The monthly repayment of the morgage is: $#{payment}"



#BMI Calculator
when 'bmi'
  puts 'You chose BMI!'    # TODO: Actually do the addition
  #Get the user inputsq
  print "What is your kilogram?: "
  kilogram = gets.to_f

  print "What is your height in cm?: "
  input = gets.to_f
  height = input / 100

  #do the calculation
  output = kilogram / (height**2)
 if output < 18.5
  puts "Your BMI is: #{output}"
  puts "Your underweight!"
elsif output >= 19 && output <= 24.9
  puts "Your BMI is: #{output}"
  puts "Your normal!"
else
  puts "Your BMI is: #{output}"
  puts "Your overwight!"
end


#Trip Calculator
when 'trip'
  puts 'You chose Trip Calculator!'    # TODO: Actually do the addition
  #Get the user inputsq
  print "What is the distance?: "
  distance = gets.to_f
  print "What is the miles in gallon?: "
  miles = gets.to_f
  print "What is the price per gallon?: "
  price = gets.to_f
  print "What is the speed in miles?: "
  speed = gets.to_f

  # print "What is the power number?: "
  # second_number = gets.to_i

  #do the calculation
  trip_time = distance / speed
  total_cost = (distance / miles)*price


  puts "The trim time is: #{trip_time}hr"
  puts "Total cost of the trip is $#{total_cost}"




#if nothing is selected
  else
    puts 'You chose invalid keyword: try again!'
  end

  show_menu
  menu_choice = gets.chomp.downcase
end

puts "Thanks for using this crappy calculator!"
