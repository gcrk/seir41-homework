def show_menu
  puts "Calculator"
  puts "-=" * 40  # El cheapo horizontal dividing line
  puts "[a] - Addition"
  puts "[s] - Subtraction"
  puts "[m] - Multiplication"
  puts "[d] - Division"
  puts "[sq] - Square Root"
  #TODO: add other options here
  puts "[q] - Quit"
  print "Enter your choice: "
end

#Addition
def add ( a, b )
  a + b
end

#Subtraction
def subtract ( a, b )
  a - b
end

#Multiplication
def multiply ( a, b )
  a * b
end

#Division
def division ( a, b )
  a / b
end

#Exponentials
def exponential ( a, b )
  a ** b
end

#Square Roots
def square_root ( a )
  Integer.sqrt(a)
end


show_menu

menu_choice = gets.chomp.downcase

until menu_choice == 'q'
  #handle the user choice
  #elsif/if
  case menu_choice
  when 'a'
    puts 'You chose addition' #TODO actually do the addition, could do multiple arguments
    print 'What is the first number you would you like to start with?: '
    a = gets.to_i
    print 'What number would you like to add?: '
    b = gets.to_i
    puts "Result: #{add(a, b)}" # TODO: stay on screen and keep adding?
  when 's'
    puts 'You chose subtraction' #TODO actually do the subtraction, could do multiple arguments
    print 'What is the first number you would you like to start with?: '
    a = gets.to_i
    print 'What number would you like to subtract?: '
    b = gets.to_i
    puts "Result: #{subtract(a, b)}" # TODO: stay on screen and keep subtracting?
  when 'm'
    puts 'You chose multiplication' #TODO actually do the subtraction, could do multiple arguments
    print 'What is the first number you would you like to start with?: '
    a = gets.to_i
    print 'What number would you like to multiply by?: '
    b = gets.to_i
    puts "Result: #{multiply(a, b)}" # TODO: stay on screen and keep multiplying?
  when 'd'
    puts 'You chose division'
    print 'What is the first number you would you like to start with?: '
    a = gets.to_i
    print 'What number would you like to divide by?: '
    b = gets.to_i
    puts "Result: #{divide(a, b)}" # TODO: stay on screen and keep dividing?
  when 'e'
    puts 'You chose exponents'
    print 'What is the first number you would you like to start with?: '
    a = gets.to_i
    print 'How many times would you like to multiply this number by itself?: '
    b = gets.to_i
    puts "Result: #{exponential(a, b)}" # TODO: stay on screen and keep multiplying?
  when 'sq'
    puts 'You chose square roots'
    print 'What is the number you would you like to square root?: '
    a = gets.to_i
    puts "Result: #{square_root(a)}" # TODO: stay on screen and keep multiplying?
  else
    puts 'Invalid selection. Please try again.'
  end
  show_menu
  menu_choice = gets.chomp.downcase
end

puts "Thanks for using this crappy calculator!"
