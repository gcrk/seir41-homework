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

def show_menu
  puts 'Calculator'#use '.center' to styling?
  puts '-=' *40 #dividing line
  puts '[a] - Addition'
  puts '[s] - Subtraction'
  puts '[m] - Multiplication'
  puts '[d] - Division'
  puts '[e] - Exponent'
  puts '[r] - Square root'
  puts '[q] - Quit'#already working
  print 'Enter your choice:'
end

show_menu
menu_choice = gets.chomp.downcase

until menu_choice == 'q'
  #handle the user's menu_choice
  case menu_choice
  when'a'
    puts 'You chose addition!'
    print 'Number1 you want to add on:'
    add1 = gets.chomp.to_f
    print 'Number2 you want to add on:'
    add2 = gets.chomp.to_f
    puts "The result is #{add1 + add2}."
  when's'
    puts 'You chose subtraction!'
    print 'Number you want to subtract from:'
    sub1 = gets.chomp.to_f
    print 'Number you want to subtract:'
    sub2 = gets.chomp.to_f
    puts "The result is #{sub1 - sub2}."
  when'm'
    puts 'You chose multiplation!'
    print 'Number1 you want to multiplicate:'
    mul1 = gets.chomp.to_f
    print 'Number2 you want to multiplicate:'
    mul2 = gets.chomp.to_f
    puts "The result is #{mul1 * mul2}."
  when'd'
    puts 'You chose division!'
    print 'Number you want to divide:'
    div1 = gets.chomp.to_f
    print 'Number you want to divide:'
    div2 = gets.chomp.to_f
    puts "The result is #{div1 / div2}."
  when'e'
    puts 'You chose exponation!'
    print 'Number as base:'
    exp1 = gets.chomp.to_f
    print 'Number as exponent:'
    exp2 = gets.chomp.to_f
    puts "The result is #{exp1 ** exp2}."
  when'r'
    puts 'You chose square root!'
    print 'Number you want to know its square root:'
    squ = gets.chomp.to_f
    puts "The result is #{Math.sqrt(squ)}."
  else
    puts 'Invalid selection.'
  end
  #show_menu
  show_menu
  #get a new menu_choices
  menu_choice = gets.chomp.downcase
end

puts 'Thanks for using this calculator!'
