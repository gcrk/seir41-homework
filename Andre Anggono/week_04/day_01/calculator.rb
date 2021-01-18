def print_menu
  puts '-=' * 20
  puts 'Calculator'.center(40)
  puts '-=' * 20
  puts ' [a]  - Addition'
  puts ' [s]  - Subtraction'
  puts ' [m]  - Multiplication'
  puts ' [d]  - Division'
  puts ' [x]  - Exponents'
  puts ' [sr] - Square Root'
  puts ' [r]  - Remainder'
  puts ' [q]  - Quit'
  puts '-=' * 20
  print 'What would you like to do? '
end

def sum(num1, num2)
  num1 + num2
end

def subtract(num1, num2)
  num1 - num2
end

def multiply(num1, num2)
  num1 * num2
end

def divide(num1, num2)
  num1 / num2
end

def exponents(num1, num2)
  num1 ** num2
end

def square_root(num)
  Math.sqrt(num)
end

def remainder(num1, num2)
  num1 % num2
end

print_menu
choice = gets.chomp.downcase

until choice == 'q'
  case choice
  when 'a'
    print 'Enter the first number: '
    first_num = gets.chomp.to_i
    print 'Enter the number you would like to add by: '
    second_num = gets.chomp.to_i
    puts "Result: #{first_num} + #{second_num} = #{sum(first_num, second_num)}"
  when 's'
    print 'Enter the first number: '
    first_num = gets.chomp.to_i
    print 'Enter the number you would like to subtract by: '
    second_num = gets.chomp.to_i
    puts "Result: #{first_num} - #{second_num} = #{subtract(first_num, second_num)}"
  when 'm'
    print 'Enter the first number: '
    first_num = gets.chomp.to_i
    print 'Enter the number you would like to multiply by: '
    second_num = gets.chomp.to_i
    puts "Result: #{first_num} x #{second_num} = #{multiply(first_num, second_num)}"
  when 'd'
    print 'Enter the first number: '
    first_num = gets.chomp.to_i
    print 'Enter the number you would like to divide by: '
    second_num = gets.chomp.to_i
    puts "Result: #{first_num} / #{second_num} = #{divide(first_num, second_num)}"
  when 'x'
    print 'Enter the first number: '
    first_num = gets.chomp.to_i
    print 'Enter the exponent: '
    second_num = gets.chomp.to_i
    puts "Result: #{first_num} to the power of #{second_num} is #{exponents(first_num, second_num)}"
  when 'sr'
    print 'Enter the number you would like to find the square root of: '
    first_num = gets.chomp.to_i
    puts "Result: The square root of #{first_num} is #{square_root(first_num)}"
  when 'r'
    print 'Enter the first number: '
    first_num = gets.chomp.to_i
    print 'Enter the number you would like to divide by: '
    second_num = gets.chomp.to_i
    puts "Result: The remainder of #{first_num} / #{second_num} is #{remainder(first_num, second_num)}"
  else puts 'Invalid Selection!'
  end

  print_menu
  choice = gets.chomp.downcase
end

puts 'Exited the application successfully.'
