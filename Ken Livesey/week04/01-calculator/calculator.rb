=begin
# Calculator

### Explanation
- You will be building a calculator.  A calculator can perform multiple arithmetic operations.  Your function should allow the user to choose which operation is expected, enter in the values to perform the operation on, and ultimately view the result.

### Specification:
- A user should be given a menu of operations
- A user should be able to choose from the menu
- A user should be able to enter numbers to perform the operation on
- A user should be shown the result
- This process should continue until the user selects a quit option from the menu

#### Phase 1
- Calculator functionality
- Calculator should be able to do basic arithmetic (+,-, *, /)

#### Phase 2
- Advanced Calculator functionality
- Calculator should be able to do basic arithmetic (exponents, square roots)

#
# Bonus
## Mortgage Calculator
Calculate the monthly required payment given the other variables as input (look up the necessary variables)

## BMI Calculator
Calculate the body mass index (BMI) for an individual, given their height and weight

## Trip Calculator
Calculate a trip time and cost given inputs for
- distance
- miles per gallon
- price per gallon
- speed in miles per hour

Bonus Challenge

## Do-It-Yourself Ruby REPL

Try to create your own Ruby REPL (Read Evaluate Print Loop) program.

It should show a prompt, read some Ruby code from the user, `eval`uate their code, print the result and loop back to the start.

### Sample Session

```
$ ruby repl.rb
Welcome to Ruby REPL
> 2 + 7
9
> "some" + "string"
"somestring"
>
```
=end

#definition of the main menu
def show_menu
  puts "-=" * 40
  puts "Calculator".center(80)
  puts "-=" * 40
  puts "[a] - Addition"
  puts "[s] - Subtraction"
  puts "[m] - Multiplication"
  puts "[d] - Division"
  puts "[sq] - Square Root"
  puts "[ex] - Exponential"
  # TODO: Add other options here
  puts "[q] - Quit"
  print "Enter your choice: "
end

#this defines the global numbers & displays the UI prompts
def numbers()
  puts 'What is the first number: '
  @first_number = gets.to_f
  puts "What is the second number: "
  @second_number = gets.to_f
end

#this is the program definition of the addition method
def addition(value1, value2)
  result = value1 + value2
  puts "The sum of #{ value1 } + #{ value2 } = #{ result }"
end

#this is the program definition of the subtraction method
def subtraction(value1, value2)
  result = value1 - value2
  puts "The sum of #{ value1 } - #{ value2 } = #{ result }"
end

#this is the program definition of the multiplication method
def multiplication(value1, value2)
  result = value1 * value2
  puts "The sum of #{ value1 } x #{ value2 } = #{ result }"
end

#this is the program definition of the division method
def division(value1, value2)
  result = value1 / value2
  puts "The sum of #{ value1 } / #{ value2 } = #{ result }"
end

#this is the program definition of the square root method
def square_root(value1)
  result = Math.sqrt(value1)
  puts "The square root of #{ value1 } = #{ result }"
end

#this is the program definition of the exponential method
def exponential(value1)
  result = Math.exp(value1)
  puts "The result is #{ result }"
end

#main menu function starts here
show_menu
menu_choice = gets.chomp.downcase

until menu_choice == 'q'
  case menu_choice

  #UI prompts start from here
  # this is the addition process
  when 'a'
    puts 'You chose addition!'
    numbers()
    addition(@first_number, @second_number)

  # subtraction process
  when 's'
    puts 'You chose subtraction'
    numbers()
    subtraction(@first_number, @second_number)

  # multiplication process
  when 'm'
    puts 'You chose multiplication'
    numbers()
    multiplication(@first_number, @second_number)

  # division process
  when 'd'
    puts 'You chose division'
    numbers()
    division(@first_number, @second_number)

  #square root process
  when 'sq'
    puts 'You chose square root'
    puts 'What is the number you want to find the square root of: '
    first_number = gets.to_f
    square_root(first_number)

  #exponential process
  when 'ex'
      puts 'You chose exponential'
      puts 'What is the number you want to calculate: '
      first_number = gets.to_f
      exponential(first_number)
  else
    puts 'Invalid selection. Please choose again.'
end

  show_menu
  menu_choice = gets.chomp.downcase
end

puts "Thanks for using my crappy calculator!"
